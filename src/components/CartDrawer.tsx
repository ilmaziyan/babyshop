import type { CartItem } from '../App';

type Props = {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onClear: () => void;
};

export const CartDrawer = ({
  open,
  items,
  onClose,
  onUpdateQuantity,
  onClear
}: Props) => {
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className={`cart-drawer ${open ? 'open' : ''}`}>
      <div className="cart-drawer-backdrop" onClick={onClose} />
      <aside className="cart-drawer-panel">
        <header className="cart-header">
          <h2>Your cart</h2>
          <button className="icon-btn" onClick={onClose} aria-label="Close cart">
            ×
          </button>
        </header>

        {items.length === 0 ? (
          <p className="cart-empty">Your cart is empty. Start by adding something cute!</p>
        ) : (
          <ul className="cart-list">
            {items.map((item) => (
              <li key={item.product.id} className="cart-item">
                <div className="cart-item-main">
                  <h3>{item.product.name}</h3>
                  <p>${item.product.price.toFixed(2)}</p>
                </div>
                <div className="cart-item-controls">
                  <label>
                    Qty:
                    <input
                      type="number"
                      min={0}
                      value={item.quantity}
                      onChange={(e) =>
                        onUpdateQuantity(
                          item.product.id,
                          Number(e.target.value) || 0
                        )
                      }
                    />
                  </label>
                  <button
                    className="link-btn"
                    onClick={() => onUpdateQuantity(item.product.id, 0)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <footer className="cart-footer">
          <div className="cart-total-row">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <button
            className="primary-btn full-width"
            disabled={items.length === 0}
            onClick={() => alert('Checkout flow not implemented in this demo.')}
          >
            Checkout
          </button>
          {items.length > 0 && (
            <button className="link-btn full-width" onClick={onClear}>
              Clear cart
            </button>
          )}
        </footer>
      </aside>
    </div>
  );
};




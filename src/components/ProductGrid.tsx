import type { Product } from '../data/products';

type Props = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

export const ProductGrid = ({ products, onAddToCart }: Props) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <article key={product.id} className="product-card">
          <div className="product-image">
            <img
              src={product.imageUrl}
              alt={product.name}
              loading="lazy"
            />
          </div>
          <div className="product-info">
            <div className="product-title-row">
              <h3>{product.name}</h3>
              {product.tag && <span className="product-tag">{product.tag}</span>}
            </div>
            <p className="product-description">{product.description}</p>
            <div className="product-footer">
              <span className="product-price">
                ${product.price.toFixed(2)}
              </span>
              <button
                className="secondary-btn"
                onClick={() => onAddToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};



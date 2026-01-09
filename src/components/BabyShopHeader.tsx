import { NavLink } from 'react-router-dom';

type Props = {
  cartCount: number;
  onCartClick: () => void;
};

export const BabyShopHeader = ({ cartCount, onCartClick }: Props) => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=80&h=80&fit=crop&crop=center"
          alt="Babyshop logo"
          className="logo-mark-img"
        />
        <span className="logo-text">Babyshop</span>
      </div>
      <nav className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <button className="cart-btn" onClick={onCartClick}>
        <span className="cart-icon">🛒</span>
        <span>Cart</span>
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </button>
    </header>
  );
};



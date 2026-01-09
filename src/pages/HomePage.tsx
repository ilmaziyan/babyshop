import { ProductGrid } from '../components/ProductGrid';
import { PRODUCTS, Product } from '../data/products';

type Props = {
  onAddToCart: (product: Product) => void;
};

export const HomePage = ({ onAddToCart }: Props) => {
  return (
    <main className="main-content">
      <section className="hero hero-with-image">
        <div className="hero-text">
          <h1>Everything cute for your little one.</h1>
          <p>
            Discover curated baby essentials, from cozy blankets to
            stroller-ready outfits. Gentle, safe, and parent-approved.
          </p>
          <button
            className="primary-btn"
            onClick={() =>
              document
                .getElementById('home-catalog')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Shop Collection
          </button>
        </div>
        <div className="hero-image-card">
          <img
            src="https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&h=500&fit=crop&q=80"
            alt="Baby in soft knitted dress set"
          />
          <div className="hero-image-overlay">
            <p className="hero-badge">New in • Winter Snuggles</p>
            <h2>Soft Knitted Sets</h2>
            <p>Warm layers for tiny explorers, sized 0–24 months.</p>
          </div>
        </div>
      </section>

      <section id="home-catalog" className="catalog-section">
        <h2>Featured baby essentials</h2>
        <p className="section-subtitle">
          Shop our most-loved items, hand-picked by real parents.
        </p>
        <ProductGrid products={PRODUCTS} onAddToCart={onAddToCart} />
      </section>
    </main>
  );
};



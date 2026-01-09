import { ProductGrid } from '../components/ProductGrid';
import { PRODUCTS, Product } from '../data/products';

type Props = {
  onAddToCart: (product: Product) => void;
};

export const ShopPage = ({ onAddToCart }: Props) => {
  return (
    <main className="main-content">
      <section className="page-header">
        <h1>Shop all baby essentials</h1>
        <p className="section-subtitle">
          Clothing, toys, bath time and sleep favorites in one cozy place.
        </p>
      </section>
      <ProductGrid products={PRODUCTS} onAddToCart={onAddToCart} />
    </main>
  );
};




import ProductCard from "./ProductCard";
import products from "../data/products";

function ProductList() {
  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;

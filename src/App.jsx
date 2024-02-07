import { products as initialProduct } from "./assets/mocks/products.json"
import { Products } from "./assets/components/Products.jsx"
import { Header } from "./assets/components/Header"
import { Footer } from "./assets/components/Footer.jsx"
import { useState } from "react";
import { IS_DEVELOPMENT } from "./config.js"
import { useFilters } from "./assets/hooks/useFilters.jsx"


function App() {
  const [products] = useState(initialProduct);
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products);
  return (
    <>
      <Header />
      <Products products={filteredProducts} />
     {IS_DEVELOPMENT &&  <Footer />}
    </>
  );
}

export default App;

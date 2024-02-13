import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import ProductCard from "../components/ProducCard";
import Loading from "../components/LoadingCard";
import { useEffect, useState } from "react";
import ClearImg from "../utils/ClearImg";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();

      setProducts(ClearImg(data));
      setLoading(false);
    };
    getProducts();
  }, []);

  console.log(products);
  return (
    <>
      <main style={{ marginTop: "20px" }}>
        <div style={{ padding: "20px" }}>
          <Grid container spacing={2} disableEqualOverflow>
            {loading
              ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <Grid key={num} xs={6} md={4}>
                    <Loading />
                  </Grid>
                ))
              : products.map((product) => (
                  <Grid key={product.id} xs={6} md={4}>
                    <ProductCard {...product} />
                  </Grid>
                ))}
          </Grid>
        </div>
      </main>
    </>
  );
}

export default Home;

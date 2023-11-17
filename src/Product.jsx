import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import products from "./data/products.json";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [cari, setCari] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  function inputCari(event) {
    setCari(event.target.value);
  }

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(cari.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  }, [cari]);

  return (
    <>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Cari produk"
        onChange={(event) => inputCari(event)}
      />
      <div className="row g-3">
        {filteredProducts.map((product, index) => (
          <div className="col-md-3" key={index}>
            <div className="card">
              <img
                src={product.thumbnail}
                className="card-img-top object-fit-cover"
                style={{ height: "15vw" }}
              />
              <div className="card-body">
                <h5 className="card-title text-truncate">{product.title}</h5>
                <p className="card-text text-truncate">{product.description}</p>
                <div className="d-flex flex-row-reverse">
                  <p className="fw-bold fs-5">$ {product.price}</p>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-grid">
                  <Link
                    to={`product/${product.id}`}
                    className="btn btn-primary"
                  >
                    Product Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

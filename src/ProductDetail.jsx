import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// import products from "./data/products.json";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const [stock, setStock] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  // const product = products.find((product) => product.id === parseInt(id));
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setStock(data.stock);
      });
  }, []);

  function addToCart() {
    if (stock > 0) {
      setStock(stock - 1);
    } else {
      alert("Stock habis!");
    }
  }

  return (
    <>
      <button onClick={() => navigate(-1)} className="btn btn-primary mb-3">
        Back to home
      </button>
      <div className="row">
        <div className="col-md-4">
          <img src={product.thumbnail} className="w-100" />
        </div>
        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-center">
            <h1>{product.title}</h1>
            <p>
              Rating :{" "}
              <span className="badge text-bg-warning">{product.rating}</span>
            </p>
          </div>
          <p className="text-muted fs-6">
            Brand : {product.brand} ({product.category})
          </p>
          <p>{product.description}</p>
          <p>
            Stock : <span className="fw-bold">{stock}</span>
          </p>
          <p className="d-flex justify-content-end align-items-center">
            <span className="fs-5 text-decoration-line-through me-2">
              $ {product.price}
            </span>
            <span className="fs-1 fw-bold text-danger">
              ${" "}
              {(product.price * (1 - product.discountPercentage / 100)).toFixed(
                2
              )}
            </span>
          </p>
          <div className="d-flex flex-row-reverse">
            <button onClick={addToCart} className="btn btn-warning">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="row pt-3 g-3">
        {product.images?.map((image, index) => (
          <div className="col-md-3" key={index}>
            <img src={image} alt="" className="img-thumbnail w-100" />
          </div>
        ))}
      </div>
    </>
  );
}

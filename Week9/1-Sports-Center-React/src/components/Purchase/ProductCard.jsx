import { FaCartShopping } from "react-icons/fa6";

const ProductCard = ({ title, oldPrice, newPrice, image }) => {
  return (
    <div className="product-wrapper">
      <div className="card h-100 text-center">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h3>{title}</h3>
          <p className="card-text fw-bold fs-6">
            <span className="text-decoration-line-through me-2">
              {oldPrice}
            </span>
            / {newPrice}
          </p>
          <div className="add-cart d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
            <FaCartShopping />
            <a
              className="card-text fw-bolder fs-6 text-dark text-decoration-none"
              href="#"
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import ProductCard from "./ProductCard";
import p1 from "../../assets/purchase1.jpg";
import p2 from "../../assets/purchase2.jpg";
import p3 from "../../assets/purchase3.jpg";
import p4 from "../../assets/purchase4.jpg";

const products = [
  {
    title: "Kettlebell / 5kg",
    oldPrice: "89.99$",
    newPrice: "59.99$",
    image: p1,
  },
  {
    title: "Treadmill",
    oldPrice: "899.99$",
    newPrice: "599.99$",
    image: p2,
  },
  {
    title: "Adjustable Dumbbell",
    oldPrice: "89.99$",
    newPrice: "59.99$",
    image: p3,
  },
  {
    title: "Kettlebell / 3kg",
    oldPrice: "89.99$",
    newPrice: "59.99$",
    image: p4,
  },
];

const ProductList = () => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-around align-items-center gap-5 w-100 align-items-stretch">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;

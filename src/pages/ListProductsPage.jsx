import CardComponent from "../components/CardComponent";
import { useEffect, useState } from "react";

const ListProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    return (
        <div className="d-flex justify-content-center flex-wrap">
            {products.map((product) => (
                <CardComponent
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                ></CardComponent>
            ))}
        </div>
    );
};

export default ListProductsPage;
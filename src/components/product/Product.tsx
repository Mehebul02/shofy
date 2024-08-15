import Container from "../Container";
import Card from "./Card";

const Product = () => {
    return (
        <Container className="mt-10">
            <h1 className="text-4xl font-semibold "> <span className="text-[#115061] underline">Trending</span> Products</h1>
       <Card/>
        </Container>
    );
};

export default Product;
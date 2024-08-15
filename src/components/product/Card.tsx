import { smartCard } from "@/assets";
import Image from "next/image";

const Card = () => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
 
    <Image
      src={smartCard}
      alt="Shoes" />
 
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      {/* <Button className="btn btn-primary">Buy Now</Button> */}
    </div>
  </div>
</div>
    );
};

export default Card;
import { camera, laptop, laptop2, mobile, smart, smartCard } from "@/assets";
import Image from "next/image";

const Card = () => {
    return (
       <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* 1st card  */}
         <div className="card bg-base-100  shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
  <Image
    className="w-full h-64 object-cover"
    src={smartCard}
    alt="Shoes"
  />
  <div className="card-body p-4">
    <h2 className="card-title text-xl font-bold mb-2">Smart Watch</h2>
    <p className="text-gray-600 mb-4">
    A smartwatch is a versatile wearable device offering key features like...
    </p>
    <p className="text-xl font-semibold">Price: $365</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-[#115061] text-white py-2 px-4 rounded-lg hover:bg-[#1a819e] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Buy Now
      </button>
    </div>
  </div>
</div>
        {/* 2nd card  */}
         <div className="card bg-base-100  shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
  <Image
    className="w-full h-64 object-cover"
    src={laptop}
    alt="Shoes"
  />
  <div className="card-body p-4">
    <h2 className="card-title text-xl font-bold mb-2">Laptop 2.0</h2>
    <p className="text-gray-600 mb-4">
    A smartwatch is a versatile wearable device offering key features like...
    </p>
    <p className="text-xl font-semibold">Price: $365</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-[#115061] text-white py-2 px-4 rounded-lg hover:bg-[#1a819e] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Buy Now
      </button>
    </div>
  </div>
</div>
        {/* 3rd card  */}
         <div className="card bg-base-100  shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
  <Image
    className="w-full h-64 object-cover"
    src={laptop2}
    alt="Shoes"
  />
  <div className="card-body p-4">
    <h2 className="card-title text-xl font-bold mb-2">Laptop 3.0</h2>
    <p className="text-gray-600 mb-4">
    A smartwatch is a versatile wearable device offering key features like...
    </p>
    <p className="text-xl font-semibold">Price: $365</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-[#115061] text-white py-2 px-4 rounded-lg hover:bg-[#1a819e] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Buy Now
      </button>
    </div>
  </div>
</div>
        {/* 4th card  */}
         <div className="card bg-base-100  shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
  <Image
    className="w-full h-64 object-cover"
    src={mobile}
    alt="Shoes"
  />
  <div className="card-body p-4">
    <h2 className="card-title text-xl font-bold mb-2">Nokia 2.4</h2>
    <p className="text-gray-600 mb-4">
    A smartwatch is a versatile wearable device offering key features like...
    </p>
    <p className="text-xl font-semibold">Price: $365</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-[#115061] text-white py-2 px-4 rounded-lg hover:bg-[#1a819e] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Buy Now
      </button>
    </div>
  </div>
</div>
        {/* 5th card  */}
         <div className="card bg-base-100  shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
  <Image
    className="w-full h-64 object-cover"
    src={camera}
    alt="Shoes"
  />
  <div className="card-body p-4">
    <h2 className="card-title text-xl font-bold mb-2">canon lbp6030</h2>
    <p className="text-gray-600 mb-4">
    A smartwatch is a versatile wearable device offering key features like...
    </p>
    <p className="text-xl font-semibold">Price: $895</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-[#115061] text-white py-2 px-4 rounded-lg hover:bg-[#1a819e] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Buy Now
      </button>
    </div>
  </div>
</div>
        {/* 4th card  */}
         <div className="card bg-base-100  shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
  <Image
    className="w-full h-64 object-cover"
    src={smart}
    alt="Shoes"
  />
  <div className="card-body p-4">
    <h2 className="card-title text-xl font-bold mb-2">Smart Watch</h2>
    <p className="text-gray-600 mb-4">
    A smartwatch is a versatile wearable device offering key features like...
    </p>
    <p className="text-xl font-semibold">Price: $365</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-[#115061] text-white py-2 px-4 rounded-lg hover:bg-[#1a819e] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Buy Now
      </button>
    </div>
  </div>
</div>
       </div>
    );
};

export default Card;
import { bannerImageOne } from "@/assets";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

// const getData = async () => {
//   const response = await fetch(`${process.env.API_URL}api/products`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return response.json();
// };

const Banner = async () => {
  // const { banner } = await getData();

  return (
    <div className="bg-[#115061] py-20 text-themeWhite">
      <Container className="flex items-center justify-between">
        <div className="flex flex-col gap-5">
          <p className="text-base font-semibold">Starting at $999.90</p>
          <h2 className="text-5xl font-bold max-w-[500px]">The best tablet Collection 2024</h2>
          <p className="text-lg font-bold">
          Exclusive offer
            <span className="text-lightYellow mx-1">-30%</span>
            off this week
          </p>
          <Button
            href='/products'
            className="flex items-center gap-1 bg-themeWhite text-black rounded-md w-32 px-0 justify-center text-sm font-semibold hover:bg-transparent hover:text-themeWhite py-3 border border-transparent hover:border-white/40 duration-200"
          >
            Shop Now <GoArrowRight className="text-lg" />
          </Button>
        </div>
        <div>
          <Image src={bannerImageOne} alt="bannerImageOne" />
        </div>
      </Container>
    </div>
  );
};

export default Banner;

import BottomHeader from "@/components/header/BottomHeader";
import Banner from "@/components/pages/home/Banner";
import Product from "@/components/product/Product";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main>
      <BottomHeader />
      <Banner/>
      <Product/>
    </main>
  );
}

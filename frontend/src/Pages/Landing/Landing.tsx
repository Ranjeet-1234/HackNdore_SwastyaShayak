import ImageSlider from "../../components/ImageSlider"
import SearchBar from "../../components/SearchBar";
import FindServices from "../../components/HeroServices";
import DistrictInfo from "../../components/DistrictInfo";

import img1 from "../../assets/slider/1.jpg"
import img2 from "../../assets/slider/2.png"
function Landing() {

  const images = [
    img1,
    img2
  ];

  return (
    <div>

      <div className="w-full">
        <ImageSlider images={images} interval={3000} />
      </div>

      <div className="flex justify-center mt-10 space-x-8">
        <DistrictInfo />
        <SearchBar />
        <FindServices />
      </div>
    </div>
  )
}

export default Landing
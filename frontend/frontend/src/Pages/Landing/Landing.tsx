import React from 'react';
// Importing custom components
import ImageSlider from "../../components/ImageSlider";
import SearchBar from "../../components/SearchBar";
import FindServices from "../../components/HeroServices";
import DistrictInfo from "../../components/DistrictInfo";

// Importing images for the slider
import img1 from "../../assets/slider/1.jpg";
import img2 from "../../assets/slider/2.png";

function Landing() {
  // Array of images to be used in the ImageSlider component
  const images = [
    img1,
    img2
  ];

  return (
    <div>
      {/* Image slider section */}
      <div className="w-full">
        {/* ImageSlider component to display the images with a 3-second interval */}
        <ImageSlider images={images} interval={3000} />
      </div>

      {/* Section containing DistrictInfo, SearchBar, and FindServices components */}
      <div className="flex justify-center mt-10 space-x-8">
        <DistrictInfo />
        <SearchBar />
        <FindServices />
      </div>
    </div>
  );
}

export default Landing;

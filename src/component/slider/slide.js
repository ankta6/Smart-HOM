import React from "react";
import images from "./image";
import CustomSlider from "./custom";

export default function App() {
  return (
    <div className="App">
      <CustomSlider>
        {images.map((image, index) => {
          return (
            <div key={index} className="image-container">
              <img src={image.imgURL} alt={image.imgAlt} />
              <h3>{image.title}</h3>
            </div>
          );
        })}
      </CustomSlider>
    </div>
  );
}

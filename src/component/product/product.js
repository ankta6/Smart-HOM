import React from "react";
import "./product.css";

const Ideas = () => {
  return (
    <div className="idea-container">
      <h1 className="idea-title">GET IDEAS</h1>
      <div className="ideas-grid">
        <div className="ideas-ideas">
          <div className="heading-idea">Kitchen and Dining</div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFLU8r7TrhfR_0DE8iZZqztldaDoB1VBJbA&s"
            alt="Kitchen and Dining"
          ></img>
          <div className="para-idea">
            Here are our favorite pins on modern kitchen and dining areas. We
            love kitchen interior design. Don't you?
          </div>
        </div>

        <div className="ideas-ideas">
          <div className="heading-idea">Living</div>
          <img
            src="https://i.pinimg.com/originals/39/8e/5a/398e5abc3a5c8a5e50c54ca7323224df.jpg"
            alt="Living"
          ></img>
          <div className="para-idea">
            Living room interior design for your home with wardrobe, storage
            solutions, false ceiling, TV units, sofa design, centre table
            design. Explore Today.
          </div>
        </div>

        <div className="ideas-ideas">
          <div className="heading-idea">Home Office</div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWO5kf758eGkHjP2iFRGvoetsuC3gfj8NJHQ&s"
            alt="Home Office"
          ></img>
          <div className="para-idea">
            Work smart with our stylish & budget-friendly designs. Craft the
            home office of your dreams with our expert designers today!
          </div>
        </div>

        <div className="ideas-ideas">
          <div className="heading-idea">Bedroom</div>
          <img
            src="https://fancyhouse-design.com/wp-content/uploads/2023/11/The-bedrooms-luxury-aesthetic-is-complemented-by-an-ultra-modern-floating-bed-design..jpg"
            alt="Bedroom"
          ></img>
          <div className="para-idea">
            Explore Home Designing's board "Bedroom Designs", followed by 736299
            people on Pinterest. See more ideas about bedroom design
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas;

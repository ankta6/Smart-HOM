import React from "react";
import "./getideas.css";

const Products = () => {
  return (
    <div className="product-container">
      <h1>SHOP PRODUCTS</h1>
      <div className="product-item">
        <div className="product-heading">Kitchen</div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBBH5k6ukNp6B9RQ8WFE5hSY5rTexr_wMcD6ajyAIZZ2nSfAXiVlsS-pe93g&s"
          alt="Kitchen"
        />
        <div className="product-description">
          Here are our favorite pins on modern kitchen and dining areas. We love
          kitchen interior design. Don't you?
        </div>
      </div>

      <div className="product-item">
        <div className="product-heading">Gifts Idea</div>
        <img
          src="https://www.awesomehamperco.co.uk/cdn/shop/articles/gift_1500x.jpg?v=1661256408"
          alt="Gifts Idea"
        />
        <div className="product-description">
          Find Gifts for Everyone with Amazon.in's Gift Finder. Get unique gift
          ideas, discover this year's top gifts and choose the best gift for
          special occasions.
        </div>
      </div>

      <div className="product-item">
        <div className="product-heading">Storage</div>
        <img
          src="https://4.imimg.com/data4/RX/XD/MY-5374777/seher-wardrobe-500x500.jpg"
          alt="Storage"
        />
        <div className="product-description">
          Storage ideas for small spaces. See more ideas about small spaces,
          home DIY, home organization.
        </div>
      </div>

      <div className="product-item">
        <div className="product-heading">Beds</div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbv_gmdmJjzwoRQ6dvkCEfAGHDhgu8n7vq4IVQZMgveg&s"
          alt="Beds"
        />
        <div className="product-description">
          Buy bed online in India at the best prices. Explore wooden beds with
          storage, queen size beds & king size beds. Shop for beds online.
        </div>
      </div>
    </div>
  );
};

export default Products;

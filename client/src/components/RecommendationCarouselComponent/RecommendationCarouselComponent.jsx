import React from "react";
import Slider from "react-slick";
import CardProduct from "../CardProduct/CardProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RecommendationCarouselComponent.css";
import { useNavigate } from "react-router-dom";

const RecommendationCarouselComponent = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();

  const handleDetail = (product) => {
    if (product) {
      navigate("/view-product-detail", {
        state: {
          productId: product._id,
          productName: product.productName,
          productSize: product.productSize,
          productImage: product.productImage,
          productDescription: product.productDescription,
          productCategory: product.productCategory,
          productPrice: product.productPrice,
        },
      });
    } else {
      alert("Không tìm thấy sản phẩm!");
    }
  };

  return (
    <div className="recommendation-container">
      {products && products.length > 0 ? (
        <Slider {...settings}>
          {products.map((product) => (
            <div
              key={product._id}
              className="carousel-item"
              style={{ cursor: "pointer" }}
              onClick={() => handleDetail(product)}
            >
              <CardProduct
                type="primary"
                img={product.productImage}
                title={product.productName}
                price={product.productPrice}
                id={product._id}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="no-products">Không có sản phẩm liên quan</p>
      )}
    </div>
  );
};

export default RecommendationCarouselComponent;

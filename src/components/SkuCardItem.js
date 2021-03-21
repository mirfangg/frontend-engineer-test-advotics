import React from "react";
import "../assets/css/SkuCardItem.css";
import more from "../assets/images/Icon - More - Filled.svg";

function SkuCardItem({ title, img }) {
  return (
    <div className="sku__card__item__container">
      <div className="sku__card__item__header">
        <span>{title}</span>
        <img src={more} alt="more-icon" />
      </div>
      {/* Main Top */}
      <div className="sku__card__item__main__top">
        <img src={img} alt="product-img" />
        <div className="item__description">
          <span className="item__description__product__name">
            [Nama Product]
          </span>
          <div className="item__description__product__price">
            <span>Rp XXX</span>
            <span>[jml terjual]</span>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="sku__card__item__main">
        <img src={img} alt="product-img" />
        <div className="item__description">
          <span className="item__description__product__name">
            [Nama Product]
          </span>
          <div className="item__description__product__price">
            <span>Rp XXX</span>
            <span>[jml terjual]</span>
          </div>
        </div>
      </div>
      <div className="sku__card__item__main">
        <img src={img} alt="product-img" />
        <div className="item__description">
          <span className="item__description__product__name">
            [Nama Product]
          </span>
          <div className="item__description__product__price">
            <span>Rp XXX</span>
            <span>[jml terjual]</span>
          </div>
        </div>
      </div>
      <div className="sku__card__item__main">
        <img src={img} alt="product-img" />
        <div className="item__description">
          <span className="item__description__product__name">
            [Nama Product]
          </span>
          <div className="item__description__product__price">
            <span>Rp XXX</span>
            <span>[jml terjual]</span>
          </div>
        </div>
      </div>
      <div className="sku__card__item__main">
        <img src={img} alt="product-img" />
        <div className="item__description">
          <span className="item__description__product__name">
            [Nama Product]
          </span>
          <div className="item__description__product__price">
            <span>Rp XXX</span>
            <span>[jml terjual]</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkuCardItem;

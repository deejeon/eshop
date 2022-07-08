import React from "react";
import "./Product.css";

function Product() {
    return (
        <div>
            <div className="product">
                <div className="product__info">
                    <p>Title</p>
                    <p className="product__price">$30.00</p>
                    <div className="product__rating">⭐️⭐️⭐️</div>
                </div>
                <img src="https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SL1500_.jpg" alt="" className="product__image" />
                <button>Add to Basket</button>
            </div>
        </div>
    )
}

export default Product
import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="https://wscai.org/wp-content/uploads/2022/03/wscai-artwork-advertising-website.png" alt="" className="home__image" />
                    <div className="home__row">
                        <Product />
                        <Product />
                    </div>
                    <div className="home__row">
                        <Product />
                        <Product />
                        <Product />
                    </div>
                    <div className="home__row">
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
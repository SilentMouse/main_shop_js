import React, {Component} from 'react';

class BestSellarItem extends Component {
    render() {
        return (
            <div className="list-with-image">
                <div className="overlay-container">
                    <img src="images/product-1.png" alt="product 1"/>
                    <a href="shop-product.html" className="overlay small">
                        <i className="fa fa-link"></i>
                    </a>
                </div>
                <h2><a href="shop-product.html">Consectetur 5.5" Vitae</a></h2>
                <p className="small">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
        );
    }
}

export default BestSellarItem;

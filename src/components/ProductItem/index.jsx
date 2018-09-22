import React, {Component} from 'react';

class ProductItem extends Component {
    render() {
        return (
            <div className="col-lg-4 col-sm-6 masonry-grid-item">
                <div className="listing-item">
                    <div className="overlay-container">
                        <img src="images/product-2.png" alt=""/>
                        <a href="shop-product.html" className="overlay small">
                            <i className="fa fa-plus"></i>
                            <span>View Details</span>
                        </a>
                    </div>
                    <div className="listing-item-body clearfix">
                        <h3 className="title"><a href="shop-product.html">{this.props.item.title}</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing. Impacewt
                            Dolor Screen</p>
                        <span className="price">$199.00</span>
                        <div className="elements-list pull-right">
                            <a   className="wishlist" title="wishlist"><i
                                className="fa fa-heart-o"></i></a>
                            <a  ><i className="fa fa-shopping-cart pr-10"></i>Add to
                                Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;

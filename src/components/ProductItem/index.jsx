import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class ProductItem extends Component {


    render() {

        var item = this.props.item

        return (
            <div className="col-lg-4 col-sm-6 masonry-grid-item">
                <div className="listing-item">
                    <div className="overlay-container">

                        {item.media ?
                            <img src={item.media[0].picture} alt=""/>
                            : <img src="images/product-2.png" alt=""/>
                        }
                        <Link to={"/products/" + item.id} className="overlay small">
                            <i className="fa fa-plus"></i>
                            <span>View Details</span>
                        </Link>
                    </div>
                    <div className="listing-item-body clearfix">
                        <h3 className="title"><Link to={"/products/" + item.id}>{item.title}</Link></h3>
                        <p>{this.props.item.description}</p>
                        <span className="price">&#8381; {item.price}</span>
                        <div className="elements-list pull-right">
                            <a className="wishlist" title="wishlist"><i
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
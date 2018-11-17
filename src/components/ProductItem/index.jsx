import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class ProductItem extends Component {


    render() {

        var item = this.props.item

        return (
            <div className="col-lg-4 col-sm-6 masonry-grid-item">
                <div className="listing-item">
                    <div className="overlay-container">

                        {item.media.length != 0 ?
                            <img className="product-item" src={item.media[0].picture} alt=""/>
                            : <img className="product-item" src="images/product-2.png" alt=""/>
                        }
                        <Link to={"/products/" + item.id} className="overlay small">
                            <i className="fa fa-plus"></i>
                            <span>View Details</span>
                        </Link>
                    </div>
                    <div className="listing-item-body clearfix">
                        <h3 className="title"><Link to={"/products/" + item.id}>{item.title}</Link></h3>
                        <p className="item-subtitle">{this.props.item.description.substring(0, 100) + "..."}</p>
                        <span className="price">&#8381; {item.price}</span>
                        <div className="elements-list pull-right">
                            {/*<a className="wishlist" title="wishlist"><i*/}
                                {/*className="fa fa-heart-o"></i></a>*/}
                            <a  href={"/products/" + item.id}><i className="fa fa-shopping-cart pr-10"></i>Купить</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;

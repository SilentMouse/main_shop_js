import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import Header from "../Header"
import Footer from "../Footer"

import * as actionCreators from "../../actions/products_actions"

class Products extends Component {

    state = {
        product: {}
    };




    componentDidMount() {
        window.jQuery(".owl-carousel.content-slider-with-controls-bottom").owlCarousel({
            items: 1,
            nav: true,
            navText: false,
            autoplay: false,
            dots: true,
            loop: true
        });

        if (!this.props.product){
            this.props.actions.setProductOnPage(parseInt(this.props.match.params.product_id))
        }else if (this.props.product.id != parseInt(this.props.match.params.product_id)){
            this.props.actions.setProductOnPage(parseInt(this.props.match.params.product_id))
        }

    }

    render() {

        const {
            product,
        } = this.props;



        return (
            <div>
                <div className="scrollToTop"><i className="fa fa-angle-up"></i></div>

                <div className="page-wrapper">

                    <Header/>

                    {/* page-intro start*/}
                    {/* ================ */}
                    <div className="page-intro">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <ol className="breadcrumb">
                                        <li><i className="fa fa-home pr-10"></i><a href="/">Главная</a></li>
                                        <li><a href="/">Католог</a></li>
                                        <li className="active">{product.title}</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* page-intro end */}

                    {/* main-container start */}
                    {/* ================ */}
                    <section className="main-container">

                        <div className="container">
                            <div className="row">

                                {/* main start */}
                                {/* ================ */}
                                <div className="main col-md-12">

                                    {/* page-title start */}
                                    {/* ================ */}
                                    <h1 className="page-title margin-top-clear">{product.title}</h1>
                                    {/* page-title end */}

                                    <div className="row">
                                        <div className="col-md-4">
                                            {/* Nav tabs */}
                                            <ul className="nav nav-pills white space-top" role="tablist">
                                                <li className="active"><a href="#product-images" role="tab" data-toggle="tab" title="images"><i className="fa fa-camera pr-5"></i> Фото</a></li>
                                                <li><a href="#product-video" role="tab" data-toggle="tab" title="video"><i className="fa fa-video-camera pr-5"></i> Видео</a></li>
                                            </ul>

                                            {/* Tab panes start*/}
                                            <div className="tab-content clear-style">
                                                <div className="tab-pane active" id="product-images">
                                                    <div className="owl-carousel content-slider-with-controls-bottom">
                                                        <div className="overlay-container">
                                                            <img src="/images/product-1-1.png" alt=""/>
                                                                <a href="/images/product-1-1.png" className="popup-img overlay" title="image title"><i className="fa fa-search-plus"></i></a>
                                                        </div>
                                                        <div className="overlay-container">
                                                            <img src="/images/product-1-2.png" alt=""/>
                                                                <a href="/images/product-1-2.png" className="popup-img overlay" title="image title"><i className="fa fa-search-plus"></i></a>
                                                        </div>
                                                        <div className="overlay-container">
                                                            <img src="/images/product-1-3.png" alt=""/>
                                                                <a href="/images/product-1-3.png" className="popup-img overlay" title="image title"><i className="fa fa-search-plus"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane" id="product-video">
                                                    <div className="overlay-container margin-top-clear">
                                                        <img src="/images/page-about-1.jpg" alt=""/>
                                                            <a href="/images/page-about-1.jpg" className="popup-img overlay" title="image title"><i className="fa fa-search-plus"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Tab panes end*/}
                                            <hr/>
                                                <span className="price"><del>$159.00</del> {product.price} руб.</span>
                                                <div className="elements-list pull-right clearfix">
                                                    <span><i className="fa fa-star text-default"></i><i className="fa fa-star text-default"></i><i className="fa fa-star text-default"></i><i className="fa fa-star text-default"></i><i className="fa fa-star"></i></span>
                                                    <a className="wishlist"><i className="fa fa-heart-o pr-5"></i>Wishlist</a>
                                                </div>
                                                <div className="clearfix"></div>
                                                <hr/>
                                                    <div className="row">
                                                        <form>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label>Quantity</label>
                                                                    <input type="text" className="form-control" value={1} onChange={()=>console.log("het")}/>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label>Color</label>
                                                                    <select className="form-control">
                                                                        <option>Red</option>
                                                                        <option>White</option>
                                                                        <option>Black</option>
                                                                        <option>Blue</option>
                                                                        <option>Orange</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label>Size</label>
                                                                    <select className="form-control">
                                                                        <option>5.3"</option>
                                                                        <option>5.7"</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <input  value="Add to Cart" className="btn btn-default" onClick={() => this.props.actions.setProductOnPage(parseInt(this.props.match.params.product_id))}/>
                                                            </div>
                                                        </form>
                                                    </div>
                                        </div>

                                        {/* product side start */}
                                        <aside className="col-md-8">
                                            <div className="sidebar">
                                                <div className="side product-item vertical-divider-left">
                                                    <div className="tabs-style-2">
                                                        {/* Nav tabs */}
                                                        <ul className="nav nav-tabs" role="tablist">
                                                            <li className="active"><a href="#h2tab1" role="tab" data-toggle="tab"><i className="fa fa-file-text-o pr-5"></i>Описание</a></li>
                                                            <li><a href="#h2tab2" role="tab" data-toggle="tab"><i className="fa fa-files-o pr-5"></i>Свойства</a></li>
                                                            <li><a href="#h2tab3" role="tab" data-toggle="tab"><i className="fa fa-star pr-5"></i>(3)Отзывы</a></li>
                                                        </ul>
                                                        {/* Tab panes */}
                                                        <div className="tab-content padding-top-clear padding-bottom-clear">
                                                            <div className="tab-pane fade in active" id="h2tab1">
                                                                <h4 className="title">Описание</h4>
                                                                {product.description}
                                                            </div>
                                                            <div className="tab-pane fade" id="h2tab2">
                                                                <h4 className="space-top">Specifications</h4>
                                                                <hr/>
                                                                    <dl className="dl-horizontal">
                                                                        <dt>Screen</dt>
                                                                        <dd>4.95” 1920x1080 display</dd>
                                                                        <dt>Cameras</dt>
                                                                        <dd>1.3MP front facing, 8MP rear facing with Optical Image Stabilization</dd>
                                                                        <dt>Dimensions</dt>
                                                                        <dd>69.17 x 137.84 x 8.59 mm (130g)</dd>
                                                                        <dt>Battery</dt>
                                                                        <dd>2300 mAh. Talk time up to 17 hours*. Standby time up to 300 hours†. Internet use time up to 8.5 hours on Wi-Fi, up to 7 hours on LTE‡. Wireless Charging built-in</dd>
                                                                        <dt>Audio</dt>
                                                                        <dd>Built-in speaker 3.5mm stereo audio connector</dd>
                                                                        <dt>Processing</dt>
                                                                        <dd>CPU: Qualcomm Snapdragon™ 800, 2.26GHz processor</dd>
                                                                        <dd>GPU: Adreno 330, 450MHz</dd>
                                                                        <dt>Wireless</dt>
                                                                        <dd>Dual-band Wi-Fi (2.4G/5G) 802.11 a/b/g/n/ac</dd>
                                                                    </dl>
                                                                    <hr/>
                                                            </div>
                                                            <div className="tab-pane fade" id="h2tab3">
                                                                {/* comments start */}
                                                                <div className="comments margin-clear space-top">
                                                                    {/* comment start */}
                                                                    <div className="comment clearfix">
                                                                        <div className="comment-avatar">
                                                                            <img src="images/avatar.jpg" alt="avatar"/>
                                                                        </div>
                                                                        <div className="comment-content">
                                                                            <h3>Amazing!</h3>
                                                                            <div className="comment-meta"> <i className="fa fa-star text-default"></i> <i className="fa fa-star text-default"></i> <i className="fa fa-star text-default"></i> <i className="fa fa-star text-default"></i> <i className="fa fa-star"></i> | Today, 12:31</div>
                                                                            <div className="comment-body clearfix">
                                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
                                                                                <a href="blog-post.html" className="btn btn-gray more pull-right"><i className="fa fa-reply"></i> Reply</a>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    {/* comment end */}

                                                                    {/* comment start */}
                                                                    <div className="comment clearfix">
                                                                        <div className="comment-avatar">
                                                                            <img src="images/avatar.jpg" alt="avatar"/>
                                                                        </div>
                                                                        <div className="comment-content clearfix">
                                                                            <h3>Works Perfect!</h3>
                                                                            <div className="comment-meta"> <i className="fa fa-star text-default"></i> <i className="fa fa-star text-default"></i> <i className="fa fa-star text-default"></i> <i className="fa fa-star text-default"></i> <i className="fa fa-star text-default"></i> | Oct 15</div>
                                                                            <div className="comment-body">
                                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
                                                                                <a href="blog-post.html" className="btn btn-gray more pull-right"><i className="fa fa-reply"></i> Reply</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* comment end */}

                                                                    {/* comment start */}
                                                                    <div className="comment clearfix">
                                                                        <div className="comment-avatar">
                                                                            <img src="images/avatar.jpg" alt="avatar"/>
                                                                        </div>
                                                                        <div className="comment-content clearfix">
                                                                            <h3>Worth to Buy</h3>
                                                                            <div className="comment-meta"> <i className="fa fa-star text-default"></i> <i className="fa fa-star text-default"></i> <i className="fa fa-star text-default"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> | Sep 25</div>
                                                                            <div className="comment-body">
                                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
                                                                                <a href="blog-post.html" className="btn btn-gray more pull-right"><i className="fa fa-reply"></i> Reply</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* comment end */}

                                                                </div>
                                                                {/* comments end */}

                                                                {/* comments form start */}
                                                                <div className="comments-form">
                                                                    <h2 className="title">Add your Review</h2>
                                                                    <form id="comment-form">
                                                                        <div className="form-group has-feedback">
                                                                            <label>Name</label>
                                                                            <input type="text" className="form-control" id="name4" placeholder="" name="name4" required/>
                                                                                <i className="fa fa-user form-control-feedback"></i>
                                                                        </div>
                                                                        <div className="form-group has-feedback">
                                                                            <label>Subject</label>
                                                                            <input type="text" className="form-control" id="subject4" placeholder="" name="subject4" required/>
                                                                                <i className="fa fa-pencil form-control-feedback"></i>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label>Rating</label>
                                                                            <select className="form-control" id="review">
                                                                                <option value="five">5</option>
                                                                                <option value="four">4</option>
                                                                                <option value="three">3</option>
                                                                                <option value="two">2</option>
                                                                                <option value="one">1</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="form-group has-feedback">
                                                                            <label>Message</label>
                                                                            <textarea className="form-control" rows="8" id="message4" placeholder="" name="message4" required></textarea>
                                                                            <i className="fa fa-envelope-o form-control-feedback"></i>
                                                                        </div>
                                                                        <input type="submit" value="Submit" className="btn btn-default"/>
                                                                    </form>
                                                                </div>
                                                                {/* comments form end */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </aside>
                                        {/* product side end */}
                                    </div>

                                </div>
                                {/* main end */}

                            </div>
                        </div>
                    </section>

                    <Footer/>


                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    }
}


const mapStateToProps = (state) => (
    {
        product: state.products.current_product,
    }
);

const ProductsCont = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsCont;

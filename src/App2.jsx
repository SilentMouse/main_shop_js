import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <div className="scrollToTop"><i className="fa fa-angle-up"></i></div>

                <div className="page-wrapper">

                    <div className="header-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-2  col-sm-6">

                                    {/* header-top-first start */}
                                    {/* ================ */}
                                    <div className="header-top-first clearfix">
                                        <ul className="social-links clearfix hidden-xs">
                                            <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a>
                                            </li>
                                            <li className="skype"><a href="#"><i className="fa fa-skype"></i></a></li>
                                            <li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a>
                                            </li>
                                            <li className="googleplus"><a href="#"><i className="fa fa-google-plus"></i></a>
                                            </li>
                                            <li className="youtube"><a href="#"><i
                                                className="fa fa-youtube-play"></i></a></li>
                                            <li className="flickr"><a href="#"><i className="fa fa-flickr"></i></a></li>
                                            <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a>
                                            </li>
                                            <li className="pinterest"><a href="#"><i
                                                className="fa fa-pinterest"></i></a></li>
                                        </ul>
                                        <div className="social-links hidden-lg hidden-md hidden-sm">
                                            <div className="btn-group dropdown">
                                                <button type="button" className="btn dropdown-toggle"
                                                        data-toggle="dropdown"><i className="fa fa-share-alt"></i>
                                                </button>
                                                <ul className="dropdown-menu dropdown-animation">
                                                    <li className="twitter"><a href="#"><i
                                                        className="fa fa-twitter"></i></a></li>
                                                    <li className="skype"><a href="#"><i
                                                        className="fa fa-skype"></i></a></li>
                                                    <li className="linkedin"><a href="#"><i
                                                        className="fa fa-linkedin"></i></a></li>
                                                    <li className="googleplus"><a href="#"><i
                                                        className="fa fa-google-plus"></i></a></li>
                                                    <li className="youtube"><a href="#"><i
                                                        className="fa fa-youtube-play"></i></a></li>
                                                    <li className="flickr"><a href="#"><i className="fa fa-flickr"></i></a>
                                                    </li>
                                                    <li className="facebook"><a href="#"><i
                                                        className="fa fa-facebook"></i></a></li>
                                                    <li className="pinterest"><a href="#"><i
                                                        className="fa fa-pinterest"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* header-top-first end */}

                                </div>
                                <div className="col-xs-10 col-sm-6">

                                    {/* header-top-second start */}
                                    {/* ================ */}
                                    <div id="header-top-second" className="clearfix">

                                        {/* header top dropdowns start */}
                                        {/* ================ */}
                                        <div className="header-top-dropdown">
                                            <div className="btn-group dropdown">
                                                <button type="button" className="btn dropdown-toggle"
                                                        data-toggle="dropdown"><i className="fa fa-search"></i> Search
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-right dropdown-animation">
                                                    <li>
                                                        <form role="search" className="search-box">
                                                            <div className="form-group has-feedback">
                                                                <input type="text" className="form-control"
                                                                       placeholder="Search"/>
                                                                <i className="fa fa-search form-control-feedback"></i>
                                                            </div>
                                                        </form>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="btn-group dropdown">
                                                <button type="button" className="btn dropdown-toggle"
                                                        data-toggle="dropdown"><i className="fa fa-user"></i> Login
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-right dropdown-animation">
                                                    <li>
                                                        <form className="login-form">
                                                            <div className="form-group has-feedback">
                                                                <label className="control-label">Username</label>
                                                                <input type="text" className="form-control"
                                                                       placeholder=""/>
                                                                <i className="fa fa-user form-control-feedback"></i>
                                                            </div>
                                                            <div className="form-group has-feedback">
                                                                <label className="control-label">Password</label>
                                                                <input type="password" className="form-control"
                                                                       placeholder=""/>
                                                                <i className="fa fa-lock form-control-feedback"></i>
                                                            </div>
                                                            <button type="submit"
                                                                    className="btn btn-group btn-dark btn-sm">Log In
                                                            </button>
                                                            <span>or</span>
                                                            <button type="submit"
                                                                    className="btn btn-group btn-default btn-sm">Sign Up
                                                            </button>

                                                            <ul>
                                                                <li><a href="#">Forgot your password?</a></li>
                                                            </ul>
                                                            <div className="divider"></div>
                                                            <span className="text-center">Login with</span>
                                                            <ul className="social-links clearfix">
                                                                <li className="facebook"><a href="#"><i
                                                                    className="fa fa-facebook"></i></a></li>
                                                                <li className="twitter"><a href="#"><i
                                                                    className="fa fa-twitter"></i></a></li>
                                                                <li className="googleplus"><a href="#"><i
                                                                    className="fa fa-google-plus"></i></a></li>
                                                            </ul>
                                                        </form>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="btn-group dropdown">
                                                <button type="button" className="btn dropdown-toggle"
                                                        data-toggle="dropdown"><i className="fa fa-shopping-cart"></i>
                                                    Cart (8)
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-right dropdown-animation cart">
                                                    <li>
                                                        <table className="table table-hover">
                                                            <thead>
                                                            <tr>
                                                                <th className="quantity">QTY</th>
                                                                <th className="product">Product</th>
                                                                <th className="amount">Subtotal</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td className="quantity">2 x</td>
                                                                <td className="product"><a href="shop-product.html">Android
                                                                    4.4 Smartphone</a><span className="small">4.7" Dual Core 1GB</span>
                                                                </td>
                                                                <td className="amount">$199.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="quantity">3 x</td>
                                                                <td className="product"><a href="shop-product.html">Android
                                                                    4.2 Tablet</a><span className="small">7.3" Quad Core 2GB</span>
                                                                </td>
                                                                <td className="amount">$299.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="quantity">3 x</td>
                                                                <td className="product"><a href="shop-product.html">Desktop
                                                                    PC</a><span className="small">Quad Core 3.2MHz, 8GB RAM, 1TB Hard Disk</span>
                                                                </td>
                                                                <td className="amount">$1499.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="total-quantity" colSpan="2">Total 8
                                                                    Items
                                                                </td>
                                                                <td className="total-amount">$1997.00</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                        <div className="panel-body text-right">
                                                            <a href="shop-cart.html"
                                                               className="btn btn-group btn-default btn-sm">View
                                                                Cart</a>
                                                            <a href="shop-checkout.html"
                                                               className="btn btn-group btn-default btn-sm">Checkout</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                        {/*  header top dropdowns end */}

                                    </div>
                                    {/* header-top-second end */}

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* header-top end */}

                    {/* header start classNamees:
                     fixed: fixed navigation mode (sticky menu) e.g. <header className="header fixed clearfix">
                     dark: dark header version e.g. <header className="header dark clearfix">
                     ================ */}
                    <header className="header fixed clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">

                                    {/* header-left start */}
                                    {/* ================ */}
                                    <div className="header-left clearfix">

                                        {/* logo */}
                                        <div className="logo">
                                            <a href="index.html"><img id="logo" src="images/logo_red.png"
                                                                      alt="IDea"/></a>
                                        </div>

                                        {/* name-and-slogan */}
                                        <div className="site-slogan">
                                            Powerful Bootstrap Template
                                        </div>

                                    </div>
                                    {/* header-left end */}

                                </div>
                                <div className="col-md-9">

                                    {/* header-right start */}
                                    {/* ================ */}
                                    <div className="header-right clearfix">

                                        {/* main-navigation start */}
                                        {/* ================ */}
                                        <div className="main-navigation animated">

                                            {/* navbar start */}
                                            {/* ================ */}
                                            <nav className="navbar navbar-default">
                                                <div className="container-fluid">

                                                    {/* Toggle get grouped for better mobile display */}
                                                    <div className="navbar-header">
                                                        <button type="button" className="navbar-toggle"
                                                                data-toggle="collapse" data-target="#navbar-collapse-1">
                                                            <span className="sr-only">Toggle navigation</span>
                                                            <span className="icon-bar"></span>
                                                            <span className="icon-bar"></span>
                                                            <span className="icon-bar"></span>
                                                        </button>
                                                    </div>

                                                    {/* Collect the nav links, forms, and other content for toggling */}
                                                    <div className="collapse navbar-collapse" id="navbar-collapse-1">
                                                        <ul className="nav navbar-nav navbar-right">
                                                            <li className="dropdown">
                                                                <a href="index.html" className="dropdown-toggle"
                                                                   data-toggle="dropdown">Главная</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="index.html">Главная1</a></li>
                                                                    <li><a href="index-2.html">Главная2</a></li>
                                                                    <li><a href="index-3.html">Главная3</a></li>
                                                                    <li><a href="index-4.html">Главная4</a></li>
                                                                </ul>
                                                            </li>

                                                            <li className="dropdown active">
                                                                <a href="shop-listing-3col.html"
                                                                   className="dropdown-toggle" data-toggle="dropdown">Каталог</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="blog-right-sidebar.html">Товары 1</a></li>
                                                                    <li><a href="blog-left-sidebar.html">Товары 2</a></li>
                                                                    <li><a href="blog-no-sidebar.html">Товары3</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown">
                                                                <a href="blog-right-sidebar.html"
                                                                   className="dropdown-toggle" data-toggle="dropdown">Блог</a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="blog-right-sidebar.html">Блог 1</a></li>
                                                                    <li><a href="blog-left-sidebar.html">Блог 2</a></li>
                                                                    <li><a href="blog-no-sidebar.html">Блог 3</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </nav>
                                            {/* navbar end */}

                                        </div>
                                        {/* main-navigation end */}

                                    </div>
                                    {/* header-right end */}

                                </div>
                            </div>
                        </div>
                    </header>
                    {/* header end */}

                    {/* banner start */}
                    {/* ================ */}
                    <div className="banner">
                        <div className="fixed-image section dark-translucent-bg parallax-bg-3">
                            <div className="container">
                                <div className="space-top"></div>
                                <h1>Welcome to Shop</h1>
                                <div className="separator-2"></div>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur elit. Vitae sit excepturi,
                                    <br className="hidden-xs hidden-sm"/> hic officiis illo dolore sunt assumenda saepe
                                    id sint praesentium <br className="hidden-xs hidden-sm"/> natus laborum quas
                                    facilis, suscipit aliquam dolorum.</p>
                            </div>
                        </div>
                    </div>
                    {/* banner end */}

                    {/* page-intro start*/}
                    {/* ================ */}
                    <div className="page-intro">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <ol className="breadcrumb">
                                        <li><i className="fa fa-home pr-10"></i><a href="index.html">Home</a></li>
                                        <li className="active">Shop</li>
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
                                <div className="main col-md-9">

                                    {/* page-title start */}
                                    {/* ================ */}
                                    <h1 className="page-title">Smartphones</h1>
                                    <div className="separator-2"></div>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Voluptas nulla suscipit <br className="hidden-sm hidden-xs"/> unde rerum
                                        mollitia dolorum.</p>
                                    {/* page-title end */}

                                    {/* shop items start */}
                                    <div className="masonry-grid-fitrows row grid-space-20">
                                        <div className="col-lg-4 col-sm-6 masonry-grid-item">
                                            <div className="listing-item">
                                                <div className="overlay-container">
                                                    <img src="images/product-1.png" alt=""/>
                                                    <a href="shop-product.html" className="overlay small">
                                                        <i className="fa fa-plus"></i>
                                                        <span>View Details</span>
                                                    </a>
                                                </div>
                                                <div className="listing-item-body clearfix">
                                                    <h3 className="title"><a href="shop-product.html">Adipisicing 7.7"
                                                        Temp 4.2</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Impacewt
                                                        Dolor Screen.</p>
                                                    <span className="price">$99.00</span>
                                                    <div className="elements-list pull-right">
                                                        <a href="#" className="wishlist" title="wishlist"><i
                                                            className="fa fa-heart-o"></i></a>
                                                        <a href="#"><i className="fa fa-shopping-cart pr-10"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                                    <h3 className="title"><a href="shop-product.html">Consectetur 5.5"
                                                        Vitae</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing. Impacewt
                                                        Dolor Screen</p>
                                                    <span className="price">$199.00</span>
                                                    <div className="elements-list pull-right">
                                                        <a href="#" className="wishlist" title="wishlist"><i
                                                            className="fa fa-heart-o"></i></a>
                                                        <a href="#"><i className="fa fa-shopping-cart pr-10"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 masonry-grid-item">
                                            <div className="listing-item">
                                                <div className="overlay-container">
                                                    <img src="images/product-3.png" alt=""/>
                                                    <a href="shop-product.html" className="overlay small">
                                                        <i className="fa fa-plus"></i>
                                                        <span>View Details</span>
                                                    </a>
                                                </div>
                                                <div className="listing-item-body clearfix">
                                                    <h3 className="title"><a href="shop-product.html">Rempora 15.4" 4GB
                                                        illo</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                                                        tempora debitis, sed illo officiis.</p>
                                                    <span className="price">$159.00</span>
                                                    <div className="elements-list pull-right">
                                                        <a href="#" className="wishlist" title="wishlist"><i
                                                            className="fa fa-heart-o"></i></a>
                                                        <a href="#"><i className="fa fa-shopping-cart pr-10"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 masonry-grid-item">
                                            <div className="listing-item">
                                                <div className="overlay-container">
                                                    <img src="images/product-4.png" alt=""/>
                                                    <a href="shop-product.html" className="overlay small">
                                                        <i className="fa fa-plus"></i>
                                                        <span>View Details</span>
                                                    </a>
                                                    <span className="badge default-bg">New</span>
                                                </div>
                                                <div className="listing-item-body clearfix">
                                                    <h3 className="title"><a href="shop-product.html">Dolor 4.4
                                                        Smartphone</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                                                        tempora debitis, sed illo.</p>
                                                    <span className="price">$105.00</span>
                                                    <div className="elements-list pull-right">
                                                        <a href="#" className="wishlist" title="wishlist"><i
                                                            className="fa fa-heart-o"></i></a>
                                                        <a href="#"><i className="fa fa-shopping-cart pr-10"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 masonry-grid-item">
                                            <div className="listing-item">
                                                <div className="overlay-container">
                                                    <img src="images/product-5.png" alt=""/>
                                                    <a href="shop-product.html" className="overlay small">
                                                        <i className="fa fa-plus"></i>
                                                        <span>View Details</span>
                                                    </a>
                                                </div>
                                                <div className="listing-item-body clearfix">
                                                    <h3 className="title"><a href="shop-product.html">Elit Sdipisicing
                                                        Debi</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                                                        tempora debitis, sed illo officiis.</p>
                                                    <span className="price">$399.00</span>
                                                    <div className="elements-list pull-right">
                                                        <a href="#" className="wishlist" title="wishlist"><i
                                                            className="fa fa-heart-o"></i></a>
                                                        <a href="#"><i className="fa fa-shopping-cart pr-10"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 masonry-grid-item">
                                            <div className="listing-item">
                                                <div className="overlay-container">
                                                    <img src="images/product-6.png" alt=""/>
                                                    <a href="shop-product.html" className="overlay small">
                                                        <i className="fa fa-plus"></i>
                                                        <span>View Details</span>
                                                    </a>
                                                    <span className="badge dark-bg">Out of Stock</span>
                                                </div>
                                                <div className="listing-item-body clearfix">
                                                    <h3 className="title"><a href="shop-product.html">Vitae Handset
                                                        Debitis</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                                                        tempora debitis, sed illo officiis.</p>
                                                    <span className="price">$299.00</span>
                                                    <div className="elements-list pull-right">
                                                        <a href="#" className="wishlist" title="wishlist"><i
                                                            className="fa fa-heart-o"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 masonry-grid-item">
                                            <div className="listing-item">
                                                <div className="overlay-container">
                                                    <img src="images/product-7.png" alt=""/>
                                                    <a href="shop-product.html" className="overlay small">
                                                        <i className="fa fa-plus"></i>
                                                        <span>View Details</span>
                                                    </a>
                                                </div>
                                                <div className="listing-item-body clearfix">
                                                    <h3 className="title"><a href="shop-product.html">Elit Wired
                                                        Sdipisicing</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                                                        tempora debitis, sed illo officiis.</p>
                                                    <span className="price">$49.00</span>
                                                    <div className="elements-list pull-right">
                                                        <a href="#" className="wishlist" title="wishlist"><i
                                                            className="fa fa-heart-o"></i></a>
                                                        <a href="#"><i className="fa fa-shopping-cart pr-10"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 masonry-grid-item">
                                            <div className="listing-item">
                                                <div className="overlay-container">
                                                    <img src="images/product-8.png" alt=""/>
                                                    <a href="shop-product.html" className="overlay small">
                                                        <i className="fa fa-plus"></i>
                                                        <span>View Details</span>
                                                    </a>
                                                </div>
                                                <div className="listing-item-body clearfix">
                                                    <h3 className="title"><a href="shop-product.html">Impacewt Dolor
                                                        Screen</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing. Vitae
                                                        tempora debitis, sed illo officiis.</p>
                                                    <span className="price">$89.00</span>
                                                    <div className="elements-list pull-right">
                                                        <a href="#" className="wishlist" title="wishlist"><i
                                                            className="fa fa-heart-o"></i></a>
                                                        <a href="#"><i className="fa fa-shopping-cart pr-10"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* shop items end */}

                                    <div className="clearfix"></div>

                                    {/* pagination start */}
                                    <ul className="pagination">
                                        <li><a href="#">«</a></li>
                                        <li className="active"><a href="#">1 <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#">»</a></li>
                                    </ul>
                                    {/* pagination end */}

                                </div>
                                {/* main end */}

                                <aside className="col-md-3">
                                    <div className="sidebar">
                                        <div className="block clearfix">
                                            <h2>Best Sellers</h2>
                                            <div className="separator"></div>
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
                                            <div className="list-with-image">
                                                <div className="overlay-container">
                                                    <img src="images/product-2.png" alt="product 1"/>
                                                    <a href="shop-product.html" className="overlay small">
                                                        <i className="fa fa-link"></i>
                                                    </a>
                                                </div>
                                                <h2><a href="shop-product.html">Lorem 5.5" Dual Span 1GB</a></h2>
                                                <p className="small">Lorem ipsum dolor sit amet, consectetur
                                                    span.price </p>
                                            </div>
                                            <div className="list-with-image">
                                                <div className="overlay-container">
                                                    <img src="images/product-3.png" alt="product 1"/>
                                                    <a href="shop-product.html" className="overlay small">
                                                        <i className="fa fa-link"></i>
                                                    </a>
                                                </div>
                                                <h2><a href="shop-product.html">Dolor 15.4" 4GB Ram</a></h2>
                                                <p className="small">Lorem ipsum dolor sit amet, consectetur.</p>
                                            </div>
                                            <div className="list-with-image">
                                                <div className="overlay-container">
                                                    <img src="images/product-4.png" alt="product 1"/>
                                                    <a href="shop-product.html" className="overlay small">
                                                        <i className="fa fa-link"></i>
                                                    </a>
                                                </div>
                                                <h2><a href="shop-product.html">Amet 4.4 Smartphone</a></h2>
                                                <p className="small">Lorem ipsum dolor sit amet, consectetur.</p>
                                            </div>
                                        </div>
                                        <div className="block clearfix">
                                            <h2>Search Filters</h2>
                                            <div className="separator"></div>
                                            <div className="sorting-filters">
                                                <form>
                                                    <div className="form-group">
                                                        <label>Sort by</label>
                                                        <select className="form-control">
                                                            <option selected="selected">Date</option>
                                                            <option>Price</option>
                                                            <option>Model</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Order</label>
                                                        <select className="form-control">
                                                            <option selected="selected">Acs</option>
                                                            <option>Desc</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Price $ (min/max)</label>
                                                        <div className="row grid-space-10">
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control"/>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control col-xs-6"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Category</label>
                                                        <select className="form-control">
                                                            <option selected="selected">Smartphones</option>
                                                            <option>Tablets</option>
                                                            <option>Smart Watches</option>
                                                            <option>Desktops</option>
                                                            <option>Software</option>
                                                            <option>Accessories</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <a href="#" className="btn btn-default">Submit</a>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="block clearfix">
                                            <h2>Brand</h2>
                                            <div className="separator"></div>
                                            <form className="form-list">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" value=""/>
                                                        Apple
                                                        <small>(16)</small>
                                                    </label>
                                                </div>
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" value=""/>
                                                        Samsung
                                                        <small>(78)</small>
                                                    </label>
                                                </div>
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" value=""/>
                                                        LG
                                                        <small>(47)</small>
                                                    </label>
                                                </div>
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" value=""/>
                                                        Nokia
                                                        <small>(12)</small>
                                                    </label>
                                                </div>
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" value=""/>
                                                        Motorola
                                                        <small>(8)</small>
                                                    </label>
                                                </div>
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" value=""/>
                                                        HTC
                                                        <small>(19)</small>
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="block clearfix">
                                            <h2>Screen Size</h2>
                                            <div className="separator"></div>
                                            <form className="form-list">
                                                <div className="radio">
                                                    <label>
                                                        <input type="radio" name="optionsRadios" id="optionsRadios1"
                                                               value="option1" checked/>
                                                        Small - 3.5" - 4.5"
                                                        <small>(264)</small>
                                                    </label>
                                                </div>
                                                <div className="radio">
                                                    <label>
                                                        <input type="radio" name="optionsRadios" id="optionsRadios2"
                                                               value="option2"/>
                                                        Medium - 4.6" - 5.3"
                                                        <small>(125)</small>
                                                    </label>
                                                </div>
                                                <div className="radio">
                                                    <label>
                                                        <input type="radio" name="optionsRadios" id="optionsRadios3"
                                                               value="option3"/>
                                                        Large - 5.4" and Up
                                                        <small>(60)</small>
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </aside>

                            </div>
                        </div>
                    </section>
                    {/* main-container end */}

                    {/* section start */}
                    {/* ================ */}
                    <div className="section gray-bg text-muted footer-top clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="owl-carousel clients">
                                        <div className="client">
                                            <a href="#"><img src="images/client-1.png" alt=""/></a>
                                        </div>
                                        <div className="client">
                                            <a href="#"><img src="images/client-2.png" alt=""/></a>
                                        </div>
                                        <div className="client">
                                            <a href="#"><img src="images/client-3.png" alt=""/></a>
                                        </div>
                                        <div className="client">
                                            <a href="#"><img src="images/client-4.png" alt=""/></a>
                                        </div>
                                        <div className="client">
                                            <a href="#"><img src="images/client-5.png" alt=""/></a>
                                        </div>
                                        <div className="client">
                                            <a href="#"><img src="images/client-6.png" alt=""/></a>
                                        </div>
                                        <div className="client">
                                            <a href="#"><img src="images/client-7.png" alt=""/></a>
                                        </div>
                                        <div className="client">
                                            <a href="#"><img src="images/client-8.png" alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <blockquote className="inline">
                                        <p className="margin-clear">Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse mollit anim.</p>
                                        <footer><cite title="Source Title">Lorem Ipsum </cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* section end */}

                    {/* footer start (Add "light" className to #footer in order to enable light footer) */}
                    {/* ================ */}
                    <footer id="footer">

                        {/* .footer start */}
                        {/* ================ */}
                        <div className="footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="footer-content">
                                            <div className="logo-footer"><img id="logo-footer"
                                                                              src="images/logo_red_footer.png" alt=""/>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p>Lorem ipsum dolor sit amet, consect tempor incididunt ut labore
                                                        et dolore magna aliqua. Ut enim ad minim ven.</p>
                                                    <ul className="social-links circle">
                                                        <li className="facebook"><a href="#"><i
                                                            className="fa fa-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i
                                                            className="fa fa-twitter"></i></a></li>
                                                        <li className="googleplus"><a href="#"><i
                                                            className="fa fa-google-plus"></i></a></li>
                                                        <li className="skype"><a href="#"><i
                                                            className="fa fa-skype"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i
                                                            className="fa fa-linkedin"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6">
                                                    <ul className="list-icons">
                                                        <li><i className="fa fa-map-marker pr-10"></i> One infinity
                                                            loop, 54100
                                                        </li>
                                                        <li><i className="fa fa-phone pr-10"></i> +00 1234567890</li>
                                                        <li><i className="fa fa-fax pr-10"></i> +00 1234567891</li>
                                                        <li><i className="fa fa-envelope-o pr-10"></i>
                                                            info@youremail.com
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="page-about.html" className="link"><span>Read More</span></a>
                                        </div>
                                    </div>
                                    <div className="space-bottom hidden-lg hidden-xs"></div>
                                    <div className="col-sm-6 col-md-2">
                                        <div className="footer-content">
                                            <h2>Links</h2>
                                            <nav>
                                                <ul className="nav nav-pills nav-stacked">
                                                    <li><a href="index.html">Home</a></li>
                                                    <li className="active"><a href="blog-right-sidebar.html">Blog</a>
                                                    </li>
                                                    <li><a href="portfolio-3col.html">Portfolio</a></li>
                                                    <li><a href="page-about.html">About</a></li>
                                                    <li><a href="page-contact.html">Contact</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3 col-md-offset-1">
                                        <div className="footer-content">
                                            <h2>Latest Projects</h2>
                                            <div className="gallery row">
                                                <div className="gallery-item col-xs-4">
                                                    <div className="overlay-container">
                                                        <img src="images/gallery-1.jpg" alt=""/>
                                                        <a href="portfolio-item.html" className="overlay small">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="gallery-item col-xs-4">
                                                    <div className="overlay-container">
                                                        <img src="images/gallery-2.jpg" alt=""/>
                                                        <a href="portfolio-item.html" className="overlay small">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="gallery-item col-xs-4">
                                                    <div className="overlay-container">
                                                        <img src="images/gallery-3.jpg" alt=""/>
                                                        <a href="portfolio-item.html" className="overlay small">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="gallery-item col-xs-4">
                                                    <div className="overlay-container">
                                                        <img src="images/gallery-4.jpg" alt=""/>
                                                        <a href="portfolio-item.html" className="overlay small">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="gallery-item col-xs-4">
                                                    <div className="overlay-container">
                                                        <img src="images/gallery-5.jpg" alt=""/>
                                                        <a href="portfolio-item.html" className="overlay small">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="gallery-item col-xs-4">
                                                    <div className="overlay-container">
                                                        <img src="images/gallery-6.jpg" alt=""/>
                                                        <a href="portfolio-item.html" className="overlay small">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="gallery-item col-xs-4">
                                                    <div className="overlay-container">
                                                        <img src="images/gallery-7.jpg" alt=""/>
                                                        <a href="portfolio-item.html" className="overlay small">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="gallery-item col-xs-4">
                                                    <div className="overlay-container">
                                                        <img src="images/gallery-8.jpg" alt=""/>
                                                        <a href="portfolio-item.html" className="overlay small">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="gallery-item col-xs-4">
                                                    <div className="overlay-container">
                                                        <img src="images/gallery-9.jpg" alt=""/>
                                                        <a href="portfolio-item.html" className="overlay small">
                                                            <i className="fa fa-link"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-bottom hidden-lg hidden-xs"></div>
                            </div>
                        </div>
                        {/* .footer end */}

                        {/* .subfooter start */}
                        {/* ================ */}
                        <div className="subfooter">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Copyright © 2018 IDea. All Rights Reserved</p>
                                    </div>
                                    <div className="col-md-6">
                                        <nav className="navbar navbar-default">
                                            {/* Toggle get grouped for better mobile display */}
                                            <div className="navbar-header">
                                                <button type="button" className="navbar-toggle" data-toggle="collapse"
                                                        data-target="#navbar-collapse-2">
                                                    <span className="sr-only">Toggle navigation</span>
                                                    <span className="icon-bar"></span>
                                                    <span className="icon-bar"></span>
                                                    <span className="icon-bar"></span>
                                                </button>
                                            </div>
                                            <div className="collapse navbar-collapse" id="navbar-collapse-2">
                                                <ul className="nav navbar-nav">
                                                    <li><a href="index.html">Home</a></li>
                                                    <li><a href="page-about.html">About</a></li>
                                                    <li><a href="blog-right-sidebar.html">Blog</a></li>
                                                    <li><a href="portfolio-3col.html">Portfolio</a></li>
                                                    <li><a href="page-contact.html">Contact</a></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* .subfooter end */}

                    </footer>
                    {/* footer end */}

                </div>
            </div>
        );
    }
}

export default App;

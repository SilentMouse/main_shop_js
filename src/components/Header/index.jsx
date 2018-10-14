import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                    <div className="header-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-2  col-sm-6">

                                    {/* header-top-first start */}
                                    {/* ================ */}
                                    <div className="header-top-first clearfix">
                                        <ul className="social-links clearfix hidden-xs">
                                            <li className="twitter"><a  ><i className="fa fa-twitter"></i></a>
                                            </li>
                                            <li className="skype"><a  ><i className="fa fa-skype"></i></a></li>
                                            <li className="linkedin"><a  ><i className="fa fa-linkedin"></i></a>
                                            </li>
                                            <li className="googleplus"><a  ><i className="fa fa-google-plus"></i></a>
                                            </li>
                                            <li className="youtube"><a  ><i
                                                className="fa fa-youtube-play"></i></a></li>
                                            <li className="flickr"><a  ><i className="fa fa-flickr"></i></a></li>
                                            <li className="facebook"><a  ><i className="fa fa-facebook"></i></a>
                                            </li>
                                            <li className="pinterest"><a  ><i
                                                className="fa fa-pinterest"></i></a></li>
                                        </ul>
                                        <div className="social-links hidden-lg hidden-md hidden-sm">
                                            <div className="btn-group dropdown">
                                                <button type="button" className="btn dropdown-toggle"
                                                        data-toggle="dropdown"><i className="fa fa-share-alt"></i>
                                                </button>
                                                <ul className="dropdown-menu dropdown-animation">
                                                    <li className="twitter"><a  ><i
                                                        className="fa fa-twitter"></i></a></li>
                                                    <li className="skype"><a  ><i
                                                        className="fa fa-skype"></i></a></li>
                                                    <li className="linkedin"><a  ><i
                                                        className="fa fa-linkedin"></i></a></li>
                                                    <li className="googleplus"><a  ><i
                                                        className="fa fa-google-plus"></i></a></li>
                                                    <li className="youtube"><a  ><i
                                                        className="fa fa-youtube-play"></i></a></li>
                                                    <li className="flickr"><a  ><i className="fa fa-flickr"></i></a>
                                                    </li>
                                                    <li className="facebook"><a  ><i
                                                        className="fa fa-facebook"></i></a></li>
                                                    <li className="pinterest"><a  ><i
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
                                                                <li><a  >Forgot your password?</a></li>
                                                            </ul>
                                                            <div className="divider"></div>
                                                            <span className="text-center">Login with</span>
                                                            <ul className="social-links clearfix">
                                                                <li className="facebook"><a  ><i
                                                                    className="fa fa-facebook"></i></a></li>
                                                                <li className="twitter"><a  ><i
                                                                    className="fa fa-twitter"></i></a></li>
                                                                <li className="googleplus"><a  ><i
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
                    <header className="header fixed clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">

                                    {/* header-left start */}
                                    {/* ================ */}
                                    <div className="header-left clearfix">

                                        {/* logo */}
                                        <div className="logo">
                                            <a href="/"><img id="logo" src="/images/custom_logo.png"
                                                                      alt="IDea"/></a>
                                        </div>

                                        {/* name-and-slogan */}
                                        <div className="site-slogan">
                                            Лечим не симптомы,<br/> а причины их возникновения
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
                                                            <li>
                                                                <a href="/" className="dropdown-toggle"
                                                                   >Главная</a>
                                                                {/*<ul className="dropdown-menu">*/}
                                                                    {/*<li><a href="index.html">Главная1</a></li>*/}
                                                                    {/*<li><a href="index-2.html">Главная2</a></li>*/}
                                                                    {/*<li><a href="index-3.html">Главная3</a></li>*/}
                                                                    {/*<li><a href="index-4.html">Главная4</a></li>*/}
                                                                {/*</ul>*/}
                                                            </li>

                                                            <li>
                                                                <a href="/"
                                                                   className="dropdown-toggle">Каталог</a>
                                                                {/*<ul className="dropdown-menu">*/}
                                                                    {/*<li><a href="blog-right-sidebar.html">Товары 1</a></li>*/}
                                                                    {/*<li><a href="blog-left-sidebar.html">Товары 2</a></li>*/}
                                                                    {/*<li><a href="blog-no-sidebar.html">Товары3</a></li>*/}
                                                                {/*</ul>*/}
                                                            </li>
                                                            <li>
                                                                <a href="/posts"
                                                                   className="dropdown-toggle">Блог</a>
                                                                {/*<ul className="dropdown-menu">*/}
                                                                    {/*<li><a href="blog-right-sidebar.html">Блог 1</a></li>*/}
                                                                    {/*<li><a href="blog-left-sidebar.html">Блог 2</a></li>*/}
                                                                    {/*<li><a href="blog-no-sidebar.html">Блог 3</a></li>*/}
                                                                {/*</ul>*/}
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
            </div>
        );
    }
}

export default Header;

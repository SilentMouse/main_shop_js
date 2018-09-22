import React, {Component} from 'react';

class Filter extends Component {
    render() {
        return (
            <div>
                <div className="section gray-bg text-muted footer-top clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="owl-carousel clients">
                                    <div className="client">
                                        <a  ><img src="images/client-1.png" alt=""/></a>
                                    </div>
                                    <div className="client">
                                        <a  ><img src="images/client-2.png" alt=""/></a>
                                    </div>
                                    <div className="client">
                                        <a  ><img src="images/client-3.png" alt=""/></a>
                                    </div>
                                    <div className="client">
                                        <a  ><img src="images/client-4.png" alt=""/></a>
                                    </div>
                                    <div className="client">
                                        <a  ><img src="images/client-5.png" alt=""/></a>
                                    </div>
                                    <div className="client">
                                        <a  ><img src="images/client-6.png" alt=""/></a>
                                    </div>
                                    <div className="client">
                                        <a  ><img src="images/client-7.png" alt=""/></a>
                                    </div>
                                    <div className="client">
                                        <a  ><img src="images/client-8.png" alt=""/></a>
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
                                                    <li className="facebook"><a  ><i
                                                        className="fa fa-facebook"></i></a></li>
                                                    <li className="twitter"><a  ><i
                                                        className="fa fa-twitter"></i></a></li>
                                                    <li className="googleplus"><a  ><i
                                                        className="fa fa-google-plus"></i></a></li>
                                                    <li className="skype"><a  ><i
                                                        className="fa fa-skype"></i></a></li>
                                                    <li className="linkedin"><a  ><i
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
            </div>
        );
    }
}

export default Filter;

import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import Header from "../Header"
import Footer from "../Footer"

import * as actionCreators from "../../actions/posts_actions"

class Posts extends Component {

    render() {

        var posts = this.props.posts

        return (
            <div>

                <div className="scrollToTop"><i className="fa fa-angle-up"></i></div>
                
                <div class="page-wrapper">

                    {/* header-top start (Add "dark" class to .header-top in order to enable dark header-top e.g <div class="header-top dark">) */}
                    {/* ================ */}
                    <Header/>
                    {/* header-top end */}

                    {/* header start classes:
                        fixed: fixed navigation mode (sticky menu) e.g. <header class="header fixed clearfix">
                         dark: dark header version e.g. <header class="header dark clearfix">
                    ================ */}
                    {/* header end */}

                    {/* page-intro start*/}
                    {/* ================ */}
                    <div class="page-intro">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <ol class="breadcrumb">
                                        <li><i class="fa fa-home pr-10"></i><a href="index.html">Home</a></li>
                                        <li class="active">Blog</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* page-intro end */}

                    {/* main-container start */}
                    {/* ================ */}
                    <section class="main-container">

                        <div class="container">
                            <div class="row">

                                {/* main start */}
                                {/* ================ */}
                                <div class="main col-md-8">

                                    {/* page-title start */}
                                    {/* ================ */}
                                    <h1 class="page-title">Blog</h1>
                                    <div class="separator-2"></div>
                                    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nulla suscipit <br class="hidden-sm hidden-xs"/> unde rerum mollitia dolorum.</p>
                                    {/* page-title end */}

                                    {/* blogpost start */}
                                    <article class="clearfix blogpost object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="200">
                                        <div class="overlay-container">
                                            <img src="/images/blog-1.jpg" alt=""/>
                                                <div class="overlay">
                                                    <div class="overlay-links">
                                                        <a href="blog-post.html"><i class="fa fa-link"></i></a>
                                                        <a href="/images/blog-1.jpg" class="popup-img-single" title="image title"><i class="fa fa-search-plus"></i></a>
                                                    </div>
                                                </div>
                                        </div>
                                        <div class="blogpost-body">
                                            <div class="post-info">
                                                <span class="day">12</span>
                                                <span class="month">Sept 2018</span>
                                            </div>
                                            <div class="blogpost-content">
                                                <header>
                                                    <h2 class="title"><a href="blog-post.html">Blogpost with image</a></h2>
                                                    <div class="submitted"><i class="fa fa-user pr-5"></i> by <a  >John Doe</a></div>
                                                </header>
                                                <p>Mauris dolor sapien, malesuada at interdum ut, hendrerit eget lorem. Nunc interdum mi neque, et  sollicitudin purus fermentum ut. Suspendisse faucibus nibh odio, a vehicula eros pharetra in. Maecenas  ullamcorper commodo rutrum. In iaculis lectus vel augue eleifend dignissim. Aenean viverra semper sollicitudin.</p>
                                            </div>
                                        </div>
                                        <footer class="clearfix">
                                            <ul class="links pull-left">
                                                <li><i class="fa fa-comment-o pr-5"></i> <a  >22 comments</a> |</li>
                                                <li><i class="fa fa-tags pr-5"></i> <a  >tag 1</a>, <a  >tag 2</a>, <a  >long tag 3</a> </li>
                                            </ul>
                                            <a class="pull-right link" href="blog-post.html"><span>Read more</span></a>
                                        </footer>
                                    </article>
                                    {/* blogpost end */}

                                    {/* pagination start */}
                                    <ul class="pagination">
                                        <li><a  >«</a></li>
                                        <li class="active"><a  >1 <span class="sr-only">(current)</span></a></li>
                                        <li><a  >2</a></li>
                                        <li><a  >3</a></li>
                                        <li><a  >4</a></li>
                                        <li><a  >5</a></li>
                                        <li><a  >»</a></li>
                                    </ul>
                                    {/* pagination end */}

                                </div>
                                {/* main end */}

                                {/* sidebar start */}
                                <aside class="col-md-3 col-md-offset-1">
                                    <div class="sidebar">
                                        <div class="block clearfix">
                                            <h3 class="title">Sidebar menu</h3>
                                            <div class="separator"></div>
                                            <nav>
                                                <ul class="nav nav-pills nav-stacked">
                                                    <li><a href="index.html">Home</a></li>
                                                    <li class="active"><a href="blog-right-sidebar.html">Blog</a></li>
                                                    <li><a href="portfolio-3col.html">Portfolio</a></li>
                                                    <li><a href="page-about.html">About</a></li>
                                                    <li><a href="page-contact.html">Contact</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div class="block clearfix">
                                            <h3 class="title">Latest tweets</h3>
                                            <div class="separator"></div>
                                            <ul class="tweets">
                                                <li>
                                                    <i class="fa fa-twitter"></i>
                                                    <p><a  >@lorem</a> ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, aliquid, et molestias nesciunt <a  >http://t.fd/adfasdfasd</a>.</p><span>16 hours ago</span>
                                                </li>
                                                <li>
                                                    <i class="fa fa-twitter"></i>
                                                    <p><a  >@lorem</a> ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, aliquid, et molestias nesciunt <a  >http://t.fd/adfasdfasd</a>.</p><span>16 hours ago</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="block clearfix">
                                            <h3 class="title">Featured Post</h3>
                                            <div class="separator"></div>
                                            <div class="image-box">
                                                <div class="overlay-container">
                                                    <img src="/images/blog-sidebar.jpg" alt=""/>
                                                        <div class="overlay">
                                                            <div class="overlay-links">
                                                                <a href="blog-post.html"><i class="fa fa-link"></i></a>
                                                                <a href="images/blog-sidebar.jpg" class="popup-img-single" title="image title"><i class="fa fa-search-plus"></i></a>
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="image-box-body">
                                                    <h3 class="title"><a href="blog-post.html">Post Title</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                                                    <a href="blog-post.html" class="link"><span>Read More</span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="block clearfix">
                                            <h3 class="title">Text Sample</h3>
                                            <div class="separator"></div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, nemo, necessitatibus, expedita voluptate esse ipsam aliquid blanditiis maxime sequi veniam suscipit atque sapiente cum voluptatum quos mollitia laborum? Esse, officia!</p>
                                        </div>
                                        <div class="block clearfix">
                                            <h3 class="title">Testimonial</h3>
                                            <div class="separator"></div>
                                            <blockquote class="margin-clear">
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse mollit anim.</p>
                                                <footer><cite title="Source Title">Lorem Ipsum </cite></footer>
                                            </blockquote>
                                            <blockquote class="margin-clear">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem.</p>
                                                <footer><cite title="Source Title">Steve Doe </cite></footer>
                                            </blockquote>
                                        </div>
                                        <div class="block clearfix">
                                            <h3 class="title">Tags</h3>
                                            <div class="separator"></div>
                                            <div class="tags-cloud">
                                                <div class="tag">
                                                    <a  >energy</a>
                                                </div>
                                                <div class="tag">
                                                    <a  >business</a>
                                                </div>
                                                <div class="tag">
                                                    <a  >food</a>
                                                </div>
                                                <div class="tag">
                                                    <a  >fashion</a>
                                                </div>
                                                <div class="tag">
                                                    <a  >finance</a>
                                                </div>
                                                <div class="tag">
                                                    <a  >culture</a>
                                                </div>
                                                <div class="tag">
                                                    <a  >health</a>
                                                </div>
                                                <div class="tag">
                                                    <a  >sports</a>
                                                </div>
                                                <div class="tag">
                                                    <a  >life style</a>
                                                </div>
                                                <div class="tag">
                                                    <a  >books</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="block clearfix">
                                            <form role="search">
                                                <div class="form-group has-feedback">
                                                    <input type="text" class="form-control" placeholder="Search"/>
                                                        <i class="fa fa-search form-control-feedback"></i>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </aside>
                                {/* sidebar end */}

                            </div>
                        </div>
                    </section>
                    {/* main-container end */}

                    {/* section start */}
                    {/* ================ */}
                    <div class="section gray-bg text-muted footer-top clearfix">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="owl-carousel clients">
                                        <div class="client">
                                            <a  ><img src="/images/client-1.png" alt=""/></a>
                                        </div>
                                        <div class="client">
                                            <a  ><img src="/images/client-2.png" alt=""/></a>
                                        </div>
                                        <div class="client">
                                            <a  ><img src="/images/client-3.png" alt=""/></a>
                                        </div>
                                        <div class="client">
                                            <a  ><img src="/images/client-4.png" alt=""/></a>
                                        </div>
                                        <div class="client">
                                            <a  ><img src="/images/client-5.png" alt=""/></a>
                                        </div>
                                        <div class="client">
                                            <a  ><img src="/images/client-6.png" alt=""/></a>
                                        </div>
                                        <div class="client">
                                            <a  ><img src="/images/client-7.png" alt=""/></a>
                                        </div>
                                        <div class="client">
                                            <a  ><img src="/images/client-8.png" alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <blockquote class="inline">
                                        <p class="margin-clear">Duis aute irure dolor in reprehenderit in voluptate velit esse mollit anim.</p>
                                        <footer><cite title="Source Title">Lorem Ipsum </cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* section end */}

                    {/* footer start (Add "light" class to #footer in order to enable light footer) */}
                    {/* ================ */}
                    <Footer/>
                    {/* footer end */}

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
        posts: state.posts.posts,
    }
);

const PostsCont = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsCont;


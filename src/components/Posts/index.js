import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import Header from "../Header"
import Footer from "../Footer"
import PostItem from "../PostItem"

import * as actionCreators from "../../actions/posts_actions"

class Posts extends Component {

    state = {
        products: []
    };

    componentDidMount() {
        this.props.actions.setPostsOnPage()
    }

    render() {

        var posts = this.props.posts

        return (
            <div>

                <div className="scrollToTop"><i className="fa fa-angle-up"></i></div>

                <div className="page-wrapper">

                    {/* header-top start (Add "dark" className to .header-top in order to enable dark header-top e.g <div className="header-top dark">) */}
                    {/* ================ */}
                    <Header/>
                    {/* header-top end */}

                    {/* header start classNamees:
                     fixed: fixed navigation mode (sticky menu) e.g. <header className="header fixed clearfix">
                     dark: dark header version e.g. <header className="header dark clearfix">
                     ================ */}
                    {/* header end */}

                    {/* page-intro start*/}
                    {/* ================ */}
                    <div className="page-intro">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <ol className="breadcrumb">
                                        <li><i className="fa fa-home pr-10"></i><a href="/">Главная</a></li>
                                        <li className="active">Блог</li>
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
                                <div className="main col-md-8">

                                    {/* page-title start */}
                                    {/* ================ */}
                                    <h1 className="page-title">Блог</h1>
                                    <div className="separator-2"></div>
                                    <p className="lead">Новости и актуальные события нашего сайта. <br className="hidden-sm hidden-xs"/> Комментируйте ребята пожалуйста.
                                    </p>
                                    {/* page-title end */}

                                    {/* blogpost start */}
                                    {posts.map((post) => {
                                            return <PostItem key={post.id} post={post}/>
                                        }
                                    )
                                    }
                                    {/* blogpost end */}

                                    {/* pagination start */}
                                    <ul className="pagination">
                                        <li><a  >«</a></li>
                                        <li className="active"><a  >1 <span className="sr-only">(current)</span></a></li>
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
                                <aside className="col-md-3 col-md-offset-1">
                                    <div className="sidebar">
                                        <div className="block clearfix">
                                            <h3 className="title">Меню</h3>
                                            <div className="separator"></div>
                                            <nav>
                                                <ul className="nav nav-pills nav-stacked">
                                                    <li><a href="/">Главная</a></li>
                                                    <li><a href="/">Каталог</a></li>
                                                    <li className="active"><a href="blog-right-sidebar.html">Блог</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div className="block clearfix">
                                            <h3 className="title">Latest tweets</h3>
                                            <div className="separator"></div>
                                            <ul className="tweets">
                                                <li>
                                                    <i className="fa fa-twitter"></i>
                                                    <p><a  >@lorem</a> ipsum dolor sit amet, consectetur adipisicing
                                                        elit. Mollitia, aliquid, et molestias nesciunt <a  >http://t.fd/adfasdfasd</a>.
                                                    </p><span>16 hours ago</span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-twitter"></i>
                                                    <p><a  >@lorem</a> ipsum dolor sit amet, consectetur adipisicing
                                                        elit. Mollitia, aliquid, et molestias nesciunt <a  >http://t.fd/adfasdfasd</a>.
                                                    </p><span>16 hours ago</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="block clearfix">
                                            <h3 className="title">Featured Post</h3>
                                            <div className="separator"></div>
                                            <div className="image-box">
                                                <div className="overlay-container">
                                                    <img src="/images/blog-sidebar.jpg" alt=""/>
                                                    <div className="overlay">
                                                        <div className="overlay-links">
                                                            <a href="blog-post.html"><i className="fa fa-link"></i></a>
                                                            <a href="images/blog-sidebar.jpg" className="popup-img-single"
                                                               title="image title"><i className="fa fa-search-plus"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="image-box-body">
                                                    <h3 className="title"><a href="blog-post.html">Post Title</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                                                    <a href="blog-post.html" className="link"><span>Read More</span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="block clearfix">
                                            <h3 className="title">Text Sample</h3>
                                            <div className="separator"></div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos,
                                                nemo, necessitatibus, expedita voluptate esse ipsam aliquid blanditiis
                                                maxime sequi veniam suscipit atque sapiente cum voluptatum quos mollitia
                                                laborum? Esse, officia!</p>
                                        </div>
                                        <div className="block clearfix">
                                            <h3 className="title">Testimonial</h3>
                                            <div className="separator"></div>
                                            <blockquote className="margin-clear">
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse mollit
                                                    anim.</p>
                                                <footer><cite title="Source Title">Lorem Ipsum </cite></footer>
                                            </blockquote>
                                            <blockquote className="margin-clear">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
                                                    dolorem.</p>
                                                <footer><cite title="Source Title">Steve Doe </cite></footer>
                                            </blockquote>
                                        </div>
                                        <div className="block clearfix">
                                            <h3 className="title">Tags</h3>
                                            <div className="separator"></div>
                                            <div className="tags-cloud">
                                                <div className="tag">
                                                    <a  >energy</a>
                                                </div>
                                                <div className="tag">
                                                    <a  >business</a>
                                                </div>
                                                <div className="tag">
                                                    <a  >food</a>
                                                </div>
                                                <div className="tag">
                                                    <a  >fashion</a>
                                                </div>
                                                <div className="tag">
                                                    <a  >finance</a>
                                                </div>
                                                <div className="tag">
                                                    <a  >culture</a>
                                                </div>
                                                <div className="tag">
                                                    <a  >health</a>
                                                </div>
                                                <div className="tag">
                                                    <a  >sports</a>
                                                </div>
                                                <div className="tag">
                                                    <a  >life style</a>
                                                </div>
                                                <div className="tag">
                                                    <a  >books</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="block clearfix">
                                            <form role="search">
                                                <div className="form-group has-feedback">
                                                    <input type="text" className="form-control" placeholder="Search"/>
                                                    <i className="fa fa-search form-control-feedback"></i>
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
                    <div className="section gray-bg text-muted footer-top clearfix">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="owl-carousel clients">
                                        <div className="client">
                                            <a  ><img src="/images/client-1.png" alt=""/></a>
                                        </div>
                                        <div className="client">
                                            <a  ><img src="/images/client-2.png" alt=""/></a>
                                        </div>
                                        <div className="client">
                                            <a  ><img src="/images/client-3.png" alt=""/></a>
                                        </div>
                                        <div className="client">
                                            <a  ><img src="/images/client-4.png" alt=""/></a>
                                        </div>
                                        <div className="client">
                                            <a  ><img src="/images/client-5.png" alt=""/></a>
                                        </div>
                                        <div className="client">
                                            <a  ><img src="/images/client-6.png" alt=""/></a>
                                        </div>
                                        <div className="client">
                                            <a  ><img src="/images/client-7.png" alt=""/></a>
                                        </div>
                                        <div className="client">
                                            <a  ><img src="/images/client-8.png" alt=""/></a>
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


import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import Header from "../Header"
import Footer from "../Footer"

import * as actionCreators from "../../actions/posts_actions"

class PostCard extends Component {


    state = {
        post: {}
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

        if (!this.props.post) {
            this.props.actions.setPostOnPage(parseInt(this.props.match.params.post_id))
        } else if (this.props.post.id != parseInt(this.props.match.params.post_id)) {
            this.props.actions.setPostOnPage(parseInt(this.props.match.params.post_id))
        }

    }

    render() {

        var post = this.props.post

        var date = new Date(post.createdAt)

        return (
            <div>

                <div className="scrollToTop"><i className="fa fa-angle-up"></i></div>

                <div className="page-wrapper">

                    <Header/>

                    <div className="page-intro">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <ol className="breadcrumb">
                                        <li><i className="fa fa-home pr-10"></i><a href="/">Главная</a></li>
                                        <li className="active">{post.title}</li>
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
                                    <h1 className="page-title">{post.title}</h1>
                                    {/* page-title end */}

                                    {/* blogpost start */}
                                    <article className="clearfix blogpost full">
                                        <div className="blogpost-body">
                                            <div className="side">
                                                <div className="post-info">
                                                    <span className="day">{date.getDate()}</span>
                                                    <span
                                                        className="month">{date.getMonth() + 1}.{date.getFullYear()}</span>
                                                </div>
                                                <div id="affix">
                                                    <span className="share">Поделитесь</span>
                                                    <ul className="social-links clearfix">
                                                        <li className="facebook">
                                                            <a  ><i className="fa fa-facebook"></i></a>
                                                        </li>
                                                        <li className="twitter">
                                                            <a  ><i className="fa fa-twitter"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="blogpost-content">
                                                <header>
                                                    <div className="submitted"><i className="fa fa-user pr-5"></i>
                                                        <a>Автор {post.author}</a></div>
                                                </header>

                                                <div className="owl-carousel content-slider-with-controls">
                                                    {post.media ?
                                                        post.media.map((e) => {
                                                                return <div className="overlay-container" key={e.picture}>
                                                                    <img src={e.picture} alt=""/>
                                                                    <a href={e.picture}
                                                                       className="popup-img overlay"
                                                                       title="image title"><i
                                                                        className="fa fa-search-plus"></i></a>
                                                                </div>
                                                            }
                                                        )
                                                        : null
                                                    }
                                                </div>
                                                <div className="content" dangerouslySetInnerHTML={{__html: post.content}}></div>
                                            </div>
                                        </div>
                                        <footer className="clearfix">
                                            <ul className="links pull-left">
                                                <li><i className="fa fa-comment-o pr-5"></i> <a>{post.commentsCount} комментариев</a> |
                                                </li>
                                                <li><i className="fa fa-tags pr-5"></i> <a  >tag 1</a>, <a  >tag 2</a>,
                                                    <a  >long tag 3</a></li>
                                            </ul>
                                        </footer>
                                    </article>
                                    {/* blogpost end */}

                                    {/* comments start */}
                                    <div className="comments">
                                        <h2 className="title">There are 3 comments</h2>

                                        {/* comment start */}
                                        <div className="comment clearfix">
                                            <div className="comment-avatar">
                                                <img src="images/avatar.jpg" alt="avatar"/>
                                            </div>
                                            <div className="comment-content">
                                                <h3>Comment title</h3>
                                                <div className="comment-meta">By <a  >admin</a> | Today, 12:31</div>
                                                <div className="comment-body clearfix">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                        nisi ut aliquip ex ea commodo </p>
                                                    <a href="blog-post.html" className="btn btn-gray more pull-right"><i
                                                        className="fa fa-reply"></i> Reply</a>
                                                </div>
                                            </div>

                                            {/* comment start */}
                                            <div className="comment clearfix">
                                                <div className="comment-avatar">
                                                    <img src="/images/avatar.jpg" alt="avatar"/>
                                                </div>
                                                <div className="comment-content clearfix">
                                                    <h3>Comment title</h3>
                                                    <div className="comment-meta">By <a  >admin</a> | Today, 12:31</div>
                                                    <div className="comment-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                                            do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                            ullamco laboris nisi ut aliquip ex ea commodo </p>
                                                        <a href="blog-post.html"
                                                           className="btn btn-gray more pull-right"><i
                                                            className="fa fa-reply"></i> Reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* comment end */}

                                        </div>
                                        {/* comment end */}

                                        {/* comment start */}
                                        <div className="comment clearfix">
                                            <div className="comment-avatar">
                                                <img src="/images/avatar.jpg" alt="avatar"/>
                                            </div>
                                            <div className="comment-content clearfix">
                                                <h3>Comment title</h3>
                                                <div className="comment-meta">By <a  >admin</a> | Today, 12:31</div>
                                                <div className="comment-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                        nisi ut aliquip ex ea commodo </p>
                                                    <a href="blog-post.html" className="btn btn-gray more pull-right"><i
                                                        className="fa fa-reply"></i> Reply</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* comment end */}

                                    </div>
                                    {/* comments end */}

                                    {/* comments form start */}
                                    <div className="comments-form">
                                        <h2 className="title">Add your comment</h2>
                                        <form>
                                            <div className="form-group has-feedback">
                                                <label for="name4">Name</label>
                                                <input type="text" className="form-control" id="name4" placeholder=""
                                                       required/>
                                                <i className="fa fa-user form-control-feedback"></i>
                                            </div>
                                            <div className="form-group has-feedback">
                                                <label for="subject4">Subject</label>
                                                <input type="text" className="form-control" id="subject4" placeholder=""
                                                       required/>
                                                <i className="fa fa-pencil form-control-feedback"></i>
                                            </div>
                                            <div className="form-group has-feedback">
                                                <label for="message4">Message</label>
                                                <textarea className="form-control" rows="8" id="message4" placeholder=""
                                                          required/>
                                                <i className="fa fa-envelope-o form-control-feedback"></i>
                                            </div>
                                            <input type="submit" value="Submit" className="btn btn-default"/>
                                        </form>
                                    </div>
                                    {/* comments form end */}

                                </div>
                                {/* main end */}

                                {/* sidebar start */}
                                <aside className="col-md-3 col-md-offset-1">
                                    <div className="sidebar">
                                        <div className="block clearfix">
                                            <h3 className="title">Sidebar menu</h3>
                                            <div className="separator"></div>
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
                                                            <a href="images/blog-sidebar.jpg"
                                                               className="popup-img-single" title="image title"><i
                                                                className="fa fa-search-plus"></i></a>
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
        post: state.posts.current_post,
    }
);

const PostCont = connect(mapStateToProps, mapDispatchToProps)(PostCard);

export default PostCont;


import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class PostItem extends Component {


    render() {

        var post = this.props.post

        var date = new Date(post.createdAt)

        return (
            <article className="clearfix blogpost object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="200">
                {post.media ?
                <div className="overlay-container">
                    <img src={post.media[0].picture} alt=""/>
                    <div className="overlay">
                        <div className="overlay-links">
                            <a href="blog-post.html"><i className="fa fa-link"></i></a>
                            <a href={post.media[0].picture} className="popup-img-single" title="image title"><i className="fa fa-search-plus"></i></a>
                        </div>
                    </div>
                </div> : null
                }
                <div className="blogpost-body">
                    <div className="post-info">
                        <span className="day">{date.getDate()}</span>
                        <span className="month">{date.getMonth() + 1} {date.getFullYear()}</span>
                    </div>
                    <div className="blogpost-content">
                        <header>
                            <h2 className="title"><a href={`/posts/${post.id}`}>{post.title}</a></h2>
                            <div className="submitted"><i className="fa fa-user pr-5"></i><a>{post.author}</a></div>
                        </header>
                        <p>{post.annotation}</p>
                    </div>
                </div>
                <footer className="clearfix">
                    <ul className="links pull-left">
                        <li><i className="fa fa-comment-o pr-5"></i> <a>{post.commentsCount} комментариев</a> |</li>
                        <li><i className="fa fa-tags pr-5"></i> <a  >tag 1</a>, <a  >tag 2</a>, <a  >long tag 3</a> </li>
                    </ul>
                    <a className="pull-right link" href={`/posts/${post.id}`}><span>Читать дальше</span></a>
                </footer>
            </article>
        );
    }
}

export default PostItem;

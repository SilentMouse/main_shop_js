import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import Header from "../Header"
import ProductItem from "../ProductItem"
import BestSellarItem from "../BestSellarItem"
import Filter from "../Filter"
import Footer from "../Footer"

import * as actionCreators from "../../actions/products_actions"

class Products extends Component {

    state = {
        products: []
    };

    componentDidMount() {
        this.props.actions.setProductsOnPage()
    }

    render() {
        return (
            <div>
                <div className="scrollToTop"><i className="fa fa-angle-up"></i></div>

                <div className="page-wrapper">

                    <Header/>

                    <div className="banner">
                        <div className="fixed-image section dark-translucent-bg parallax-bg-3">
                            <div className="container">
                                <div className="space-top"></div>
                                <h1>Добро пожаловать в магазин For-Now.ru</h1>
                                <div className="separator-2"></div>
                                <p className="lead">Цель нашей компании укрепить организм изнутри при помощи ТКМ.<br/>
                                    Что такое ТКМ - система уникальных учений и практик, зародившаяся в Древнем Китае<br/>
                                    и возникшая из точного наблюдения за функционированием человеческого организма и последующей систематизации этих знаний с использованием характерной для модели<br/>
                                    этого региона, которую можно охарактеризовать как учение о символах и числах.</p>
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
                                        <li><i className="fa fa-home pr-10"></i><a href="index.html">Главная</a></li>
                                        <li className="active">Каталог</li>
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
                                    <h1 className="page-title">Товары</h1>
                                    <div className="separator-2"></div>
                                    <p className="lead">Мы являемся официальным дистрибьютером Fohow в России с бесплатной доставкой по всей стране.</p>
                                    {/* page-title end */}

                                    {/* shop items start */}
                                    <div className="masonry-grid-fitrows row grid-space-20">
                                        {this.props.products.map((e) => {
                                            return <ProductItem item={e} key={e.id}/>
                                        })}
                                    </div>
                                    {/* shop items end */}

                                    <div className="clearfix"></div>

                                    {/* pagination start */}
                                    {/*<ul className="pagination">*/}
                                        {/*<li><a>«</a></li>*/}
                                        {/*<li className="active"><a>1 <span className="sr-only">(current)</span></a>*/}
                                        {/*</li>*/}
                                        {/*<li><a>2</a></li>*/}
                                        {/*<li><a>3</a></li>*/}
                                        {/*<li><a>4</a></li>*/}
                                        {/*<li><a>5</a></li>*/}
                                        {/*<li><a>»</a></li>*/}
                                    {/*</ul>*/}
                                    {/* pagination end */}

                                </div>
                                {/* main end */}

                                <aside className="col-md-3">
                                    <div className="sidebar">
                                        {/*<div className="block clearfix">*/}
                                            {/*<h2>Best Sellers</h2>*/}
                                            {/*<div className="separator"></div>*/}
                                            {/*{[1, 2, 3, 4].map((e) => {*/}
                                                {/*return <BestSellarItem key={e}/>*/}
                                            {/*})}*/}

                                        {/*</div>*/}
                                        <Filter/>
                                    </div>
                                </aside>

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
        products: state.products.products
    }
);

const ProductsCont = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsCont;

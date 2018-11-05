import React, {Component} from 'react';

import * as actionCreators from "../../actions/products_actions"

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import Select from 'react-select';

class Filter extends Component {

    state = {
        selectedOption: {value: 999, label: "Все"},
    }

    constructor(props){
        super(props)
        this.setCategory = this.setCategory.bind(this)
    }

    setCategory(selectedOption) {
        this.setState({ selectedOption });
        this.props.actions.setProductsOnPage(selectedOption["value"])
        console.log("selectedOption", selectedOption)
    }

    render() {

        const {categories,setCategory} = this.props

        const { selectedOption } = this.state;

        // const setCategory = this.setCategory

        var options = categories.map((e) => {return {value: e["id"],label: e["name"]}})

        options.unshift({value: 999, label: "Все"})

        return (
            <div className="list-with-image">
                <div className="block clearfix">
                    <h2>Подобрать</h2>
                    <div className="separator"></div>
                    <div className="sorting-filters">
                        <form>
                            <div className="form-group">
                                <label>Категория</label>

                                <Select value={selectedOption}
                                        onChange={this.setCategory}
                                        options={options}
                                />
                                {false && <select className="form-control">
                                    {categories.map((e) => {
                                        return <option key={e["key"]}
                                                       value={e["id"]}
                                                       onClick={() => {setCategory(e["id"])}}
                                        >{e["name"]}</option>
                                    })}
                                </select>}
                            </div>
                            <div className="form-group">
                                <label>Сортировать по</label>
                                <select className="form-control">
                                    <option>Дате</option>
                                    <option>Цене</option>
                                </select>
                            </div>
                            {false && <div className="form-group">
                                <label>Order</label>
                                <select className="form-control">
                                    <option>Acs</option>
                                    <option>Desc</option>
                                </select>
                            </div>}
                            <div className="form-group">
                                <label>Цена $ (min/max)</label>
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
                                <a   className="btn btn-default">Найти</a>
                            </div>
                        </form>
                    </div>
                </div>
                {false && <div className="block clearfix">
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
                </div>}
                {false && <div className="block clearfix">
                    <h2>Screen Size</h2>
                    <div className="separator"></div>
                    <form className="form-list">
                        <div className="radio">
                            <label>
                                <input type="radio" name="optionsRadios" id="optionsRadios1"
                                       value="option1"/>
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
                </div>}
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators, dispatch),
    }
}

const mapStateToProps = (state) => (
    {
        categories: state.categories.categories
    }
);

const FilterCont = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterCont;

// export default Filter;

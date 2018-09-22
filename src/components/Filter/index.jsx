import React, {Component} from 'react';

class Filter extends Component {
    render() {
        return (
            <div className="list-with-image">
                <div className="block clearfix">
                    <h2>Search Filters</h2>
                    <div className="separator"></div>
                    <div className="sorting-filters">
                        <form>
                            <div className="form-group">
                                <label>Sort by</label>
                                <select className="form-control">
                                    <option>Date</option>
                                    <option>Price</option>
                                    <option>Model</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Order</label>
                                <select className="form-control">
                                    <option>Acs</option>
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
                                    <option>Smartphones</option>
                                    <option>Tablets</option>
                                    <option>Smart Watches</option>
                                    <option>Desktops</option>
                                    <option>Software</option>
                                    <option>Accessories</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <a   className="btn btn-default">Submit</a>
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
                </div>
            </div>
        );
    }
}

export default Filter;

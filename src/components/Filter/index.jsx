import React, {Component} from 'react';

class Filter extends Component {
    render() {
        return (
            <div className="list-with-image">
                <div className="block clearfix">
                    <h2>Подобрать</h2>
                    <div className="separator"></div>
                    <div className="sorting-filters">
                        <form>
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
                                <label>Категория</label>
                                <select className="form-control">
                                    <option>Очистка</option>
                                    <option>Регуляция</option>
                                    <option>Здоровье</option>
                                </select>
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

export default Filter;

import React, {Component} from 'react';

class MediaInCard extends Component {

    render() {

        const {
            media,
        } = this.props;

        return (
            <div className="overlay-container">
                <img src={media.picture} alt=""/>
                <a href={media.picture} className="popup-img overlay" title="image title"><i className="fa fa-search-plus"></i></a>
            </div>
        );
    }
}


export default MediaInCard;
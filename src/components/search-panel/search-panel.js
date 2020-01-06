import React from 'react';
import {connect} from 'react-redux';
import {onUpdateSearch} from '../../actions';

import './search-panel.css';

const SearchPanel = ({onUpdateSearch}) => {
    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="Поиск по записям"
            onChange={(e) => onUpdateSearch(e.target.value)}
        />
    )
}

const mapStateToProps = ({posts}) => {
    return {
        posts
    }
}

const mapDispatchToProps = {
    onUpdateSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
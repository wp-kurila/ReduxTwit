import React from 'react';
import {connect} from 'react-redux';
import {filterPosts} from '../../actions';

import './post-status-filter.css';

const PostStatusFilter = ({filter, filterPosts}) => {
    const buttons = [
        {name: 'all', label: 'Все'},
        {name: 'like', label: 'Понравилось'}
    ];

    const button = buttons.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? 'btn-info' : 'btn-outline-secondary';
        return (
            <button 
                key={name} 
                type='button' 
                className={`btn ${clazz}`}
                onClick={() => {filterPosts(name)}}>
                    {label}
            </button>
        )
    });
    return (
        <div className="btn-group">
            {button}
        </div>
    )
}

const mapStateToProps = ({filter}) => {
    return {
        filter
    }
}

const mapDispatchToProps = {
    filterPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(PostStatusFilter);
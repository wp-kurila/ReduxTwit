import React from 'react';
import {connect} from 'react-redux';

import './app-header.css';


const AppHeader = ({posts}) => {
    const liked = posts.filter(item => item.like).length;
    const allPosts = posts.length;
    let text = '';

    switch (allPosts) {
        case 0: 
            text += 'Записей нет';
            break;
        case 1:
            text += `Одна запись`
            if (liked === 1) text += '  и она понравилась';
            break;
        case 2:
        case 3:
        case 4:
            text += `${allPosts} записи, из них понравилось ${liked}`;
            break;
        default: 
            text += `${allPosts} записей, из них понравилось ${liked}`;
    }
    return (
        <div className="app-header d-flex">
            <h1>Nikita Kurilin</h1>
            <h2>{text}</h2>
        </div>
    )
}

const mapStateToProps = ({posts}) => {
    return {
        posts
    }
}

export default connect(mapStateToProps)(AppHeader);
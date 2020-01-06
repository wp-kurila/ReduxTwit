import React, {Component} from 'react';
import PostListItem from '../post-list-item';
import {connect} from 'react-redux';
import WithTwitService from '../hoc/';
import {postsLoaded} from '../../actions';

import './post-list.css';

class PostList extends Component {
    componentDidMount() {

        const {TwitService} = this.props;
        TwitService.getPostsItems()
        .then(res => this.props.postsLoaded(res))
    }    

    render() {
        const {postsItems} = this.props;
        return (
            <ul className="app-list list-group">
                {
                    postsItems.map(postsItem => {
                        if (typeof postsItem === 'object') {
                            return (
                                <li className="list-group-item" key={postsItem.id}>
                                    <PostListItem                                    
                                        postsItem={postsItem}/>
                                </li>
                            )
                        }
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = ({posts, term, filter}) => {

    const filterPosts = (posts, filter) => {
        if (filter === 'like') {
            return posts.filter(post => post.like);
        } else {
            return posts
        }
    };

    const searchPosts = (posts, term) => {
        if (term.length === 0) {
            return posts
        };

        return posts.filter(post => {
            return post.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        });        
    };

    return {
        postsItems: filterPosts(searchPosts(posts, term), filter)
    }
}

const mapDispatchToProps = {
    postsLoaded
}

export default WithTwitService()(connect(mapStateToProps, mapDispatchToProps)(PostList));
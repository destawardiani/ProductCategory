import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux'

import CategoryItem from './CategoryItem'

class CategoryList extends Component {
    componentDidMount() {
        axios.get('https://simple-ecommerce-9999.herokuapp.com/api/v1/category')
        .then(Response => {
            console.log(Response.data.data);
            this.props.dispatch({
                type: 'SET_CATEGORY_LIST',
                payload: Response.data.data
            })
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    renderCategoryList() {
        return this.props.category.map(item =>
          <CategoryItem category={ item } key={ item.id } />
        )
    }
    render() {
        return (
            <ScrollView>
                { this.renderCategoryList() }
            </ScrollView>
        );
    }
}

function mapStateToProps(state) {
    return {
        category: state.category,
        activeCategory: state.activeCategory
    }
}

export default connect(mapStateToProps)(CategoryList);
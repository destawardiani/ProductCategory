import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'

import { Card, CardSection } from './common'
import ProductItem from './ProductItem'

const style = StyleSheet.create({
    text:{
        fontSize: 22,
        fontWeight: "bold"
    }
})

class CategoryItem extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        const categoryId = this.props.category.id
        axios.get(`https://simple-ecommerce-9999.herokuapp.com/api/v1/category/${categoryId}/product`)
            .then(Response => {
                console.log(Response.data.data);
                this.setState({ products: Response.data.data.products })
            })
            .catch(error => {
                console.log(error.message);
            }) 
     }
    renderProductList(){
        if (this.props.activeCategory == this.props.category.id) {
            return this.state.products.map(item =>
                <ProductItem product={ item } key={ item.id } />
            )
        }
    }
    render() {
        const { id, name } = this.props.category
        return (
            <>
                <Card>
                    <CardSection>
                        <TouchableWithoutFeedback 
                            onPress={ () => this.props.dispatch({
                                type: 'SET_ACTIVE_CATEGORY',
                                payload: id
                            })}>
                            <Text style={ style.text }>
                                { name }
                            </Text>
                        </TouchableWithoutFeedback>
                    </CardSection>
                </Card>
                { this.renderProductList() }
            </>
        );
    }
}

function mstp(state) {
    return {
        activeCategory: state.activeCategory
    }
}

export default connect(mstp)(CategoryItem);
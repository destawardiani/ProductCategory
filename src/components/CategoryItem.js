import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native'

import { Card, CardSection } from './common'

const style = StyleSheet.create({
    text:{
        fontSize: 22,
        fontWeight: "bold"
    }
})

class CategoryItem extends Component {
    render() {
        const { id, name } = this.props.category
        return (
            <Card>
                <CardSection>
                    <Text style={ style.text }>
                        { name }
                    </Text>
                </CardSection>
            </Card>
        );
    }
}

export default CategoryItem;
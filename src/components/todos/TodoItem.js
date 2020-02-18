/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// import {addUser} from '../actions/dataActions';


import {View, Text, Button, TextInput,StyleSheet,} from 'react-native';
import {Navigation} from 'react-native-navigation';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }



    goToScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName,
                passProps: {
                    data: this.props.item,
                    index: this.props.index
                }
            },
        });
    };

    render() {
        // console.log('TODO_ITEM_PROPS',this.props.item.completed);

        return (

            <View style={styles.container}>
                <Text>Title</Text>
                <View style={styles.item}>
                <Text style={{textDecorationLine:this.props.item.completed? "line-through":"none"}}>{this.props.item.title}</Text>
                <Button title='View' onPress={() => this.goToScreen('TodoItemScreen')}/>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        margin:1,
        padding:3

    },

    item:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
});


export default TodoItem;

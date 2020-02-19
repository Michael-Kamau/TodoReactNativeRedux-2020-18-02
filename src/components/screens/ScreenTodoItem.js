/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {toggleCompleted,deleteTodo} from '../../actions/dataActions';


import {
    View,
    Text,
    Button,
    TextInput, StyleSheet,TouchableHighlight
} from 'react-native';

class ScreenTodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    deleteTodo(){
        // alert('Deleted the Item')
        this.props.deleteTodo(this.props.index)
        Navigation.pop(this.props.componentId);
    }

    _onLongPressButton(){
        alert("Long Pressed")
    }

    render() {
        // console.log('TODO_ITEM_SCREEN_PROPS', this.props);

        return (

            <View style={styles.container}>
                <Text style={styles.title}>Todo Item </Text>
                <Text>Title</Text>
                <Text  style={{textDecorationLine:this.props.todos[this.props.index].completed ? "line-through":"none"}}>{this.props.todos[this.props.index].title}</Text>
                <View style={styles.buttons}>

                    <TouchableHighlight onPress={() => this.props.toggleCompleted(this.props.index)} underlayColor="white">
                        <View style={styles.buttonToggle}>
                            <Text style={styles.buttonText}>Toggle Complete</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => this.deleteTodo()} onLongPress={this._onLongPressButton} underlayColor="white">
                        <View style={styles.buttonDelete}>
                            <Text style={styles.buttonText}>Delete</Text>
                        </View>
                    </TouchableHighlight>
                </View>


            </View>
        );
    }
}


ScreenTodoItem.propTypes = {
    toggleCompleted: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        todos:state.data.todos
    };
}


const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        margin:1,
        padding:3

    },

    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    buttonToggle: {
        marginBottom: 10,
        width: 200,
        alignItems: 'center',
        backgroundColor: '#219eff',
        borderRadius: 20
    },
    buttonDelete: {
        marginBottom: 10,
        width: 200,
        alignItems: 'center',
        backgroundColor: '#ad1843',
        borderRadius: 20

    },
    buttonText: {
        padding: 20,
        color: 'white',
        fontSize: 18
    }
});


export default connect(mapStateToProps, {toggleCompleted,deleteTodo})(ScreenTodoItem);

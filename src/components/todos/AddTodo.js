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
import {addTodo} from '../../actions/dataActions';


import {View, Text, Button, TextInput,StyleSheet,TouchableHighlight} from 'react-native';
import {Navigation} from 'react-native-navigation';

class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoTitle:''
        };
    }
    onChange = (textValue) => {
        this.state.todoTitle = textValue;
    };


    addTodo = () => {
        console.log('ADD_TODO_PROPS',this.props);
        this.props.addTodo(this.state.todoTitle)
        // alert(this.props)
    };

    render() {


        return (

            <View style={styles.container}>
                <Text >Add Todo</Text>
                <TextInput placeholder='Title...'   onChangeText={this.onChange}/>
                <TouchableHighlight onPress={() => this.addTodo()} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add Todo</Text>
                    </View>
                </TouchableHighlight>

            </View>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
    container: {
        borderColor:'#7f7f7f',
        borderWidth:2,
        margin:10,
        padding:5
    },
    button: {
        marginBottom: 3,
        alignItems: 'center',
        backgroundColor: '#5ead97',
        shadowColor:'#e6e6e6'

    },
    buttonText: {
        padding: 20,
        color: 'white',
        fontSize: 18
    }
});

export default connect(null,{addTodo})(AddTodo);

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
import TodoItem from '../todos/TodoItem';
import AddTodo from '../todos/AddTodo';
import PropTypes from 'prop-types';
import {fetchTodos} from '../../actions/dataActions';


import {View, Text, Button, TextInput, FlatList,ScrollView} from 'react-native';


class ScreenTodos extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    componentDidMount(): void {
        this.props.fetchTodos()
    }


    goToScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName,
            },
        });
    };

    render() {
        // console.log('ptopd', this.props);
        return (

            <View>
                <AddTodo/>
                <Text>All Todos Screen</Text>
                <FlatList data={this.props.todos}
                          renderItem={({item, index})  => <TodoItem componentId={this.props.componentId} index={index} item={item}/>}
                />
            </View>
        );
    }
}

ScreenTodos.propTypes = {
    fetchTodos: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
       todos:state.data.todos
    };
}

export default connect(mapStateToProps,{fetchTodos})(ScreenTodos);

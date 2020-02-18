/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux'
import store from './src/store'
import { Navigation } from "react-native-navigation";

///Screens
import App from './App';
import TodoItemScreen from './src/components/screens/ScreenTodoItem';
import TodosScreen from './src/components/screens/ScreenTodos';

// AppRegistry.registerComponent(appName, () => App);


Navigation.registerComponentWithRedux(`WelcomeScreen`, () => App,Provider,store);
Navigation.registerComponentWithRedux(`TodosScreen`, () => TodosScreen,Provider,store);
Navigation.registerComponentWithRedux(`TodoItemScreen`, ()  => TodoItemScreen,Provider,store);
// Navigation.registerComponentWithRedux(`Main`, ()  => Main,Provider,store);
//
// Navigation.registerComponentWithRedux(`Homepage`, () => Homepage,Provider,store);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                id:'AppStack',
                children: [{
                    component: {
                        name: "TodosScreen"
                    }
                }]
            }
        }
    });
});

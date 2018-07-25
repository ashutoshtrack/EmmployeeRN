import React, { Component } from "react";
import ReduxThunk from "redux-thunk";
import { Text, View } from "react-native";
import firebase from "firebase";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import Router from "./Router";
//import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDUp_1BMCIZO9IACovuCihq76OUkR-iDJw",
      authDomain: "diggerdog-8a22d.firebaseapp.com",
      databaseURL: "https://diggerdog-8a22d.firebaseio.com",
      projectId: "diggerdog-8a22d",
      storageBucket: "diggerdog-8a22d.appspot.com",
      messagingSenderId: "592994513819"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
export default App;

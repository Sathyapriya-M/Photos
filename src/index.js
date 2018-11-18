import React,{ Component } from 'react';
import { render } from 'react-dom';
import MainApp from './Components/MainApp';
import './Styles/StyleSheet.css';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './Redux/Reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


const store=createStore(rootReducer, applyMiddleware(thunk));

render(<Provider 
store={store}><BrowserRouter><MainApp/></BrowserRouter></Provider>,document.getElementById('root'))

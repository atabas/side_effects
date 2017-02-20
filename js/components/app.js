import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Reactions from './reactions';
import Appbar from './appbar';
import Info from './info';
var SearchResults = require('./searchresults');

import store from '../store';
var connect = require('react-redux').connect;


export default class App extends React.Component{
  render(){
    return(
      <MuiThemeProvider>

        <div className="container">
          <div className="app-desc">
            <Appbar />
            <Info />
          </div>
          
          <SearchResults />
          {/*this.props.children*/}
          <Reactions />
        </div>
      </MuiThemeProvider>
      
    );
  }
}

require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

var Provider = require('react-redux').Provider;
var store = require('./store');

var router = require('react-router');

var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var browserHistory = router.browserHistory;
var IndexRoute = router.IndexRoute;
var Link = router.Link;

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var SearchResults = require('./components/searchresults');
import Reactions from './components/reactions';
import Appbar from './components/appbar';
import Info from './components/info';


const AppBarExampleIcon = () => (
  <AppBar
    title="Side Effects"
  />
);

class App extends React.Component{
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

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/">
            <IndexRoute component={App} />
          </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
  );
});

export default AppBarExampleIcon;
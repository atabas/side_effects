import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import axios from 'axios';
import store from '../store';

import {List, ListItem} from 'material-ui/List';
import Badge from 'material-ui/Badge';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
var connect = require('react-redux').connect;


export class Reactions extends React.Component{
  constructor(props){
    super(props);
    this.showReactions = this.showReactions.bind(this);
  }

  showReactions(){
    if(this.props.exact_medicine){
      return this.props.exact_medicine[0].reaction
      .sort(function(a,b){
        return b.count - a.count;
      })
      .map(function(reaction){
        return(<ListItem primaryText={reaction.name} rightIcon={<Badge badgeContent={reaction.count} primary={true}/>} />)
      });
    }
  }
  
  render(){
    return(
      <div>
        <List>
          {this.showReactions()}
        </List>
      </div>
    );
  }  
}

var mapStateToProps = function(state, props) {
  return {
    exact_medicine: state.exact_medicine
  };
};

var Container = connect(mapStateToProps)(Reactions);
export default Container;


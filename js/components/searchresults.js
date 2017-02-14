import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';

import axios from 'axios';
import {loadMedicineReactions, loadExactMedicineReactions} from '../actions/index';
import store from '../store';
import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();

var connect = require('react-redux').connect;

class SearchResults extends React.Component{
  constructor(props){
    super(props);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleNewRequest = this.handleNewRequest.bind(this);
    this.state={ dataSource: [], searchText: "" };
    this.dataSourceConfig = {
      text: 'name',
      value: '_id',
    };
  }

  handleNewRequest(text, index) {
    this.props.dispatch(loadExactMedicineReactions(this.state.searchText));
    if(store.getState().medicine){
      console.log("medicine got:", store.getState().medicine);
    }
  }
  
  
  handleUpdateInput(value) {
    this.props.dispatch(loadMedicineReactions(value));
    this.setState({searchText: value.toUpperCase()});
   
    if(store.getState().medicine){
      var new_dataSource = store.getState().medicine.map(function(result){
        return result.name;
      });
      this.setState({
        dataSource: new_dataSource
      });
    }  
  }

  componentDidMount(){
  }
  
  render(){
    return(
      <div>
        <AutoComplete
          hintText="Search for medicine"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          searchText={this.state.searchText}
          onNewRequest={this.handleNewRequest}
        />
      </div>
    );
  }  
}

var mapStateToProps = function(state, props) {
  return {
    medicine: state.medicine
  };
};

var Container = connect(mapStateToProps)(SearchResults);
module.exports = Container;
var React = require('react');
var expect = require('chai').expect;
import enzyme from 'enzyme';
import { shallow, render, mount } from 'enzyme';
import sinon from 'sinon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Autocomplete from 'material-ui/Badge';

import {SearchResults} from '../js/components/searchresults';


describe('SearchResults component', function() {
  it('should render the SearchResults',function(){
    const medicine_list = [{reaction: [{name: "Death", count: 40}]}];
    const wrapper = shallow(<SearchResults/>);
    expect(wrapper.find(Autocomplete)).to.not.eq(null);
  });
});
var React = require('react');
//var TestUtils = require('react-addons-test-utils');
var expect = require('chai').expect;
var enzyme = require('enzyme');
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Badge from 'material-ui/Badge';

import SearchResults from '../js/components/searchresults';
import {Reactions} from '../js/components/reactions';
import {List, ListItem} from 'material-ui/List';

describe('Reactions component', function() {
  it('should render',function(){
    const medicine_list = [{reaction: [{name: "Death", count: 40}]}]
    const wrapper = shallow(<Reactions exact_medicine={medicine_list} />);
    expect(wrapper.find(ListItem)).to.have.length(1);
    expect(wrapper.find(ListItem).props().primaryText).to.eq("Death");
    expect(wrapper.find(ListItem).props().rightIcon.props.badgeContent).to.eq(40);
  });
});
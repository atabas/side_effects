var React = require('react');
//var TestUtils = require('react-addons-test-utils');
var expect = require('chai').expect;
var enzyme = require('enzyme');
import { shallow } from 'enzyme';
import sinon from 'sinon';

import App from '../js/components/app';
import {SearchResults} from '../js/components/searchresults';
import {Reactions} from '../js/components/reactions';
import Appbar from '../js/components/appbar';
import Info from '../js/components/info';

describe('App component', function() {
  it('should render the Appbar, Info, SearchResults and Reactions components',function(){
    const wrapper = shallow(<App />);
    expect(wrapper.find(Reactions)).to.not.eq(null);
    expect(wrapper.find(SearchResults)).to.not.eq(null);
    expect(wrapper.find(Appbar)).to.have.length(1);
    expect(wrapper.find(Info)).to.have.length(1);
  });
});

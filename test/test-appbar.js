var React = require('react');

var expect = require('chai').expect;
var enzyme = require('enzyme');
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Appbar from '../js/components/appbar';

describe('Appbar component', function() {
  it('should have a title of Medicinal Side Effects',function(){
    const wrapper = shallow(<Appbar />);
    expect(wrapper.props().title).to.eq("Medicinal Side Effects");
  });
});

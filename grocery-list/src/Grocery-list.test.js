import React from 'react';
import { shallow, mount } from 'enzyme';

import Grocery from './Grocery';
import GroceryList from './Grocery-list';

describe('GroceryList', () => {
  it('should have the appropriate number of groceries', () => {
    const wrapper = mount(<GroceryList />);
    wrapper.setState({ groceries: [{name: 'Steak'}, {name: 'banana'}] })

    expect(wrapper.state('groceries').length).toEqual(2);
  });
});

describe('Grocery List Clear Button', () => {
  it('should be disabled if there are no groceries', () => {
    const wrapper = mount(<GroceryList />);
    expect(wrapper.find('.Clear-Grocery-List').text()).toEqual('Clear');
  });
});

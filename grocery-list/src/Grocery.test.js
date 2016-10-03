import React from 'react';
import { shallow, mount } from 'enzyme';

import Grocery from './Grocery';

describe('Grocery', () => {

  it ('renders the name of the grocery in <h3> tags', () => {
    const wrapper = shallow(<Grocery name='Bananas' />);
    const title = <h3>Bananas</h3>;

    expect(wrapper.contains(title)).toEqual(true);
  });

  it ('has a class of .Grocery', () => {
    const wrapper = shallow(<Grocery name='Bananas' />);

    expect(wrapper.is('.Grocery')).toEqual(true);
  });

  it('should have a className of "starred" if it is starred', () => {
    const wrapper = shallow(
      <Grocery name='Bananas' starred={true} />
    );

    expect(wrapper.is('.starred')).toEqual(true);
  });

  it('should not have a className of "starred" if it is NOT starred', () => {
    const wrapper = shallow(
      <Grocery name='Bananas' />
    );

    expect(wrapper.is('starred')).toEqual(false);
  });

  it('should have a className of "purchased" if it is purchased', () => {
    const wrapper = shallow(
      <Grocery name='Bananas' purchased={true} />
    );

    expect(wrapper.is('.purchased')).toEqual(true);
  });

  it('should not have a className of "purchsed" if it is NOT purchased', () => {
    const wrapper = shallow(
      <Grocery name='Bananas' />
    );
  });

  it('should have a p.Grocery-quantity element if a quantity are passed as a prop', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" quantity={'17 bunches'} />
    );

    expect(wrapper.find('.Grocery-quantity').length).toEqual(1);
  });

  it('should not have a p.Grocery-quantity element if a quantity are passed as a prop', () => {
    const wrapper = shallow(
      <Grocery name='Bananas' quantity={undefined} />
    );

    expect(wrapper.find('.Grocery-quantity').length).toEqual(0);
  });

  it('should have a p.Grocery-notes element if notes are passed as a prop', () => {
    const wrapper = shallow(
      <Grocery name='Bananas' notes={'Here is a note!'} />
    );

    expect(wrapper.find('.Grocery-notes').length).toEqual(1);
  });

  it('should NOT have a p.Grocery-notes element if notes are NOT passed as a prop', () => {
    const wrapper = shallow(
      <Grocery name = 'Steak' />
    );

    expect(wrapper.find('.Grocery-notes').length).toEqual(0);
  });

  it('should have correct text in quantity feild', () => {
    const wrapper = shallow(
      <Grocery name='Bananas' quantity='17' />
    );

    expect(wrapper.find('.Grocery-quantity').text()).toEqual('Quantity: 17');
  });

  it('should have correct text in the notes field', () => {
    const wrapper = shallow(
      <Grocery name='Bananas' notes='I should buy STEAK' />
    );

    expect(wrapper.find('.Grocery-notes').text()).toEqual('Notes: I should buy STEAK');
  });
});

describe('.Grocery-purchase button', () => {

  it('should have a text of "Purchase" if purchase is false', () => {
    const wrapper = shallow(
      <Grocery name='Bananas' purchased={undefined} />
    );

    expect(wrapper.find('.Grocery-purchase').text()).toEqual('Purchase');
  });

  it('should have a text of "Unpurchase" if purchase is true', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" purchased={true} />
    );

    expect(wrapper.find('.Grocery-purchase').text()).toEqual('Unpurchase');
  });

});

describe('.Grocery-star button', () => {

  it('should have a text of "Star" if starred is false', () => {
    const wrapper = shallow(
      <Grocery name='Steak' starred={undefined} />
    );

    expect(wrapper.find('.Grocery-starred').text()).toEqual('Star');
  });

  it('should have a text of "Unstar" if starred is true', () => {
    const wrapper = shallow(
      <Grocery name="Steak" starred={true} />
    );

    expect(wrapper.find('.Grocery-starred').text()).toEqual('Unstar');
  });
});

describe('.Grocery-remove button', () => {

});

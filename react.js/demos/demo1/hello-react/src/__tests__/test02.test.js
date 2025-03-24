import React from 'react';
import renderer from 'react-test-renderer';
import MyButton from '../TestDemos/MyButton';


test('MyButton works as expected', () => {
   const tree = renderer.create(<MyButton label="Submit Me" />).toJSON()

   expect(tree).toMatchSnapshot();
})
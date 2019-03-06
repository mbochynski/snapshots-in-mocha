import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import snapshot from 'snap-shot-it';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should produce a snapshot', () => {
  const wrapper = shallow(<App />);

  // IT IS SUPPOSED TO WORK ONLY IN MOCHA
  snapshot(wrapper);
})

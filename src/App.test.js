import { render, screen } from '@testing-library/react';
import React from 'react'
import ProvidedApp from './App';
import ReactDOM from 'react-dom'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProvidedApp />, div)
  ReactDOM.unmountComponentAtNode(div)
});


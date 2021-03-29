import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react';
import AppWithProvider from './AppContainer';

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AppWithProvider />,div)
  ReactDOM.unmountComponentAtNode(div)
});

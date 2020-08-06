import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import EmployeeList from './components/EmployeeList';

describe('Snapshot test', () => {
  test('App snapshot test', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON;
    expect(tree).toMatchSnapshot();
  });
});

describe('App getByText tests', () => {
  test('renders header title', () => {
    const { getByText } = render(<App />);
    const text = getByText(/Sort Schmort, Inc./i);
    expect(text).toBeInTheDocument();
  });

  test('renders Department:', () => {
    const { getByText } = render(<App />);
    const text = getByText(/Department:/i);
    expect(text).toBeInTheDocument();
  });

  test('get select box', () => {
    const { getByDisplayValue } = render(<App />);
    const select = getByDisplayValue(/Department/i);
    expect(select).toBeInTheDocument();
  });

  test("get div with text = 'Sort'", () => {
    const { getByTestId } = render(<App />);
    const text = getByTestId(/sortTxtId/i);
    expect(text).toBeInTheDocument();
  });
});

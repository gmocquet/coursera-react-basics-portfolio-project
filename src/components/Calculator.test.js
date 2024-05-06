// Import React and testing utilities
import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Calculator from './Calculator'; // Adjust the import path as necessary

it('should display initial result as 0', () => {
  render(<Calculator />);
  const output = screen.getByLabelText('calculator-output');
  expect(output.textContent).toBe('0');
});

it('add 5, should result be 5', async () => {
  render(<Calculator />);
  const input = screen.getByLabelText('calculator-input');
  const output = screen.getByLabelText('calculator-output');
  const addButton = screen.getByText('add');
  
  fireEvent.change(input, { target: { value: '5' } });
  expect(output.textContent).toBe('0');
  expect(input.value).toBe('5');
  fireEvent.click(addButton);
  
  await waitFor(() => { 
    expect(output.textContent).toBe('5');
  });
  expect(input.value).toBe('5');
});

it('calculate 5+5, should result be 10', async () => {
  render(<Calculator />);
  const input = screen.getByLabelText('calculator-input');
  const output = screen.getByLabelText('calculator-output');
  const addButton = screen.getByText('add');
  
  fireEvent.change(input, { target: { value: '5' } });
  fireEvent.click(addButton);
  
  await waitFor(() => { 
    expect(output.textContent).toBe('5');
  });
  expect(input.value).toBe('5');

  fireEvent.change(input, { target: { value: '5' } });
  fireEvent.click(addButton);

  await waitFor(() => { 
    expect(output.textContent).toBe('10');
  });
  expect(input.value).toBe('5');
});

it('calculate 10-10, should result be 0', async () => {
  render(<Calculator />);
  const input = screen.getByLabelText('calculator-input');
  const output = screen.getByLabelText('calculator-output');
  const addButton = screen.getByText('add');
  const minusButton = screen.getByText('subtract');
  
  fireEvent.change(input, { target: { value: '10' } });
  fireEvent.click(addButton);
  
  await waitFor(() => { 
    expect(output.textContent).toBe('10');
  });
  
  fireEvent.change(input, { target: { value: '10' } });
  fireEvent.click(minusButton);

  await waitFor(() => { 
    expect(output.textContent).toBe('0');
  });
});

it("calculate 10/0, should result display can't divide number by zero", async () => {
  render(<Calculator />);
  const input = screen.getByLabelText('calculator-input');
  const output = screen.getByLabelText('calculator-output');
  const addButton = screen.getByText('add');
  const divideButton = screen.getByText('divide');
  
  fireEvent.change(input, { target: { value: '10' } });
  fireEvent.click(addButton);
  
  await waitFor(() => { 
    expect(output.textContent).toBe('10');
  });
  
  fireEvent.change(input, { target: { value: '0' } });
  fireEvent.click(divideButton);

  await waitFor(() => { 
    expect(output.textContent).toBe("Can't divide number by zero");
  });
});

it("calculate 5/0, then, add 10, should result be 10", async () => {
  render(<Calculator />);
  const input = screen.getByLabelText('calculator-input');
  const output = screen.getByLabelText('calculator-output');
  const addButton = screen.getByText('add');
  const divideButton = screen.getByText('divide');
  
  fireEvent.change(input, { target: { value: '5' } });
  fireEvent.click(addButton);
  
  await waitFor(() => { 
    expect(output.textContent).toBe('5');
  });
  
  fireEvent.change(input, { target: { value: '0' } });
  fireEvent.click(divideButton);

  await waitFor(() => { 
    expect(output.textContent).toBe("Can't divide number by zero");
  });

  fireEvent.change(input, { target: { value: '10' } });
  fireEvent.click(addButton);

  await waitFor(() => { 
    expect(output.textContent).toBe("10");
  });
});

it("calculate 5+10, then press the reset button, should result be 0", async () => {
  render(<Calculator />);
  const input = screen.getByLabelText('calculator-input');
  const output = screen.getByLabelText('calculator-output');
  const addButton = screen.getByText('add');
  const resetResultButton = screen.getByText('resetResult');
  
  fireEvent.change(input, { target: { value: '5' } });
  fireEvent.click(addButton);
  
  await waitFor(() => { 
    expect(output.textContent).toBe('5');
  });
  
  fireEvent.change(input, { target: { value: '10' } });
  fireEvent.click(addButton);

  await waitFor(() => { 
    expect(output.textContent).toBe("15");
  });

  fireEvent.click(resetResultButton);

  await waitFor(() => { 
    expect(output.textContent).toBe("0");
  });
});


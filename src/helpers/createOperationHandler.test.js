import createOperationHandler from './createOperationHandler';

it('should return a function', () => {
  const plusHandler = createOperationHandler('+');
  expect(typeof plusHandler).toBe('function');

  const minusHandler = createOperationHandler('-');
  expect(typeof minusHandler).toBe('function');

  const timesHandler = createOperationHandler('*');
  expect(typeof timesHandler).toBe('function');

  const divideHandler = createOperationHandler('/');
  expect(typeof divideHandler).toBe('function');
});

it('calculate 5+5, should result be 10', () => {
  expect(createOperationHandler('+')(5, 5)).toBe(10);
});

it('calculate (5+5)-5, should result be 5', () => {
    const plusHandler = createOperationHandler('+');
    const minusHandler = createOperationHandler('-');
    
    const fivePlus5 = plusHandler(5, 5);
    const tenMinus5 = minusHandler(fivePlus5, 5);
    expect(tenMinus5).toBe(5);
  });

  it('calculate 5*2, should result be 10', () => {
    expect(createOperationHandler('*')(5, 2)).toBe(10);
  });

  it('calculate 20/2, should result be 10', () => {
    expect(createOperationHandler('/')(20, 2)).toBe(10);
  });

  it('calculate 20/0, should result be Can\'t divide number by zero', () => {
    expect(createOperationHandler('/')(20, 0)).toBe("Can't divide number by zero");
  });
  
import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // We can use useState multiple times an they are independent
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    // We prevent the default of reloading the page
    event.preventDefault();

    // We store the data
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // We clear the inputs
    // We use two way binding
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    props.onSaveExpenseData(expenseData);
  };

  return (
    // The onSubmit event is launched erverytime we click on the submit button
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            // We need to use two way binding to restore the value once we submit
            value={enteredTitle}
            // We need to get the input data, for that we use onChange
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Anount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-34'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;

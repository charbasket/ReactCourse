import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // We can use useState multiple times an they are independent
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // You can do all three states in one, but then you have to make sure that all three are passed
  // const [userInput, setUserInput] = useState ({
  //  enteredTitle:"",
  //  enteredAmount: "",
  //  enteredDate: ""
  // });
  // IMPORTANT: whenever you update state and you depend on the previous state you should not use ...
  // you should call the function a pass another function and then use ...prevState

  // Each time we press a key, titleChangeHandler is executed
  // The event object is created everytime we use an state (like onClick, onChange)
  // We use event.target.value to get the input from the user
  // We need to store this value for that we use state
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // If we only used one state:
    // setUserInput ((prevState) => {
    //  return {...prevState, enteredTitle: event.target.value}
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // If we only used one state:
    // setUserInput ((prevState) => {
    //  return {...prevState, enteredAmount: event.target.value}
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // If we only used one state:
    // setUserInput ((prevState) => {
    //  return {...prevState, enteredDate: event.target.value}
    // })
  };

  // onSubmit by default sends a request and updates the page, but we don´t want that

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

    // We created our own event on NewExpense (onSaveExpenseData).
    // Because is a custom event we need to trigger it manually and we fetch it by props
    // We pass the data we need to get upt to the parent ( expenseData -> enteredExpenseData )
    props.onSaveExpenseData(expenseData);

    // console.log(expenseData);
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

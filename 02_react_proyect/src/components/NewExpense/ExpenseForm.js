import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
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

  // Each time we press a key, titleChangeHandler is executed
  // The event object is created everytime we use an state (like onClick, onChange)
  // We use event.target.value to get the input from the user
  // We need to store this value for that we use state
  const titleChangeHandler = (event) => {
    console.log('Title changed!');
    console.log(event.target.value);
    setEnteredTitle(event.target.value);

    // If we only used one state:
    // setUserInput ({
    //  ...userInput,
    //  enteredTitle: event.target.value
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // If we only used one state:
    // setUserInput ({
    //  ...userInput,
    //  enteredAmount: event.target.value
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // If we only used one state:
    // setUserInput ({
    //  ...userInput,
    //  enteredDate: event.target.value
    // })
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          {/* We need to get the input data, for that we use onChange */}
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Anount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-34'
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

import { useState } from 'react';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [formOpened, setFormOpened] = useState(false);
  const setFormOpenedHandler = () => {
    setFormOpened(true);
  };

  const stopEditingHandler = () => {
    setFormOpened(false);
  };

  // We put as a parameter the expected data from the child
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // We create a variable we copy the data passed by the child and add the id
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // Once again we need to pass the data up to App.js so we call our custom event
    props.onAddExpense(expenseData);
    setFormOpened(false);
  };

  return (
    <div className='new-expense'>
      {!formOpened ? (
        <button onClick={setFormOpenedHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

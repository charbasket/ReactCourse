import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  // We put as a parameter the expected data from the child
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // We create a variable we copy the data passed by the child and add the id
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // Once again we need to pass the data up to App.js so we call our custom event
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      {/* We create our own event to pass the data from child to parent */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

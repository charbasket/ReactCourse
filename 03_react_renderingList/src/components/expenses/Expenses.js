import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';

import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // We create a new array with the filtered results
  // .filter() will return true or false depending if the condition is met
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // We can store JSX on variables like this
  // We put this on another component for clariry => ExpensesList.js
  // let expensesContent = <p>No expenses found.</p>;

  // We want to filter the output of the component depending on the length of the array
  // We put this on another component for clariry => ExpensesList.js
  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />

        {/*
         *  We want to print one ExpenseItem for each expense we have
         *  We use .map() to transform each object of the array into a ExpenseItem
         *  We use the prop KEY to assign an uniq value like an id to let react know each individual element
         */}

        {/* {props.items.map((expense) => ( */}
        {/* If there is no content we want to print a message */}

        {/* We use this if we use the if to output */}
        {/* {expensesContent} */}

        {/* We can use a? b:c  */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* We can use && to render the second condition if the first one is met instead of using a? b:c */}
        {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;

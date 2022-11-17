import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';

const ExpenseItem = (props) => {
  // It´s always better to have the logic outside the return.
  // It´s better to make another component

  // This won´t work to update the title because react only calls the component once
  // let title = props.title;
  // To do this we must use useState ->

  // We must call this inside the component function
  // The first const (title) is a pointer to the value we want to change
  // The second const (setTitle) is a function we can call to change the field
  const [title, setTitle] = useState(props.title);

  // If a function is trigger by a event, we use Handler at the end of the funcion name
  // We don´t use  () when calling a Handler function on an event
  const clickHandler = () => {
    // This won´t work
    // title = 'Updated!';

    // To change the title, we use the function and we pass the new value
    setTitle('Hello!');
    console.log(title);
  };

  // Here we use props.title and props.amount but we have to pass forward props.date to ExpenseDate
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;

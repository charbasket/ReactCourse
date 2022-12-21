import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? 'red' : 'black')};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     /* border: 1px solid #ccc; */
//     border: 1px solid ${(props) => (props.invalid ? 'red' : '#ccc')};
//     background: ${(props) => (props.invalid ? '#ffd7d7' : 'transparent')};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   /* &.invalid input {
//     border-color: red;
//     background: #ffd7d7;
//   } */

//   /* &.invalid label {
//     color: red;
//   } */
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* You can use inline styles like this but is not the best
       *
       * <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>
       *
       * It´s better to add classes dynamically
       *
       */}

      {/* We can create this with styled-components */}
      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input
          type='text'
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div> */}

      {/* Use comments if we want to use styled-components */}
      {/* <FormControl className={!isValid ? 'invalid' : ''}> */}
      {/* <FormControl invalid={!isValid}> */}
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input
          type='text'
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div>
      {/* </FormControl> */}

      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        {/* We need to listen to changes */}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

// Assignment 2:
// 1. We use de onchange event to track the select value
// 2. We create a dropdownChangeHandler for the event
// 3. We add the ExpensesFilter component to Expenses
// 4. We forward the select value to Expenses (parent) and manage it as state
// 5. We create a function in Expenses.js that receives the data from ExpensesFilter.js (child)     (filterChangeHandler)
// 6. We create a custom event in Expenses.js <ExpensesFiler onchangeFilter />
// 7. We call the function that receives the data in our custom event <ExpensesFiler onchangeFilter = {fulterChangeHandler} />
// 8. We forward the data on dropdownChangeHandler via props with the custom event props.onChangeFilter(event.target.value)
// 9. We save the value on Expenses using useState
// 10. Once we have the value saved on state, we can use it on filterChangeHandler to filter
// 11. We can pass via props selected={ selectedYear } the filteredYear to set the default via two way binding

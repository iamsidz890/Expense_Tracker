import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectedDate) => {
    // console.log('expenses.js me hai ye ' , selectedDate);
    setFilteredYear(selectedDate);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear 
  });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onChangeFilter={filterChangedHandler}
          selected={filteredYear}
        />
        {/* we are here using map to simply map every element of the array to a component */}
        {/* {props.items.map(expense => ( */}
        {/* conditional rendering */}
        {filteredExpenses.length === 0 ? (<p>No expenses found.....</p>) : ( filteredExpenses.map(expense => (
          //  {filteredExpense.length===0 && <p>blah vlaj</p>}  if the first condition is true then the code after && gets executed
          <ExpenseItem
          // help react identify the new element , else it will check each and every one of the element 
          // key is like a keyword can be used in component as well as all the html tags , and help react identify each element or div seperately
            key = {expense.id} 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      )) }
         

        {/* <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        /> */}
      </Card>
    </div>
  );
}

export default Expenses;

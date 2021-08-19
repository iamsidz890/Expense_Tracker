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
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeFilter={filterChangedHandler} selected = {filteredYear}/>

        <ExpenseItem
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
        />
      </Card>
    </div>
  );
}

export default Expenses;

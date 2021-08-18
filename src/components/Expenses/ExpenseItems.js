// a component is just a js function
import React ,  { useState } from 'react' ; // for rerendering to happen
import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'       //can't use directly as a wrapper
function ExpenseItem(props) {
  //one parameter as object and will store all the properties hence props
  // month satrts from 0
  // const edate = new Date(2021,7,18);
  // const etitle = 'Spalding Basketball';
  // const eamount = '900INR'
  // should be in app.js no here so that the data is independent
  // const month = props.date.toLocaleString("en-us", { month: "long" });
  // const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  // const year = props.date.getFullYear();

  // ========================================================================================================
  // usestate react hook , should be called directly inside the function and nothing else 
  const [title , setTitle] = useState(props.title); //changes will be called again , returns an array with two elements , value and updating function
  // const will work fine as new value is not assigned , instead it check for the latest value
  function clickHandler () {
    setTitle('updated title from use state'); //telling react to re render , data that might change and update then state is needed.
   console.log('this click is in handler.')   
  }
  // state managed on component basis , each component has its own instance of state , hence all are not changed

  // let title = props.title ;
  // redefining this title inside a handler will not work as react dosen't works like that.
  // as it should trigger a rerender , and this is not happening here.
  // ========================================================================================================
  return (
    // instead of class using className
    
    <Card className="expense-item">
      <ExpenseDate date = {props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        {/* inside {} can run basic js .. */}
        <div className="expense-item__price">{props.amount}</div>
        <button onClick = {()=>{console.log('clicked')}}>Change Title</button> 
        <button onClick = {clickHandler}>Change title with outer function</button>
         {/*assign value to onclick , assign a function code to be executed  */}
        {/* see HTML button element , can add event listener directly */}
      </div>
    </Card>
  );
}
// data is passed via props
export default ExpenseItem;

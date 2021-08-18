// first component
//  we don't need to import react now explicitly when using JSX , in the past we need to
//  here is html code inside js file ---- this is JSX[javascript XML]
// dev tools me sources me whole react dom code and package code , not just our code , there will be app function not same tough

// import ExpenseItem from "./components/ExpenseItems";
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
const expenses = [
  { title: " Spalding Basketball", amount: 1999, date: new Date(2021, 7, 18) },
  { title: "Ryzen7", amount: 29000, date: new Date(2021, 7, 10) },
  { title: "Mouse", amount: 499, date: new Date(2021, 7, 9) },
];
function App() {
  return (
    // in browser they get converted to react methods i.e React.createElement() , we do not see this code in browser.
    <div className="App">
      <h1>React mini project 1</h1>
      <NewExpense/>
      {/* <p>This is also in app.js</p> */}
      <Expenses expenses={expenses} />
      {/* if it would have js , then create paragraph append etc.... */}
    
    </div>
  );
}

export default App; //export our component

// the code will move from component to component to ecery components jsx code untill
// there is no jsx code left 

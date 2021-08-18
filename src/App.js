// first component

//  here is html code inside js file ---- this is JSX[javascript XML]
// dev tools me sources me whole react dom code and package code , not just our code , there will be app function not same tough

// import ExpenseItem from "./components/ExpenseItems";
import Expenses from './components/Expenses'
const expenses = [
  { title: " Spalding Basketball", amount: 1999, date: new Date(2021, 7, 18) },
  { title: "Ryzen7", amount: 29000, date: new Date(2021, 7, 10) },
  { title: "Mouse", amount: 499, date: new Date(2021, 7, 9) },
];
function App() {
  return (
    <div className="App">
      <h1>lets go man</h1>
      <p>This is also in app.js</p>
      <Expenses expenses={expenses} />
      {/* if it would have js , then create paragraph append etc.... */}
    
    </div>
  );
}

export default App; //export our component

// first component

//  here is html code inside js file ---- this is JSX[javascript XML]
// dev tools me sources me whole react dom code and package code , not just our code , there will be app function not same tough

import ExpenseItem from "./components/ExpenseItems";
function App() {
  return (
    <div className="App">
     <h1>lets go man</h1>
     <p>This is also in app.js</p>
     {/* if it would have js , then create paragraph append etc.... */}
     <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App; //export our component

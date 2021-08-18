// a component is just a js function
import './ExpenseItem.css' ;
function ExpenseItem(props) {   //one parameter as object and will store all the properties hence props
// month satrts from 0
    // const edate = new Date(2021,7,18);
    // const etitle = 'Spalding Basketball';
    // const eamount = '900INR' 
    // should be in app.js no here so that the data is independent
    return (
        // instead of class using className
        <div className='expense-item'>   
            <div>{props.date.toISOString()}</div> {/*to convert in string the date value use isostring */}
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                {/* inside {} can run basic js .. */}
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>
    );
}
// data is passed via props
export default ExpenseItem;
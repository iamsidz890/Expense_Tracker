// a component is just a js function
import './ExpenseItem.css' ;
function ExpenseItem() {
    return (
        // instead of class using className
        <div className='expense-item'>   
            <div>DATE</div>
            <div className='expense-item__description'>
                <h2>Title</h2>
                <div className='expense-item__price'>Amount</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
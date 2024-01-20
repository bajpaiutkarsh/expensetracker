import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate"
import Cards from '../UI/Cards'
const  ExpenseItem = (props) => {
   
    const expenseItem = props.expense.title
    const expensePrice = props.expense.amount
    return (
        <Cards className="expense-item">
            <ExpenseDate date={props.expense.date}></ExpenseDate>
            <h2 className="expense-item__description">{expenseItem}</h2>
            <div className="expense-item__price">{expensePrice}</div>
        </Cards>
    )
}
export default ExpenseItem
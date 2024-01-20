
import Cards from "../UI/Cards";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses=(props)=>{
    return (<Cards className="expenses">

        <ExpenseItem expense={props.expenses[0]}></ExpenseItem>
        <ExpenseItem expense={props.expenses[1]}></ExpenseItem>
        <ExpenseItem expense={props.expenses[2]}></ExpenseItem>
        <ExpenseItem expense={props.expenses[3]}></ExpenseItem>
    </Cards>)
}
export default Expenses
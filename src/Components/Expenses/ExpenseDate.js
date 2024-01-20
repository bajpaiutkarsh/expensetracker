import './ExpenseDate.css'
const ExpenseDate = (props)=>{
    const date  =  [props.date.toLocaleString('en-US', {month: 'long'}),
    props.date.toLocaleString('en-US', {day: '2-digit'}),
    props.date.getFullYear()
]
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{date[0]}
                </div>
                <div className='expense-date__day'>{date[1]}
                </div>
                <div className='expense-date__year'>{date[2]}
                </div>
        </div>
    )
}
export default ExpenseDate
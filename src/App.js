import logo from './logo.svg';
import './App.css';
import Expenses from './Components/Expenses/Expenses'

function App() {
  const expense = [
    {id:1, title: "Groceries", date: new Date(2021,5,15), amount: 127.54 },
    { id:2,title: "Rent", date: new Date(2021,5,15), amount: 850.00 },
    { id:3,title: "Utility Bill", date: new Date(2021,5,15), amount: 135.92 },
    { id:4,title: "Phone Bill", date: new Date(2021,5,15), amount: 69.99 },
  
  ]
  return (
    <div>
      <h2>Let Started</h2>
      <Expenses expenses={expense}></Expenses>
    </div>
  );
}

export default App;

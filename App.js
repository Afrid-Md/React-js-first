import ExpenseItems from "./Components/ExpenseItems";
import Card from "./Components/Card";

const App=()=> {
  const expenses = [
    { title: "Food", amount: 10,locationOfexpenditure:"restaurant"},
    { title: "Movie", amount: 200,locationOfexpenditure:"imax"},
    { title: "Petrol", amount: 100,locationOfexpenditure:"pertol_pump"},
    { title: "diesel", amount: 400,locationOfexpenditure:"deisel_pump"},
  ];
  let Total = 0;
  for (let i = 0; i < expenses.length; i++) {
    Total = Total+ expenses[i].amount;
  }
  return (
    <Card className="App">
      <header className="App-header">
        <ExpenseItems
          title={expenses[0].title}
          amount={expenses[0].amount}
          locationOfexpenditure={expenses[0].locationOfexpenditure}
        ></ExpenseItems>
        <ExpenseItems
          title={expenses[1].title}
          amount={expenses[1].amount}
          locationOfexpenditure={expenses[1].locationOfexpenditure}
        ></ExpenseItems>
        <ExpenseItems
          title={expenses[2].title}
          amount={expenses[2].amount}
          locationOfexpenditure={expenses[2].locationOfexpenditure}
        ></ExpenseItems>
        <ExpenseItems
          title={expenses[3].title}
          amount={expenses[3].amount}
          locationOfexpenditure={expenses[3].locationOfexpenditure}
        ></ExpenseItems>
        <div>
          <center>Total amount : {Total}</center>
        </div>
      </header>
    </Card>
  );
}

export default App;

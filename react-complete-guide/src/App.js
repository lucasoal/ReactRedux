import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Footer from "./components/UI/Footer"
import Header from "./components/UI/Header"


function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450.12,
      date: new Date(2021, 5, 12),
    }
  ];

  return (
    <div>
      <Header/>
      <NewExpense/>
      <Expenses items={expenses} />
      <Footer/>
    </div>
  );

  //? ────── · Old React · ──────
  // return (React.createElement(
  //  'div',
  //   {},
  //   React.createElement(Expenses, {items: expenses})
  // );
}

export default App;

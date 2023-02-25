
import './App.css';
import Header from './Component/Header'
import Todo from './Component/Todo'
import ToDoList from './Component/ToDoList';
import Footer from './Component/Footer'

function App() {
  return (
    <div className="App">
       <Header />
       <ToDoList/>
      <Footer />
    </div>
  );
}

export default App;

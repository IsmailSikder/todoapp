
import './App.css';
import HomePage from './pages/somepage';
import { Switch,Route  } from 'react-router-dom';
import ToDoList from './pages/todopage';
import Header from './components/header.component';

function App() {
  return (
    <div className="App">
      
      <Header/>
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/todolist' component={ToDoList}/>
    </Switch>
    </div>
    
  );
}

export default App;

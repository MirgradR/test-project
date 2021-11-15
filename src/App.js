import { Provider } from 'react-redux';
import './App.css';
import ListTodosContainer from './Component/ListTodos';
import store from './redux/redux-store';

function App() {
  return (
    <div className = {'app'}>
      <ListTodosContainer />
    </div>
  );
}

const AppContainer = () => {
  return (
    <Provider store = {store}>
      <App />
    </Provider>
  )
}

export default AppContainer;

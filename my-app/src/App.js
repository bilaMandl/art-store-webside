import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Nav } from './components/nav';
import { Routing } from './components/routing';
import { store } from './redux/store';

function App() {
  return <>
  <Provider store={store}>
    <BrowserRouter>
      <Nav></Nav>
      <div className='container' >
        <Routing></Routing>
      </div>
    </BrowserRouter>
    </Provider>

  </>
}

export default App;

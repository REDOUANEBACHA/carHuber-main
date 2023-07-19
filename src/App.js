

import RouterAll from './router/Router';
import { Provider } from 'react-redux';
import { store } from './store/reducer.tsx';
import Header from './compenent/Header';
function App() {
  return (
    <Provider store={store}>
        <RouterAll/>
    </Provider>

      );
}

export default App;

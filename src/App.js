

import RouterAll from './router/Router';
import { Provider } from 'react-redux';
import { store } from './store/reducer.tsx';
import Sidebar from './compenent/layout/sidebar';

function App() {
  return (
    <Provider store={store}>
      <div className="flex">
         <div className="flex flex-col flex-1">
            <RouterAll/>
          </div>
      </div>
        
    </Provider>

      );
}

export default App;

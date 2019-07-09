import React from 'react';
import { Provider } from 'react-redux';

import store from './store.js';
import Jugadores from './components/Jugadores.jsx';
import EquipoSeleccionado from './components/EquipoSeleccionado.jsx';


const App = () => (
  <Provider store={store}>
    <main>
      <h1>EDmanager</h1>
      <Jugadores/>
      <EquipoSeleccionado/>
    </main>
  </Provider>
)

export default App;

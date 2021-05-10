import './App.css';
import { store, persistor } from "./store";
import DataScreen from './pages/DataScreen'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";;

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DataScreen />
      </PersistGate>
    </Provider>
  );
}

export default App;

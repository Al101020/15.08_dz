import './App.css';

import СomponentListAndDetails from './components/task1/СomponentListAndDetails';
import CustomHook from './components/task2/CustomHook';

function App() {
  return (
    <>
      <h3>Задача №1 - Список и детали</h3>
      <СomponentListAndDetails />
      <h3>Задача №2 - useJsonFetch</h3>
      <CustomHook />
    </>
  )
};

export default App;

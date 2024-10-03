import "./App.css";
import {Routes,Route} from 'react-router-dom'
import DraftAndPublished from './components/dashboard/DraftAndPublished'
function App() {
  return (
    <Routes>
      {/*TODO: Change this code */}
      {/* <h1 className="text-4xl bg-blue-600 text-center text-white p-10 font-bold font-mono">
        Hello World!
      </h1> */}

    <Route path="/" element={<DraftAndPublished/>}></Route>


    </Routes>
  );
}

export default App;

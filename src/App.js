import React from 'react';
import Navbar from './components/Navbar';
// import People from './components/People';
// import Planets from './components/Planets';
import './App.css';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import People from './components/People';
import Home from './components/Home';
import Planets from './components/Planets';

function App() {
 
  // // const [loading, setloading] = useState(true);

  // useEffect(() => {
  //   // async function fetchPeople() {
  //   //   let res = await fetch('https://swapi.dev/api/people/?=format=json');
  //   //   let data = await res.json();
  //   //   setPeople(data.results);
  //   // }

  //   async function fetchPlanets() {
  //     let res = await fetch('https://swapi.dev/api/planets/?=format=json');
  //     let data = await res.json();
  //     setPlanets(data.results);
  //   }

  //   // fetchPeople();
  //   fetchPlanets();

  // }, [])

  // console.log('people', people);
  // console.log('planets', planets);

  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/people' element={<People/>} />
          <Route path='/planets' element={<Planets/>} />
        </Routes>
      </Router>
  );
}

export default App;

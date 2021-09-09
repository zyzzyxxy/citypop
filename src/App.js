import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Header from "./components/Header";
import FirstPageButtons from "./components/FirstPageButtons";
import SearchByCity from "./components/SearchByCity";
import SearchByCountry from "./components/SearchByCountry";


function App() {
  return (
    <Router>
    <div className='container'>
      <Header title='CityPop'/>
      <Route  path="/"
          exact
          component={FirstPageButtons}
          />      
      <Route path="/city" component={SearchByCity} />
      <Route path="/country" component={SearchByCountry} />
    </div>
    </Router>
  );
}

export default App;

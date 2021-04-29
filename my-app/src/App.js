import './App.css';
import Header from './Header.js';
import Columns from './Columns';
import Footer from './Footer.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
  
        <main style={homeMain}>
          <Header />

            <Columns />
            
            <Footer />
        </main>
       
    </div>
    
  );
}
const homeMain = {
    margin: 'auto',
    width: '90%',
}

export default App;

import './App.css';
import Header from './Header.js';
import Columns from './Columns';
import Footer from './Footer.js';

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

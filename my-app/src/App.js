import './App.css';
import Header from './Header.js';
import Columns from './Columns';

function App() {
  return (
    <div className="App">
        <main style={homeMain}>
          <Header />
            <Columns />
        </main>
    </div>
  );
}
const homeMain = {
    margin: 'auto',
    width: '90%',
}

export default App;

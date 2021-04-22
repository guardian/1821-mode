import './App.css';
import Header from './Header.js';
import Api from './Api.js';

function App() {
  return (
    <div className="App">
        <main style={homeMain}>
          <Header />
          <Api />
        </main>
    </div>
  );
}
const homeMain = {
    margin: 'auto',
    width: '90%',
}

export default App;

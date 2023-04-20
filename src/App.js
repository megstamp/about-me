
import About from './components/About.jsx';
import Quote from './components/Quote.jsx';
import Grid from './components/Grid.jsx';
import Footer from './components/Footer.jsx';

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <div className="App">
      <About />
      <Quote />
      <Grid />
      <Footer />
    </div>
  );
}

export default App;

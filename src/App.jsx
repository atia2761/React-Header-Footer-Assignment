import { BrowserRouter as Router } from 'react-router-dom'; 
import Header from './Components/Header';
import Footer from './Components/Footer';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Footer />
      </div>
    </Router>
  )
}

export default App
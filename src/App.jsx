import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

const MyTitle = () => {
  return (
    <h1>First React component</h1>
  )
}

function App() {
  return (
    <div className="App">
    <Header />
    <MyTitle />
    <Footer />
    </div>
  );
}

export default App;

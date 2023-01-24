import './App.css';
import Heading from './components/Heading/Heading';
import NavBar from './components/NavBar/NavBar';
import NewsContainer from './components/NewsContainer/NewsContainer'
import axios from 'axios';

axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7f29d7e369794bfdba8a3528a94cbfbe')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => console.error(error));

function App() {
  return (
    <div className="App">
      <NavBar />
      <Heading />
      <NewsContainer />
    </div>
  );
}

export default App;

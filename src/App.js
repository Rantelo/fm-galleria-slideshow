import './App.scss';
import Gallery from './components/Gallery';
import data from './data.json';

function App() {
  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <a href="/">galleria.</a>
        <a href="#">start slideshow</a>
      </header>

      <Gallery data={data} />
    </div>
  );
}

export default App;

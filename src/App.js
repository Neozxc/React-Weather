import './index.css';
import WeatherFetch from './components/WeatherFetch';

const App = () => {
  return (
    <div>
      <h3 className='justATEXT'>Simple Weather using React</h3>
      <WeatherFetch />
    </div>
  );
}

export default App;

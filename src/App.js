import './Scss/App.css';
import { Hero, Skills, Projects, Social } from './components/index';

function App() {
  return (
    <div className="full-app-container">
      <Hero />
      <Skills />
      <Projects />
      <Social />
    </div>
  );
}

export default App;

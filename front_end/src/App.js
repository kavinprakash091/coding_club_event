import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sample from './components/Sample';
import GuidelinesScreen from './screens/GuidelinesScreen';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  return (
    <BrowserRouter>
      <Sample />
      <Routes>
        <Route path="/signin" element={<SigninScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/guidelines" element={<GuidelinesScreen />} />
      </Routes>{' '}
    </BrowserRouter>
  );
}

export default App;

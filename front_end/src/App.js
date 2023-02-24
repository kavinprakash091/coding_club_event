import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminScreen from './screens/AdminScreen';
import AdminSigninScreen from './screens/AdminSigninScreen';
import GuidelinesScreen from './screens/GuidelinesScreen';
import HomeScreen from './screens/HomeScreen';
import Question1Screen from './screens/Question1Screen';
import SigninScreen from './screens/SigninScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SigninScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/guidelines" element={<GuidelinesScreen />} />
        <Route path="/admin-signin" element={<AdminSigninScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/stage1" element={<Question1Screen />} />
      </Routes>{' '}
    </BrowserRouter>
  );
}

export default App;

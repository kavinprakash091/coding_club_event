import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminScreen from './screens/AdminScreen';
import AdminSigninScreen from './screens/AdminSigninScreen';
import GuidelinesScreen from './screens/GuidelinesScreen';
import HomeScreen from './screens/HomeScreen';
import Question1Screen from './screens/Question1Screen';
import SigninScreen from './screens/SigninScreen';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        style={{ marginTop: '3%' }}
        limit={1}
      />
      <Routes>
        <Route path="/signin" element={<SigninScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/guidelines" element={<GuidelinesScreen />} />
        <Route path="/admin-signin" element={<AdminSigninScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/stage1" element={<Question1Screen />} />
        <Route path="/stage2" element={<Question1Screen />} />
        <Route path="/stage3" element={<Question1Screen />} />
        <Route path="/stage4" element={<Question1Screen />} />
        <Route path="/stage5" element={<Question1Screen />} />
        <Route path="/stage6" element={<Question1Screen />} />
        <Route path="/stage7" element={<Question1Screen />} />
      </Routes>{' '}
    </BrowserRouter>
  );
}

export default App;

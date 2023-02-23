import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SigninScreen from './screens/SigninScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SigninScreen />} />{' '}
      </Routes>{' '}
    </BrowserRouter>
  );
}

export default App;

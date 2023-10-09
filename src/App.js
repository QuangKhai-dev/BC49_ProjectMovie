import { Route, Routes } from 'react-router-dom';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/sign-in" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

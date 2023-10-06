import { Route, Routes } from 'react-router-dom';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

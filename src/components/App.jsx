import Layout from 'components/layout/Layout';
import Home from 'components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Facility from 'components/pages/Facility';
import Calendar from 'components/pages/Calendar';
import Gallery from 'components/pages/Gallery';
import Contact from 'components/pages/Contact';
import Team from 'components/pages/Team';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<Home />} />
          <Route element={<Team />} path="team" />
          <Route element={<Facility />} path="facility" />
          <Route element={<Calendar />} path="calendar" />
          <Route element={<Gallery />} path="gallery" />
          <Route element={<Contact />} path="contact" />
          <Route element={<Home />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

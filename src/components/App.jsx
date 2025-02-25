import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import Calendar from 'components/pages/Calendar';
import Contact from 'components/pages/Contact';
import Facility from 'components/pages/Facility';
import Gallery from 'components/pages/Gallery';
import Home from 'components/pages/Home';
import Team from 'components/pages/Team';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<Home />} />
          <Route element={<Team />} path="team" />
          <Route element={<Facility />} path="facilities" />
          <Route element={<Calendar />} path="calendar" />
          <Route element={<Gallery />} path="gallery" />
          <Route element={<Contact />} path="contact" />
          <Route element={<Home />} path="*" />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

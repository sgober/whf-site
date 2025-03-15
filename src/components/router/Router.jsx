import { Route, Routes } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import Calendar from 'components/pages/Calendar';
import Contact from 'components/pages/Contact';
import Facility from 'components/pages/Facility';
import Gallery from 'components/pages/Gallery';
import Home from 'components/pages/Home';
import Linus from 'components/pages/Linus';
import Team from 'components/pages/Team';

function Router() {
  const pageProps = { classes: 'page-content' };
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route index element={<Home {...pageProps} />} />
        <Route element={<Team {...pageProps} />} path="team" />
        <Route element={<Facility {...pageProps} />} path="facilities" />
        <Route element={<Calendar {...pageProps} />} path="calendar" />
        <Route element={<Gallery {...pageProps} />} path="gallery" />
        <Route element={<Contact {...pageProps} />} path="contact" />
        <Route element={<Linus {...pageProps} />} path="linus" />
        <Route element={<Home {...pageProps} />} path="*" />
      </Route>
    </Routes>
  );
}

export default Router;

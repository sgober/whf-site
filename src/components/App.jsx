import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Router from 'components/router/Router';
import ScrollToTop from 'components/util/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <ScrollToTop />
      <ToastContainer closeOnClick draggable pauseOnHover pauseOnVisibilityChange autoClose={2000} position="bottom-left" />
    </BrowserRouter>
  );
}

export default App;

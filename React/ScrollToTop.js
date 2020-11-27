// прокрутити до початку
// 1.
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// 2.
function App() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function LongContent() {
  return (
    <div>
      <ScrollToTopOnMount />

      <h1>Here is my long content page</h1>
      <p>...</p>
    </div>
  );
}
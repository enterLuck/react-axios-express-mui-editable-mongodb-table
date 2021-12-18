import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom'

import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
// import ThirdPage from './pages/ThirdPage'

export default function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route index element={<FirstPage />} />
            <Route path="first-page" element={<FirstPage />} />
            <Route path="second-page" element={<SecondPage />} />
            {/* <Route path="third-page" use={<ThirdPage />} /> */}
          </Routes>
        </Router>
    </div>
  );
}


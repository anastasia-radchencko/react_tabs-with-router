import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { TabsPage } from './components/TabsPage/TabsPage';
import { NotFoundPage } from './components/PageNotFound/NotFoundPage';
import { HomePage } from './components/HomePage/HomePage';

export const App = () => (
  <>
    <NavBar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  </>
);
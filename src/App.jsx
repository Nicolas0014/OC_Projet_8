import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import Home from '@pages/Home';
import Matches from '@pages/Matches';
import LeaderBoard from '@pages/LeaderBoard';
import Account from '@pages/Account';
import Portfolio from '@pages/Portfolio';
import Page404 from '@pages/Page404';
import './App.scss';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

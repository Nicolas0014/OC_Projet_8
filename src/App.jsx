import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import Home from '@pages/Home';
import Page404 from '@pages/Page404';
import './App.scss';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/OC_Projet_8" element={<Home />} />           
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

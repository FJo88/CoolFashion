import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewCategory from './pages/admin/NewCategory';
import CategoryPage from './pages/CategoryPage';
import ContactUsPage from './pages/ContactUsPage';
import FirstPage from './pages/FirstPage';
import NewProduct from './pages/admin/NewProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/admin/new' element={<NewCategory />} />
        <Route path='/admin/new/product' element={<NewProduct />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

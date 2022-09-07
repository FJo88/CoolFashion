import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewCategoryPage from './pages/admin/NewCategoryPage';
import CategoryPage from './pages/CategoryPage';
import ContactUsPage from './pages/ContactUsPage';
import FirstPage from './pages/FirstPage';
import NewProductPage from './pages/admin/NewProductPage';
import AdminFirstPage from './pages/admin/AdminFirstPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/admin' element={<AdminFirstPage />} />
        <Route path='/admin/new/category' element={<NewCategoryPage />} />
        <Route path='/admin/new/product' element={<NewProductPage />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewCategoryPage from './pages/admin/NewCategoryPage';
import CategoryPage from './pages/CategoryPage';
import ContactUsPage from './pages/ContactUsPage';
import FirstPage from './pages/FirstPage';
import NewProductPage from './pages/admin/NewProductPage';
import AdminFirstPage from './pages/admin/AdminFirstPage';

function App() {
  let jackets = [
    {
      title: 'Red Jacket',
      brand: 'Levis',
      price: '599 kr',
      category: 'Jackets',
      imageurl: 'https://placehold.jp/300x400.png',
      description: 'lorem ipsum dolor',
    },
    {
      title: 'Black Jacket',
      brand: 'Levis',
      price: '699 kr',
      category: 'Jackets',
      imageurl: 'https://placehold.jp/300x400.png',
      description: 'lorem dolor ipsum',
    },
    {
      title: 'Blue Jacket',
      brand: 'Tommy Hilfiger',
      price: '799 kr',
      category: 'Jackets',
      imageurl: 'https://placehold.jp/300x400.png',
      description: 'lorem',
    },
    {
      title: 'Green Jacket',
      brand: 'Levis',
      price: '599 kr',
      category: 'Jackets',
      imageurl: 'https://placehold.jp/300x400.png',
      description: 'lorem',
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path='/' element={<FirstPage />} />

        <Route path='/admin' element={<AdminFirstPage />} />
        <Route path='/admin/new/category' element={<NewCategoryPage />} />
        <Route path='/admin/new/product' element={<NewProductPage />} />
        <Route path='/category' element={<CategoryPage {...jackets} />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

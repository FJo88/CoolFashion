import './App.css';
import Footer from './components/Footer';
import InstagramCarousel from './components/InstagramCarousel';
import MainHero from './components/MainHero';
import Header from'./components/Header';
import Main from './components/Main'
import CategoryPage from './components/CategoryPage';

function App() {
  return (
    <div className='App'>
       <Header/>
      <MainHero />
      <Main/>
      <InstagramCarousel />
      <Footer />
      <CategoryPage/>
    </div>
  );
}

export default App;

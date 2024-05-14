import React, { createContext, useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; // Import Routes instead of Switch
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import Books from './pages/Books';
import Cart from './pages/Cart';
import Fantasy from './pages/Fantasy';
import BookDetails from './pages/BookDetails';
import SignUp from './pages/SignUp';
import DetailsPage from './pages/Details';
import axios from 'axios';

const MyContext = createContext();

function App() {
  const ref = useRef('');
  const [isLogin, setIsLogin] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const isLoginStored = localStorage.getItem('isLogin');
        setIsLogin(isLoginStored);

        // Simulating data fetching delay
        setTimeout(() => {
          setIsloading(false);
        }, 3000);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsloading(false);
      }
    };

    fetchData();
  }, []);

  const signIn = () => {
    localStorage.setItem('isLogin', true);
    setIsLogin(true);
  };

  const signOut = () => {
    localStorage.removeItem('isLogin');
    setIsLogin(false);
  };

  return (
    <React.StrictMode>
      <div ref={ref}>
        <BrowserRouter>
          <MyContext.Provider value={{ isLogin, signIn, signOut }}>

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/myaccount" element={<MyAccount />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/books" element={<Books />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/genreFantasy" element={<Fantasy />} />
              <Route exact path="/book/:id" element={<BookDetails/>} />
              <Route exact path="/details" element={<DetailsPage/>} />
            </Routes>
          </MyContext.Provider>
        </BrowserRouter>
      </div>
    </React.StrictMode>
  );
}

export default App;

export { MyContext };

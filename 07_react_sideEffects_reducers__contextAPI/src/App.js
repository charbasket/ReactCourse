import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
  );

  // We dont need this code because we have it in auth-context.js
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // // If we do this without effect we would create a infinte loop
  // // A function that should be executed AFTER every component evaluation If the specified dependencies changed.
  // useEffect(() => {
  //   const storedUserLoggedIn = localStorage.getItem('isLoggedIn');
  //   if (storedUserLoggedIn === '1') {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We check if there is the user is logged in via localStorage variable
  //   // We save the state on localStorage when we click login button. localStorage.setItem("key", "value")
  //   localStorage.setItem('isLoggedIn', '1');
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  // return (
  //   // We wrap the components we want to have access to our AuthContext
  //   <AuthContext.Provider
  //     value={{
  //       isLoggedIn: isLoggedIn,
  //       onLogout: logoutHandler,
  //     }}
  //   >
  //     {/* Now we dont need to pass isLoggedIn via props */}
  //     {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
  //     <MainHeader />
  //     <main>
  //       {!isLoggedIn && <Login onLogin={loginHandler} />}
  //       {isLoggedIn && <Home onLogout={logoutHandler} />}
  //     </main>
  //   </AuthContext.Provider>
  // );
}

export default App;

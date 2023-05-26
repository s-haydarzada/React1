import React from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Home from './Home/index';
import Categories from './Categories/index';
import Navigation from './Navigation/index';
import SignIn from './SignIn/index';
import Shop from './Shop/index';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='/category' element={<Categories />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/shop' element={<Shop />} />
        </Route>
        <Route path='*' element={<Navigate to="/404" />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;

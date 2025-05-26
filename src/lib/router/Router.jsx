import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../../components/home/Home';
import Destination from '../../pages/Destination';
import Crew from '../../pages/Crew';
import Technology from '../../pages/Technology';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='index' element={<Home name='home' />} />
          <Route
            path='/destination'
            element={<Destination name='destination' />}
          />
          <Route path='/crew' element={<Crew name='crew' />} />
          <Route
            path='/technology'
            element={<Technology name='technology' />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default Router;

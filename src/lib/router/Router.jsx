import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Technology from '../../pages/technology/Technology';
import Home from '../../pages/home/Home';
import Destination from '../../pages/destination/Destination';
import Crew from '../../pages/crew/Crew';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='index' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;

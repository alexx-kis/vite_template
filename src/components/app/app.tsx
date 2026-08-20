import { AppRoute } from '@/constants';
import '@/styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home-page';

// ^======================== App ========================^ //

export default function App(): React.JSX.Element {
  return (
    <Routes>
      {/* <Route path={AppRoute.LOGIN} element={<LoginPage />} /> */}
      {/* <Route path={AppRoute.HOME} element={<PrivateRoute element={<Layout />} />}> */}
      <Route path={AppRoute.HOME} element={<HomePage />} />
      {/* </Route> */}
    </Routes>
  );
}

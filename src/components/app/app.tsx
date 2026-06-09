import { RootLayout as Layout, Wrapper } from '@/components/layout';
import { AppRoute } from '@/constants';
import '@/styles/index.scss';
import { Route, Routes } from 'react-router-dom';

// ^======================== App ========================^ //

export default function App(): React.JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.LOGIN} element={<LoginPage />} />
      <Route path={AppRoute.HOME} element={<PrivateRoute element={<Layout />} />}>
        <Route path={AppRoute.HOME} element={<HomePage />} />
      </Route>
    </Routes>
  );
}

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '@/components/Layout';
import NotFound from '@/pages/NotFound';
import { routeItems, taskRouteItems } from '@/components/Layout/routeMap';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routeItems.map((route) => {
            return route.subRoutes.length ? (
              <Route key={route.path} path={route.path}>
                <Route index path="" element={route.element} />

                {route.subRoutes.map((subRoute) => (
                  <Route key={subRoute.path} path={subRoute.path} element={subRoute.element} />
                ))}

                <Route path="*" element={<NotFound />} />
              </Route>
            ) : (
              <Route
                key={route.path}
                index={!!route.index}
                path={route.path}
                element={route.element}
              />
            );
          })}

          {/* task route only for admin */}
          {taskRouteItems.map((route) => (
            <Route key={route.path} path={route.path}>
              <Route index path="" element={route.element} />
              {route.subRoutes.map((subRoute) => (
                <Route key={subRoute.path} path={subRoute.path} element={subRoute.element} />
              ))}
            </Route>
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

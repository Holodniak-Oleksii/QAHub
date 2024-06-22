import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { getUserById } from "./api";
import { useUserStore } from "./common/store/user";
import { auth } from "./firebase";
import { Layout } from "./layouts";
import { Board, PageLoader, Projects, Report } from "./modules";

const AppRouter: React.FC = () => {
  const updateUser = useUserStore((state) => state.updateUser);
  const isAuth = useUserStore((state) => state.isAuth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const profile = await getUserById(user.uid);
        updateUser(profile);
      }
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Projects />} />
          {isAuth && (
            <>
              <Route path="/reports" element={<Report />} />
              <Route path="/board/:id" element={<Board />} />
            </>
          )}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

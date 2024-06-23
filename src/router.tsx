import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { getUserById } from "./api";
import { useMembersStore } from "./common/store/members";
import { useUserStore } from "./common/store/user";
import { IUser } from "./common/types";
import { auth, firestore } from "./firebase";
import { Layout } from "./layouts";
import { Board, PageLoader, Projects, Report } from "./modules";

const AppRouter: React.FC = () => {
  const updateUser = useUserStore((state) => state.updateUser);
  const updateMembers = useMembersStore((state) => state.updateMembers);

  const isAuth = useUserStore((state) => state.isAuth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const profile = await getUserById(user.uid);
        updateUser(profile);

        const membersCollectionRef = query(collection(firestore, "users"));

        const { docs } = await getDocs(membersCollectionRef);
        const members = docs.map((doc) => doc.data()) as IUser[];
        updateMembers(members.filter((member) => member.id !== user.uid));
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

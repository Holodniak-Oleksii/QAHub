import { IUser } from "@/common/types";
import { firestore } from "@/firebase";
import { QueryClient } from "@tanstack/react-query";
import { collection, getDocs, query, where } from "firebase/firestore";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

export const getUserById = async (id: string): Promise<IUser> => {
  const userCollectionRef = query(
    collection(firestore, "users"),
    where("id", "==", id)
  );

  const { docs } = await getDocs(userCollectionRef);
  return docs[0].data() as IUser;
};

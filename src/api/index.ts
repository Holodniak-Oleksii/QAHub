import { EQueryKey } from "@/common/enums";
import { useUserStore } from "@/common/store/user";
import { IProject, IUser, TID } from "@/common/types";
import { firestore } from "@/firebase";
import { QueryClient, useQuery } from "@tanstack/react-query";
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

export const useGetProjectsQuery = (uid: TID) => {
  const user = useUserStore((state) => state.user);
  return useQuery<IProject[]>({
    refetchOnMount: false,
    queryKey: [EQueryKey.PROJECT, uid],
    queryFn: async () => {
      const projectsCollectionRef = query(
        collection(firestore, "projects"),
        where("members", "array-contains", user)
      );

      const { docs } = await getDocs(projectsCollectionRef);
      return docs.map((doc) => doc.data()) as IProject[];
    },
  });
};

export const useGetProjectQuery = (uid: TID) => {
  return useQuery<IProject>({
    refetchOnMount: false,
    queryKey: [EQueryKey.PROJECT_SINGLE, uid],
    queryFn: async () => {
      const projectCollectionRef = query(
        collection(firestore, "projects"),
        where("id", "==", uid)
      );

      const { docs } = await getDocs(projectCollectionRef);
      return docs[0].data() as IProject;
    },
  });
};

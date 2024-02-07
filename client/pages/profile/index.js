import Profile from "@pages/components/Profile";
import { useGetAllPostQuery } from "@redux/post/postApiSlice";
import { useEffect } from "react";

export default function MyProfile() {
  const { data, isLoading, refetch } = useGetAllPostQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    if (data) {
      refetch();
    }
  }, [data]);

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={data}
      refetch={refetch}
      isLoading={isLoading}
    />
  );
}

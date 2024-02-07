import { apiSlice } from "@redux/api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsersInfo: builder.query({
      query: () => ({
        url: "/users/get-user-info",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUsersInfoQuery } = usersApiSlice;
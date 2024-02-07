import { apiSlice } from "@redux/api/apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createNewPost: builder.mutation({
      query: (credentials) => ({
        url: "posts/createNewPost",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    getAllPost: builder.query({
      query: () => ({
        url: "posts/getAllPost",
        method: "GET",
      }),
    }),
    updatePost: builder.mutation({
      query: (initialPostsData) => ({
        url: "/posts/updatePosts",
        method: "PATCH",
        body: { ...initialPostsData },
      }),
    }),
    deletePost: builder.mutation({
      query: ({ id }) => ({
        url: "/posts/deletePost",
        method: "DELETE",
        body: { id },
      }),
    }),
  }),
});

export const {
  useCreateNewPostMutation,
  useGetAllPostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApiSlice;

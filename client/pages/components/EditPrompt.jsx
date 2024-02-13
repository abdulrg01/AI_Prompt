import React, { useEffect, useState } from "react";
import {
  useGetAllPostQuery,
  useUpdatePostMutation,
} from "../../redux/post/postApiSlice";
import { useRouter } from "next/router";
import Link from "next/link";
import { useRefreshMutation } from "@redux/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials, setUser } from "@redux/auth/authSlice";

export default function EditPrompt({ id }) {
  const router = useRouter();
  const [updatePost, { isSuccess }] = useUpdatePostMutation();
  const { data, isLoading: allPostLoading } = useGetAllPostQuery();
  const dispatch = useDispatch();
  const [refresh, { data: ref }] = useRefreshMutation();
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        //const response =
        await refresh();
        //const { accessToken } = response.data
      } catch (err) {
        console.error(err);
      }
    };

    if (!ref) verifyRefreshToken();
  }, []);

  useEffect(() => {
    if (ref) {
      dispatch(setUser({ user: ref.user }));
      dispatch(setCredentials({ token: ref.token }))
    }
  }, [ref]);

  useEffect(() => {
    if (data) {
      const postDetails = data?.find((post) => post._id === id);
      setPost({
        prompt: postDetails?.prompt,
        tag: postDetails?.tag,
      });
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (isSuccess) {
      router.push("/");
    }
  }, [isSuccess]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updatePost({
      prompt: post.prompt,
      tag: post.tag,
      id,
    });
  };

  return (
    <>
      {allPostLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="w-full max-w-full flex-start flex-col">
          <h1 className="head_text text-left">
            <span className="blue_gradient">Edit Post</span>
          </h1>
          <p className="desc text-left max-w-md">
            Post and Share amazing prompts with the world, and let your
            imagination run with any AI-powered platform
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-10  w-full max-w-2xl flex flex-col gap-7 glassmorphism"
          >
            <label htmlFor="">
              <span className="font-satoshi font-semibold text-base text-gray-700">
                Your AI Prompt
              </span>
              <textarea
                name=""
                id=""
                value={post.prompt}
                onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                placeholder="Write your prompt here..."
                cols="30"
                rows="10"
                className="form_textarea"
              />
            </label>

            <label htmlFor="">
              <span className="font-satoshi font-semibold text-base text-gray-700">
                Prompt Field{" "}
                <span className="font-normal">
                  (#product, #webdevelopment, #idea)
                </span>
              </span>
              <input
                value={post.tag}
                onChange={(e) => setPost({ ...post, tag: e.target.value })}
                placeholder="#tag"
                required
                className="form_input"
              />
            </label>
            <div className="flex-end mx-3 mb-5 gap-4">
              <Link href="/" className="text-gray-500 text-sm">
                Cancel
              </Link>
              <button
                type="submit"
                className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
              >
                Edit
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
}

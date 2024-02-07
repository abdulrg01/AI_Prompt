import Form from "../components/Form";
import React, { useEffect, useState } from "react";
import {
  useGetAllPostQuery,
  useUpdatePostMutation,
} from "../../redux/post/postApiSlice";
import { useRouter } from "next/router";

export default function EditPrompt({ id }) {
  const router = useRouter();
  const [updatePost, { isLoading, isSuccess }] = useUpdatePostMutation();
  const { data, isLoading: allPostLoading } = useGetAllPostQuery();
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

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
        <Form
          type="Edit"
          post={post}
          setPost={setPost}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

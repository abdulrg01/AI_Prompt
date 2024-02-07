import Form from "../components/Form";
import React, { useState } from "react";
import { useCreateNewPostMutation } from "../../redux/post/postApiSlice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@redux/auth/authSlice";
import { useSession } from "next-auth/react";

export default function index() {
  const user = useSelector(selectCurrentUser);
  const { data: session } = useSession();
  const [createNewPost, { isSuccess, isLoading, error }] =
    useCreateNewPostMutation({});
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e) => {
    e.preventDefault();

    if (session) {
      await createNewPost({
        userId: user,
        prompt: post.prompt,
        tag: post.tag,
        image: session.user.image,
        name: session.user.name,
        email: session.user.email,
      });
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      isLoading={isLoading}
      isSuccess={isSuccess}
      error={error}
      setPost={setPost}
      handleSubmit={createPrompt}
    />
  );
}

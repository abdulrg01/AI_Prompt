import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

export default function Form({
  type,
  post,
  error,
  isLoading,
  isSuccess,
  setPost,
  handleSubmit,
}) {
  const router = useRouter();
  useEffect(() => {
    if (isSuccess) {
      router.push("/");
      toast.success("Post created successfully");
    }
    if (error) {
      if ("data" in error) {
        const errorMessage = error;

        toast.error(errorMessage.data.message);
      }
    }
  }, [isSuccess]);
  
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="w-full max-w-full flex-start flex-col">
          <h1 className="head_text text-left">
            <span className="blue_gradient">{type} Post</span>
          </h1>
          <p className="desc text-left max-w-md">
            {type} and Share amazing prompts with the world, and let your
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
                {type}
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
}

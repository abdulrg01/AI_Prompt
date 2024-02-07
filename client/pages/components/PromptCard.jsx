import { useDeletePostMutation } from "../../redux/post/postApiSlice";
import React, { useState } from "react";
import { IoCopySharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function PromptCard({ item, isLoading }) {
  const id = item?._id;
  const { data: session } = useSession();
  const [copied, setCopied] = useState("");
  const pathname = usePathname();
  const [deletePost, {}] = useDeletePostMutation({});
  const handleCopy = () => {
    setCopied(item.prompt);
    navigator.clipboard.writeText(item.prompt);

    setTimeout(() => setCopied(""), 3000);
  };

  const isUserPostMatch = item?.email === session?.user.email;

  const handleDelete = async (id) => {
    const hasConfirmed = confirm("Are you sure you want to delete this prompt");

    if (hasConfirmed) {
      try {
        await deletePost({ id: item._id });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="prompt_card">
          <div className="flex justify-between items-start gap-5">
            <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
              <img
                src={item.image}
                alt="user_image"
                className="rounded-full object-contain w-[40px] h-[40px]"
              />
              <div className="flex flex-col">
                <h3 className="font-satoshi font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="font-inter text-sm text-gray-500">{item.email}</p>
              </div>
            </div>

            <div className="copy_btn" onClick={handleCopy}>
              <IoCopySharp />
              <img
                src={copied === item.prompt ? <TiTick /> : <IoCopySharp />}
                alt=""
              />
            </div>
          </div>

          <p className="my-4 font-satoshi text-sm text-gray-700">
            {item.prompt}
          </p>
          <p className="font-inter text-sm blue-gradient cursor-pointer">
            #{item.tag}
          </p>

          {isUserPostMatch && pathname === "/profile" && (
            <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
              <Link
                className="font-inter text-sm green_gradient cursor-pointer"
                href={`/edithPrompt/${id}`}
              >
                Edit
              </Link>
              <p
                className="font-inter text-sm orange_gradient cursor-pointer"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

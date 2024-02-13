import { useDeletePostMutation } from "../../redux/post/postApiSlice";
import React, { useEffect, useState } from "react";
import { IoCopySharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function PromptCard({ item }) {
  const [itemID, setItemID] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [tag, setTag] = useState(null);
  const [prompt, setPrompt] = useState(null);
  const [copied, setCopied] = useState("");
  const [userEmail, setUserEmail] = useState(null);
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [deletePost, { isSuccess }] = useDeletePostMutation({});

  useEffect(() => {
    if (item) {
      setItemID(item._id);
      setImage(item.image);
      setName(item.name);
      setEmail(item.email);
      setPrompt(item.prompt);
      setTag(item.tag);
    }
    if (session) {
      setUserEmail(session.user.email);
    }
  }, [session, item]);

  useEffect(() => {
    if (isSuccess) {
      router.push("/");
    }
  }, [isSuccess]);

  const handleCopy = () => {
    setCopied(item?.prompt);
    navigator.clipboard.writeText(item?.prompt);

    setTimeout(() => setCopied(""), 3000);
  };

  const isUserPostMatch = email === userEmail;

  const handleDelete = async () => {
    const hasConfirmed = confirm("Are you sure you want to delete this prompt");

    if (hasConfirmed) {
      try {
        await deletePost({ id: itemID });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <img
            src={image}
            alt="user_image"
            className="rounded-full object-contain w-[40px] h-[40px]"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">{name}</h3>
            <p className="font-inter text-sm text-gray-500">{email}</p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <IoCopySharp />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">{prompt}</p>
      <p className="font-inter text-sm blue-gradient cursor-pointer">#{tag}</p>

      {isUserPostMatch && pathname === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <Link
            className="font-inter text-sm green_gradient cursor-pointer"
            href={`/edithPrompt/${itemID}`}
          >
            Edit
          </Link>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
}

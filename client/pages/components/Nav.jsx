import {
  useRefreshMutation,
  useSendLogoutMutation,
  useSocialAuthMutation,
} from "@redux/auth/authApiSlice";
import {
  selectCurrentToken,
  setCredentials,
  setUser,
} from "@redux/auth/authSlice";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Nav() {
  const { data: session, status } = useSession();
  const token = useSelector(selectCurrentToken);
  const [refresh, { data, isLoading }] = useRefreshMutation();
  const dispatch = useDispatch();
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [socialAuth] = useSocialAuthMutation();
  const [sendLogout] = useSendLogoutMutation();

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

    if (!token) verifyRefreshToken();
  }, []);

  useEffect(() => {
    if (session) {
      try {
        const { user, token } = socialAuth({
          email: session?.user?.email,
          name: session?.user?.name,
          avatar: session?.user?.image,
        });

        dispatch(setUser({ user }));
        dispatch(setCredentials({ token }));
      } catch (error) {
        console.error("Social authentication error:", error);
      }
    } else if (session === null) {
      sendLogout();
    }
  }, [session]);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <img
          src="/favicon.ico"
          alt="nav"
          className=" object-contain w-[35px] h-[35px]"
        />
        <p className="logo_text">AI Prompt</p>
      </Link>

      {/* Desktop navigation */}
      <div className="sm:flex hidden">
        {status === "authenticated" ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/createPrompt" className="black_btn">
              Create New Post
            </Link>
            <button
              type="button"
              onClick={() => {
                signOut();
                sendLogout;
              }}
              className="outline_btn"
            >
              Sign Out
            </button>
            <Link href="/profile">
              {/* Real user img */}
              <img
                src={session?.user.image}
                className="w-[30px] h-[30px] rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => {
                signIn("google");
              }}
              className="black_btn"
            >
              Sign In
            </button>
          </>
        )}
      </div>

      {/* mobile navigation */}
      <div className="sm:hidden flex relative">
        {status === "authenticated" ? (
          <div className="flex">
            <img
              src={session?.user.image}
              className="w-[30px] h-[30px] rounded-full"
              alt="profile"
              onClick={() => setToggleDropDown((prev) => !prev)}
            />
            {toggleDropDown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/createPrompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                    sendLogout;
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => {
                signIn("google");
              }}
              className="black_btn"
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

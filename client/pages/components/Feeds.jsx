import { useEffect, useState } from "react";
import { useGetAllPostQuery } from "../../redux/post/postApiSlice";
import PromptCard from "./PromptCard";

export default function Feeds() {
  const [search, setSearch] = useState("");
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
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="feed">
          <form className="relative w-full flex-center">
            <input
              type="text"
              placeholder="Search for a tag or a username"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
              className="search_input peer"
            />
          </form>
          {data &&
            data
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.prompt.toLowerCase().includes(search.toLowerCase()) ||
                  val.tag.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              ?.map((item, index) => (
                <PromptCard key={index} item={item} isLoading={isLoading} />
              ))}
        </section>
      )}
    </>
  );
}

import React, { useEffect } from "react";
import PromptCard from "./PromptCard";

export default function Profile({
  name,
  desc,
  data,
  isLoading,
}) {
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="w-full">
          <h1 className="head_text text-left">
            <span className="blue_gradient">{name} Profile</span>
          </h1>
          <p className="desc text-left">{desc}</p>
          <div className="mt-10 prompt_layout">
            {data &&
              data?.map((item, index) => (
                <PromptCard
                  key={index}
                  item={item}
                />
              ))}
          </div>
        </section>
      )}
    </>
  );
}

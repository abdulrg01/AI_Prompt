import React, { useEffect } from "react";

export default function Scroller() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);
  return (
    <section className="bodies py-10 text-white">
      <div className="scroller" data-speed="fast">
        <ul className="tag-list scroller__inner">
          <li>Kano</li>
          <li>Maidugri</li>
          <li>Bauci</li>
          <li>Niger</li>
          <li>Abuja</li>
          <li>Funtua</li>
          <li>Kaduna</li>
        </ul>
      </div>

      <div className="scroller" data-direction="right" data-speed="slow">
        <div className="scroller__inner">
          <img
            src="https://i.pravatar.cc/150?img=1"
            alt=""
            className="rounded-full"
          />
          <img
            src="https://i.pravatar.cc/150?img=2"
            alt=""
            className="rounded-full"
          />
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt=""
            className="rounded-full"
          />
          <img
            src="https://i.pravatar.cc/150?img=4"
            alt=""
            className="rounded-full"
          />
          <img
            src="https://i.pravatar.cc/150?img=5"
            alt=""
            className="rounded-full"
          />
          <img
            src="https://i.pravatar.cc/150?img=6"
            alt=""
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

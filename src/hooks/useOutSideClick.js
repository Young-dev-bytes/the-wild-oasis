import { useEffect, useRef } from "react";

function useOutSideClick(handler, listenCapturing = true) {
  console.log("useOutSideClick");
  const ref = useRef();
  useEffect(() => {
    console.log("useOutSideClick effect");
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        console.log("not contains");
        handler();
      }
    };
    document.addEventListener("click", handleClick, listenCapturing);
    return () => {
      console.log("clean");
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return ref;
}

export default useOutSideClick;

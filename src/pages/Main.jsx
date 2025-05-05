import React, { Suspense, useEffect, useRef } from "react";
import CancelList from "../components/CancelList";
import styles from "./Main.module.css";

const Main = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const button = containerRef.current.querySelector("#plus-button-id");
      if (button) {
        button.addEventListener("click", () => {
          alert("ボタンがクリックされました！");
        });
      }
    }

    return () => {
      if (containerRef.current) {
        const button = containerRef.current.querySelector("#plus-button-id");
        if (button) {
          button.removeEventListener("click", () => {
            alert("ボタンがクリックされました！");
          });
        }
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={styles["template-container"]}>
      <Suspense fallback={<div>Loading...</div>}>
        <CancelList />
      </Suspense>
    </div>
  );
};

export default Main;

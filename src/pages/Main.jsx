import React, { Suspense, useRef } from "react";
import CancelList from "../components/CancelList";
import styles from "./Main.module.css";
import Modal from "../components/Modal";

const Main = () => {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div ref={containerRef} className={styles["template-container"]}>
      <Suspense fallback={<div>Loading...</div>}>
        <CancelList />
        <Modal isOpen={isOpen} close={() => setIsOpen(false)} />
        <button
          id="plus-button-id"
          className={styles["plus-button"]}
          onClick={() => setIsOpen(true)}
        >
          +
        </button>
      </Suspense>
    </div>
  );
};

export default Main;

import React, { Suspense, useState } from "react";
import CancelList from "../components/CancelList";
import styles from "./Main.module.css";
import Modal from "../components/Modal";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles["template-container"]}>
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

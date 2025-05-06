import React, { Suspense, useRef, useState } from "react";
import CancelList from "../components/CancelList";
import styles from "./Main.module.css";
import Modal from "../components/Modal";

const Main = () => {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    setIsOpen(true);
  };


  return (
    <div ref={containerRef} className={styles["template-container"]}>
      <Suspense fallback={<div>Loading...</div>}>
        <CancelList />
        <Modal isOpen={isOpen} close={() => {
          setIsOpen(false);
          setIsSelected(false);
        }}
        />
        <div
          id="plus-button-id"
          className={`${styles["plus-cancel"]} ${isSelected ? styles["selected"] : ""}`}
          onClick={handleClick}
        >
          
        </div>
      </Suspense>
    </div>
  );
};

export default Main;

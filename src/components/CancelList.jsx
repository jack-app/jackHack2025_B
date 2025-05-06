import { use } from "react";
import { getCancelList } from "../api/cancel";
import CancelCard from "./CancelCard";

const cancelListAsync = getCancelList();

const CancelList = () => {
  const cancelList = use(cancelListAsync);
  return (
    <>
      {cancelList.map((item, index) => (
        <CancelCard key={index} item={item} />
      ))}
    </>
  );
};

export default CancelList;

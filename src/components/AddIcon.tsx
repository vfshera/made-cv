import React, { FC } from "react";

const AddIcon: FC<{ show: boolean; clickHandler: () => void }> = ({
  show = false,
  clickHandler,
}) => {
  return (
    <>
      {show && (
        <svg
          onClick={clickHandler}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-blue-500 cursor-pointer inline-block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
    </>
  );
};

export default AddIcon;

import React, { FC } from "react";

const DeleteIcon: FC<{ show: boolean; clickHandler: () => void }> = ({
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
          className="w-5 h-5 text-red-500 cursor-pointer inline-block "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </>
  );
};

export default DeleteIcon;

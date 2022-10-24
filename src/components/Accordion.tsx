import React, { FC } from "react";
const Icon: FC<{ id: number; open: number }> = ({ id, open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
};

const Accordion: FC<{
  title: string;
  open: number;
  current: number;
  handleClick: (id: number) => void;
  body: () => JSX.Element;
}> = ({ title, open, current, handleClick, body }) => {
  return (
    <div className="accordion flex flex-col ">
      <div
        className="accordion-header flex justify-between cursor-pointer text-gray-700"
        onClick={() => handleClick(open)}
      >
        {title} <Icon id={open} open={current} />
      </div>
      <div
        className="accordion-body"
        data-visible={open === current ? "true" : "false"}
      >
        {body()}
      </div>
    </div>
  );
};

export default Accordion;

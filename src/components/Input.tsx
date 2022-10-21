import React, { FC, Ref } from "react";

const Input: FC<{ label: string; otherProps: any }> = ({
  label,
  ...otherProps
}) => {
  return (
    <input
      type="text"
      className="px-2 py-1 rounded border border-gray-300"
      {...otherProps}
    />
  );
};

export default Input;

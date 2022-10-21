import React, { FC, useState } from "react";
import Input from "./Input";

const ListRack: FC<{ icon: any; name: string }> = ({ icon, name }) => {
  const [links, setLinks] = useState<UserLinks[]>([
    { title: "linkedin", url: "" },
    { title: "github", url: "" },
  ]);
  return (
    <section className="list-rack flex flex-col gap-2">
      <Input label="add new link" placeholder={"add new " + name} />
      {links.map((link, index) => (
        <p className=" cursor-pointer" key={index}>
          {icon} {link.title}
        </p>
      ))}

      <hr className="mt-3 bg-gray-200 " />
    </section>
  );
};

export default ListRack;

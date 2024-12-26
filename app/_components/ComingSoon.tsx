import React from "react";
import Coming from "@/public/images/comingsoon.jpg";
import Image from "next/image";
const ComingSoon = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Image
        src={Coming}
        alt="web"
        className="w-full h-full absolute top-0 left-0"
      />
    </div>
  );
};

export default ComingSoon;

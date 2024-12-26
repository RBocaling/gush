import React from "react";
import Image from "next/image";
import cloudleft from "@/public/images/cloud1.png";
import cloudRight from "@/public/images/cloud2.png";
import start from "@/public/images/star1.png";

const Cloud = () => {
  return (
    <>
      <Image
        src={start}
        alt="cloud"
        className="opacity-0 duration-[2s] neon-image animate-move-cloud absolute left-0 top-16 max-w-[100px] md:w-[140px] z-10 scale-x-[-1]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <Image
        src={cloudleft}
        alt="cloud"
        className="opacity-0 duration-[2s] neon-image animate-move-cloud absolute left-[100px] top-32 max-w-[170px] md:w-[340px] z-10 scale-x-[-1]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />

      <Image
        src={cloudRight}
        alt="cloud"
        className="opacity-0 duration-[2s] neon-image animate-move-cloud absolute right-[100px] top-10 w-[80px] md:w-[180px] z-40"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <Image
        src={cloudRight}
        alt="cloud"
        className="opacity-0 duration-[2s] neon-image animate-move-cloud absolute -right-[80px] top-32 w-[180px] md:w-[230px] z-40"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
    </>
  );
};

export default Cloud;

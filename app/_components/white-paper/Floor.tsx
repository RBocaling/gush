import React from "react";
import buildLeft1 from "@/public/images/building5.png";
import buildLeft2 from "@/public/images/building4.png";
import buildRight1 from "@/public/images/wall3.png";
import buildRight2 from "@/public/images/building6.png";
import Image from "next/image";
const Floor = () => {
  return (
    <div className="absolute bottom-0 w-full flex ">
      <div className="w-full max-w-full">
        <div className="neon-red-line"></div>
      </div>

      <div className="absolute bottom-2  right-5 flex items-end gap-5 z-10">
        <Image
          src={buildRight1}
          alt="cloud"
          className="opacity-0 duration-[2s] neon-image w-[125px] h-[50px] md:w-[250px] md:h-[70px] z-40"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <Image
          src={buildRight2}
          alt="cloud"
          className="opacity-0 duration-[2s]  w-[150px] md:w-[300px] z-40"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <Image
          src={buildLeft2}
          alt="cloud"
          className="opacity-0 duration-[2s] neon-image w-[50px] md:w-[80px] z-40"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </div>
      <div className="absolute bottom-2  left-14 flex items-end gap-5 z-10">
        <Image
          src={buildLeft1}
          alt="cloud"
          className="opacity-0 duration-[2s] w-[125px] md:w-[350px] z-40"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <Image
          src={buildLeft2}
          alt="cloud"
          className="opacity-0 duration-[2s] neon-image w-[50px] md:w-[80px] z-40"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </div>
    </div>
  );
};

export default Floor;

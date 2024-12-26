import React from "react";
import buildLeft1 from "@/public/images/building10.png";
import buildLeft2 from "@/public/images/building3.png";
import buildRight1 from "@/public/images/building1.jpg";
import buildRight2 from "@/public/images/building2.png";
import Image from "next/image";
const Floor = () => {
  return (
    <div className="absolute bottom-[-100px] w-full flex ">
      <div className="w-full max-w-full">
        <div className="neon-red-line"></div>
      </div>

      <div className="absolute bottom-2  right-14 flex items-end gap-5 z-10">
        <Image
          src={buildRight1}
          alt="cloud"
          className="w-[100px] h-[220px] md:h-auto md:w-[200px] z-40 opacity-0 duration-[2s]"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <Image
          src={buildRight2}
          alt="cloud"
          className="w-[70px] md:w-[100px] z-40 opacity-0 duration-[2s]"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </div>
      <div className="absolute bottom-2  left-14 flex items-end gap-5 z-10">
        <Image
          src={buildLeft1}
          alt="cloud"
          className="w-[100px] h-[220px] md:h-auto md:w-[150px] z-40 opacity-0 duration-[2s]"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <Image
          src={buildLeft2}
          alt="cloud"
          className="w-[100px] md:w-[120px] z-40 opacity-0 duration-[2s]"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </div>
    </div>
  );
};

export default Floor;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Left from "../../../public/arrowLeft.png";
import Right from "../../../public/arrowRight.png";

interface CountProps {
  xParam: number;
}

export default function Count({ xParam }: CountProps) {
  const [xVariable, setXVariable] = useState(xParam);

  function AddQtd() {
    setXVariable((prev) => prev + 1);
  }

  function SubQtd() {
    if (xVariable < 0 || xVariable === 0) {
      setXVariable(1);
      alert("A quantidade do produto não pode ser negativo!!");
    } else {
      setXVariable((prev) => (prev > 0 ? prev - 1 : 0));
    }
  }

  return (
    <div className="qtd gap-2 flex items-center mt-2.5">
      <button
        className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm hover:bg-[#3D3D3D] hover:border-[#3D3D3D] transition-colors duration-200"
        onClick={SubQtd}
      >
        <Image src={Left} alt="menos" className="w-2" />
      </button>

      <span>{xVariable}</span>

      <button
        className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm hover:bg-[#3D3D3D] hover:border-[#3D3D3D] transition-colors duration-200"
        onClick={AddQtd}
      >
        <Image src={Right} alt="mais" className="w-2" />
      </button>
    </div>
  );
}

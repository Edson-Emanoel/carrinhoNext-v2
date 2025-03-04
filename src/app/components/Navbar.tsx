import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-[#1D1D1D] h-15 flex items-center px-2">
      <ul className="gap-5 flex">
        <li className="px-2 py-0.5 rounded-sm hover:bg-[#3E3E3E] transition-colors duration-500">
          <Link href="/">Dashboard</Link>
        </li>
        <li className="px-2 py-0.5 rounded-sm hover:bg-[#3E3E3E] transition-colors duration-500">
          <Link href="/carrinho">Meu Carrinho</Link>
        </li>
      </ul>
    </header>
  );
}

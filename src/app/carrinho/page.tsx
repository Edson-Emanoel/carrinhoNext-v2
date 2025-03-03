import React from "react";
import Image from "next/image";
import Left from "../../../public/arrowLeft.png";
import Trash from "../../../public/trash-can.png";
import Right from "../../../public/arrowRight.png";

export default function Carrinho() {
  const products = [
    {
      id: "b2as5",
      qtd: 1,
      preco: 719.9,
      precoDesc: 467.93,
      product: "Logitech MX Master 3s",
      urlImage:
        "https://sc04.alicdn.com/kf/H01721ef9ebc64776940f8023434962abf.jpg",
    },
  ];

  return (
    <main className="items-product-list w-screen h-[calc(screen - 15)] flex flex-col items-center justify-center sm:px-2">
      <div className="w-screen md:w-200 flex items-center justify-center">
        {products.map((product) => (
          <div
            className="item-product w-[400px] md:w-[500px] flex items-center h-22 gap-2 px-4 mb-4"
            key={product.id}
          >
            <div className="flex items-center gap-5">
              <div className="imgContent bg-[#1D1D1D] w-20 h-22.5 flex items-center justify-center rounded-lg">
                <Image
                  src={product.urlImage}
                  alt={product.product}
                  width={60}
                  height={15}
                />
              </div>

              <div className="productInfo flex flex-col">
                <h2>{product.product}</h2>

                <div className="flex gap-3">
                  <span className="font-semibold">R$ {product.precoDesc}</span>
                  <span className="text-[#3d3d3d] line-through">
                    R$ {product.preco}
                  </span>
                </div>

                <div className="qtd gap-2 flex items-center mt-2.5">
                  <button className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm hover:bg-[#3D3D3D] hover:border-[#3D3D3D] transition-colors duration-200">
                    <Image src={Left} alt="menos" className="w-2" />
                  </button>

                  <span>{product.qtd}</span>

                  <button className="cursor-pointer border-3 px-2 py-1.5 border-[#1D1D1D] rounded-sm hover:bg-[#3D3D3D] hover:border-[#3D3D3D] transition-colors duration-200">
                    <Image src={Right} alt="mais" className="w-2" />
                  </button>
                </div>
              </div>
            </div>

            <button className="cursor-pointer border-3 h-10 px-3 py-1 border-[#1D1D1D] rounded-sm ml-10">
              <Image src={Trash} alt="Lixeira" className="w-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="results w-screen md:w-200 md:px-10">
        <div className="w-full h-[6px] bg-[#1E1E1E] mt-15 mb-5"></div>

        <div className="sub w-full px-5 flex justify-between">
          <span>Subtotal:</span>
          <span>R$ 1.601,57</span>
        </div>

        <div className="w-full h-[3px] bg-[#1E1E1E] mt-3 mb-5"></div>

        <div className="sub w-full px-5 flex justify-between">
          <span>Valor do Frete</span>
          <span>Gratuito</span>
        </div>

        <div className="w-full h-[3px] bg-[#1E1E1E] mt-3 mb-5"></div>

        <div className="sub w-full px-5 flex justify-between">
          <span>Valor Desconto:</span>
          <span>- R$ 374,64</span>
        </div>

        <div className="w-full h-[3px] bg-[#1E1E1E] mt-3 mb-5"></div>

        <div className="sub w-full px-5 flex justify-between">
          <span className="font-bold">Total:</span>
          <span className="font-bold">R$ 1.226,93</span>
        </div>
      </div>
    </main>
  );
}

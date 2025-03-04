import React from "react";
import Image from "next/image";
import Count from "../components/Count";
import Trash from "../../../public/trash-can.png";

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
    {
      id: "293ua",
      qtd: 2,
      preco: 800.93,
      precoDesc: 500.9,
      product: "PS3",
      urlImage:
        "https://t.ctcdn.com.br/Hm0xJUOJhK1AAp7jqkksYlfuRKw=/fit-in/600x600/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i413206.png",
    },
  ];

  return (
    <main className="items-product-list w-screen h-[calc(screen - 15)] flex flex-col items-center justify-center sm:px-2">
      <div className="w-screen md:w-200 flex flex-col items-center justify-center mt-10">
        {products.map((product) => (
          <div
            className="item-product md:w-140 flex items-center h-24 gap-2 mb-4 px-4 bg-[#242424] rounded-lg hover:scale-105 transition-all duration-200"
            key={product.id}
          >
            <div className="md:w-140 flex items-center gap-5">
              <div className="imgContent bg-[#1D1D1D] w-20 h-22.5 flex items-center justify-center rounded-lg">
                <Image
                  src={product.urlImage}
                  alt={product.product}
                  width={60}
                  height={50}
                />
              </div>

              <div className="productInfo flex flex-col">
                <h2 className="font-light">{product.product}</h2>

                <div className="flex gap-3">
                  <span className="font-semibold">R$ {product.precoDesc}</span>

                  <span className="text-[#3d3d3d] line-through">
                    R$ {product.preco}
                  </span>
                </div>

                <Count xParam={product.qtd} />
              </div>
            </div>

            <button className="cursor-pointer border-3 h-10 px-3 py-1 border-[#1D1D1D] rounded-sm ml-10 hover:bg-[#3D3D3D] hover:border-[#3D3D3D] transition-colors duration-300">
              <Image src={Trash} alt="Lixeira" className="w-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="results w-screen md:w-200 md:px-10">
        <div className="w-full h-[6px] bg-[#1E1E1E] mt-15 mb-5"></div>

        <div className="sub w-full px-5 flex justify-between">
          <span>Valor do Frete:</span>

          <span>Gratuito</span>
        </div>

        <div className="w-full h-[3px] bg-[#1E1E1E] mt-3 mb-5"></div>

        <div className="sub w-full px-5 flex justify-between">
          <span>Valor Total (Sem Desconto):</span>

          <span>
            R$
            {products
              .reduce((acc, product) => acc + product.preco, 0)
              .toFixed(2)}
          </span>
        </div>

        <div className="w-full h-[3px] bg-[#1E1E1E] mt-3 mb-5"></div>

        <div className="sub w-full px-5 flex justify-between">
          <span>Valor Desconto:</span>

          <span>
            - R$
            {products
              .reduce((acc, product) => acc + product.precoDesc, 0)
              .toFixed(2)}
          </span>
        </div>

        <div className="w-full h-[3px] bg-[#1E1E1E] mt-3 mb-5"></div>

        <div className="sub w-full px-5 flex justify-between">
          <span className="font-bold">Total(Com Desconto):</span>

          <span className="font-bold">
            R${" "}
            {products.reduce((acc, product) => acc + product.preco, 0) -
              products.reduce((acc, product) => acc + product.precoDesc, 0)}
          </span>
        </div>
      </div>
    </main>
  );
}

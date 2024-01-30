"use client";

import Image from "next/image";
import Maquina from "./components/Maquina";
import Bolas from "./components/Bolas";
import seta from "/public/seta.svg";
import seta5 from "/public/seta5.svg";
import setaTorta from "/public/setaTorta.svg";
import setaTortaCima from "/public/setaTortaCima.svg";
import { useState, useEffect, useContext } from "react";
import BolaFinal from "./components/BolaFinal";
import { GlobalContext } from "./contexts/GlobalContext";

export function aumentaMetade() {
  setTotal(total + 0.5);
}

export function aumentaInteiro() {
  setTotal(total + 1.0);
}

export function pegarLanche() {
  setTotal(total);
}

export default function Home(Props) {
  const { total, setTotal } = useContext(GlobalContext);
  const [auxiliar, setAuxiliar] = useState(0);

  aumentaMetade = () => {
    setTotal(total + 0.5);
  };

  aumentaInteiro = () => {
    setTotal(total + 1.0);
    console.log(total);
    if (total === 2) {
      setAuxiliar(1);
      setTimeout(() => {
        setTotal(0);
        setAuxiliar(0);
      }, 4000);
    }
  };

  pegarLanche = () => {
    console.log(total);
    if (total === 1.5 || total === 2) {
      setAuxiliar(1);
      setTimeout(() => {
        setTotal(0);
        setAuxiliar(0);
      }, 2000);
    }
  };

  if (total > 3) {
    setTimeout(() => {
      setTotal(0);
    }, 2000);
  }

  return (
    <div className="flex h-[screen] max-w-[1400px] justify-between items-center">
      <Maquina />
      <div className="bolas justify-center h-full w-[65%] pl-[100px] items-center">
        <div className="relative items-start w-[65%]">
          <Bolas
            numero="0"
            local={`left-[0px] ${total >= 0.0 ? "!bg-red-600" : ""}`}
          />
          <div>
            <p className="absolute left-[115px] text-white text-[20px] top-[3px]">
              0.5$
            </p>
            <Image
              className="absolute left-[105px] top-[20px]"
              src={seta}
              width={60}
              height={40}
            />
            <p className="absolute text-white text-[22px] left-[370px] top-[-60px]">
              1$
            </p>
            <Image
              className="absolute left-[270px] top-[-80px]"
              src={setaTortaCima}
              width={230}
              height={40}
            />
          </div>
          <Bolas
            numero="1"
            local={`left-[170px] ${total >= 0.5 ? "!bg-red-600" : ""}`}
          />
          <div>
            <p className="absolute left-[282px] text-white text-[22px] top-[3px]">
              0.5$
            </p>
            <Image
              className="absolute left-[275px] top-[20px]"
              src={seta}
              width={60}
              height={40}
            />
            <p className="absolute text-white text-[22px] left-[210px] top-[120px]">
              1$
            </p>
            <Image
              className="absolute left-[100px] top-[100px]"
              src={setaTorta}
              width={230}
              height={40}
            />
          </div>
          <Bolas
            numero="2"
            local={`left-[340px] ${total >= 1 ? "!bg-red-600" : ""}`}
          />
          <div>
            <p className="absolute left-[455px] text-white text-[20px] top-[3px]">
              0.5$
            </p>
            <Image
              className="absolute left-[445px] top-[20px]"
              src={seta}
              width={60}
              height={40}
            />
            <p className="absolute text-white text-[22px] left-[540px] top-[120px]">
              1$
            </p>
            <Image
              className="absolute left-[430px] top-[100px]"
              src={setaTorta}
              width={230}
              height={40}
            />
          </div>
          <Bolas
            numero="3"
            local={`left-[510px] ${total >= 1.5 ? "!bg-red-600" : ""}`}
          />
          <BolaFinal
            numero="8"
            local={`left-[510px] top-[-300px] ${
              auxiliar === 1 ? "!bg-red-600" : ""
            }`}
          />

          <Bolas
            numero="7"
            local={`left-[510px] top-[300px] ${total > 3 ? "!bg-red-600" : ""}`}
          />
          <div>
            <p className="absolute left-[625px] text-white text-[20px] top-[3px]">
              0.5$
            </p>
            <Image
              className="absolute left-[615px] top-[20px]"
              src={seta}
              width={60}
              height={40}
            />
            <p className="absolute left-[490px] text-white text-[20px] top-[-110px]">
              PEGAR
            </p>
            <Image
              className="absolute left-[480px] rotate-[91deg] top-[-100px]"
              src={seta5}
              width={160}
              height={50}
            />
            <p className="absolute text-white text-[22px] left-[715px] top-[-60px]">
              1$
            </p>
            <Image
              className="absolute left-[610px] top-[-80px]"
              src={setaTortaCima}
              width={230}
              height={40}
            />
            <p className="absolute text-white text-[22px] left-[320px] top-[220px]">
              ε
            </p>
            <Image
              className="absolute left-[50px] rotate-[27deg] top-[230px]"
              src={seta5}
              width={450}
              height={40}
            />
          </div>
          <Bolas
            numero="4"
            local={`left-[680px] ${total >= 2 ? "!bg-red-600" : ""}`}
          />
          <div>
            <p className="absolute left-[795px] text-white text-[20px] top-[3px]">
              0.5$
            </p>
            <Image
              className="absolute left-[785px] top-[20px]"
              src={seta}
              width={60}
              height={40}
            />
            <p className="absolute text-white text-[22px] left-[890px] top-[120px]">
              1$
            </p>
            <Image
              className="absolute left-[780px] top-[100px]"
              src={setaTorta}
              width={230}
              height={40}
            />

            <p className="absolute left-[645px] text-white text-[20px] top-[-130px]">
              PEGAR
            </p>
            <Image
              className="absolute left-[560px] rotate-[65deg] top-[-100px]"
              src={seta5}
              width={180}
              height={50}
            />
          </div>
          <Bolas
            numero="5"
            local={`left-[850px] ${total >= 2.5 ? "!bg-red-600" : ""}`}
          />
          <div>
            <p className="absolute left-[965px] text-white text-[20px] top-[3px]">
              0.5$
            </p>
            <Image
              className="absolute left-[955px] top-[20px]"
              src={seta}
              width={60}
              height={40}
            />
            <p className="absolute left-[700px] text-white text-[20px] top-[200px]">
              1$
            </p>
            <Image
              className="absolute left-[600px] rotate-[-45deg] top-[200px]"
              src={seta5}
              width={300}
              height={40}
            />
          </div>
          <Bolas
            numero="6"
            local={`left-[1020px] ${total === 3 ? "!bg-red-600" : ""}`}
          />
          <div>
            <p className="absolute text-white text-[22px] left-[880px] top-[-130px]">
              ε
            </p>
            <Image
              className="absolute left-[660px] rotate-[30deg] top-[-120px]"
              src={seta5}
              width={370}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

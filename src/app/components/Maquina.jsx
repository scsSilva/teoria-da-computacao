import { aumentaInteiro } from "../home.js";
import { aumentaMetade } from "../home.js";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext.jsx";
import Food from "./Food.jsx";

export default function Maquina() {
  const { total, comidas } = useContext(GlobalContext);

  return (
    <div className="w-[35%] h-screen flex items-center justify-center">
      <div className="flex justify-between items-center flex-col w-[450px] h-[800px] bg-gray-400 border-[4px] border-solid border-gray-600  ">
        <div className="w-[400px] h-[600px] bg-gray-200 m-[24px] flex items-center flex-col justify-around ">
          <ul className="w-full flex flex-row justify-around list-none items-center flex-wrap h-full">
            {comidas.map((food, index) => {
              if ((index + 1) % 3 === 0) {
                return (
                  <>
                    <li key={food.id}>
                      <Food food={food} disabled={true} />
                    </li>
                    <span className="w-full border-b-2 border-black border-solid" />
                  </>
                );
              }

              return (
                <li key={food.id}>
                  <Food food={food} disabled={true} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="px-[25px] bg-black h-[60px] rounded-md flex justify-between items-center">
          <div className="flex flex-row min-w-full">
            <button
              onClick={aumentaMetade}
              className="bg-red-600 text-white font-semibold mx-4 px-4 py-1 rounded-md"
            >
              0.5$
            </button>
            <button
              onClick={aumentaInteiro}
              className="bg-red-600 text-white font-semibold mx-4 px-4 py-1 rounded-md"
            >
              1.0$
            </button>
            <div className="bg-gray-500 mx-4 w-[120px] px-4 py-1 rounded-md text-white font-semibold text-center">
              Total: {total}$
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ff0000"
            fill-opacity="1"
            d="M0,224L20,197.3C40,171,80,117,120,85.3C160,53,200,43,240,58.7C280,75,320,117,360,160C400,203,440,245,480,218.7C520,192,560,96,600,58.7C640,21,680,43,720,90.7C760,139,800,213,840,218.7C880,224,920,160,960,144C1000,128,1040,160,1080,149.3C1120,139,1160,85,1200,90.7C1240,96,1280,160,1320,186.7C1360,213,1400,203,1420,197.3L1440,192L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

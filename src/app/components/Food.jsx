import { Check } from "lucide-react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { pegarLanche } from "../home";

export default function Food(props) {
  const { id, name, image, price } = props.food;
  const { total, comidas, setComidas } = useContext(GlobalContext);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (total === price) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [total]);

  const handleClickGetFood = () => {
    const newStateFoods = comidas.filter((food, _) => food.name != name);
    setComidas(newStateFoods);

    pegarLanche();
  };

  return (
    <div className="relative">
      <button
        disabled={disabled}
        onClick={handleClickGetFood}
        className={`absolute z-10 left-[-5px] top-[-5px] h-[32px] w-[32px] bg-white flex items-center justify-center rounded-full ${
          disabled ? "opacity-30 cursor-default" : "cursor-pointer"
        }`}
      >
        <Check color={disabled ? "#2c3e50" : "#16a085"} size={25} />
      </button>
      <Image src={image} width={100} height={100} className="opacity-40" />
    </div>
  );
}

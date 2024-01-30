export default function BolaFinal(Props) {
  return (
    <div>
      <div
        className={`absolute rounded-full bg-white w-[100px] h-[100px] flex items-center justify-center ${Props.local}`}
        style={{ border: "5px solid black", margin: "10px" }}
      >
        <p className="text-black font-bold text-[40px]">{Props.numero}</p>
      </div>
    </div>
  );
}

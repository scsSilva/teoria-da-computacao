export default function Bolas(Props) {
    return (
        <div className={`absolute rounded-full bg-white w-[100px] h-[100px] flex items-center justify-center ${Props.local}`}>
            <p className="text-black font-bold text-[40px]">{Props.numero}</p>
        </div>
    );
}

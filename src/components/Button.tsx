interface ButtonProps {
  onClick?: () => void;
  text: string;
  type?: "button" | "submit" | "reset";
  variant?: "outline" | "solid";
  color?: "primary" | "secondary" | "disabled";
}

export function Button(props: ButtonProps) {
  const { onClick, text, color, variant } = props;
  return (
    <>
      {variant == "outline" ? (
        <button className="relative block w-full mt-4">
          {/* Background overlay */}
          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-border"></span>
          {/* Button */}
          <span className="relative inline-block w-full h-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-primary-100 hover:text-gray-900">
            {text}
          </span>
        </button>
      ) : null}

      {!variant ? (
        <>
          {color == "primary" ? (
            <button
              onClick={onClick}
              type={props.type || "button"}
              className="w-full cursor-pointer transition-all bg-[#3E836B] text-slate-100  text-base font-medium px-6 py-2 rounded-lg
  border-[#25585E] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
              {text}
            </button>
          ) : null}

          {color == "secondary" ? (
            <button
              onClick={onClick}
              type={props.type || "button"}
              className="w-full cursor-pointer transition-all bg-[#8accd0] text-slate-100  text-base font-medium px-6 py-2 rounded-lg
  border-[#25585E] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
              {text}
            </button>
          ) : null}

          {color == "disabled" ? (
            <button
              type={props.type || "button"}
              className="w-full cursor-pointer transition-all bg-[#273434] text-slate-100  text-base font-medium px-6 py-2 rounded-lg
  border-[#232828] border-b-[4px]"
            >
              {text}
            </button>
          ) : null}
        </>
      ) : null}
    </>
  );
}

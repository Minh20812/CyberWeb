const ButtonTransparent = ({ name, borderColor, textColor }) => {
  return (
    <button
      className={`px-14 py-4 rounded-md border ${borderColor} justify-center items-center gap-2 `}
    >
      <span
        className={`text-center ${textColor} text-base font-medium font-inter leading-normal`}
      >
        {name}
      </span>
    </button>
  );
};

export default ButtonTransparent;

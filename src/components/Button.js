const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="ml-2 h-8 min-w-[110px] rounded-lg bg-orange-400 px-4 text-slate-800"
    >
      {children}
    </button>
  );
};
export default Button;

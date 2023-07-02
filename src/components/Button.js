const Button = ({ children }) => {
  return (
    <button className="ml-2 h-8 min-w-[100px] rounded-lg bg-orange-400 px-4">
      {children}
    </button>
  );
};
export default Button;

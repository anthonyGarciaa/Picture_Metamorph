const BurgerButton = ({active, isOpen, onClick}) => (
    <button className="burger z-50 fixed h-20 w-10 flex-col justify-around text-secondary-100" onClick={onClick}>
    <div className="sr-only">{isOpen ? "Close menu" : "Open menu"}</div>
    <div
      className={`relative h-1 w-10  bg-primary-900 transition duration-300 ease-in-out ${
        isOpen ? "-rotate-20 w-6" : "-translate-y-1.5"
      }`}
    />
    <div
      className={`relative h-1 w-10 bg-primary-900 transition duration-300 ease-in-out`}
    />
    <div
      className={`relative h-1 w-10 bg-primary-900 transition duration-300 ease-in-out ${
        isOpen ? "rotate-20 w-6" : "translate-y-1.5"
      }`}
    />
  </button>
  );

  export default BurgerButton
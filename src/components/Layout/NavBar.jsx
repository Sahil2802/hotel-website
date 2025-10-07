const NavBar = () => {
  return (
    <nav className="fixed w-full p-4">
      <ul className="top-0 left-0 flex justify-around items-center uppercase text-sm w-full">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="text-center playfair-display-bold font-bold text-3xl normal-case cursor-pointer">
          Haven
          <p className="font-normal font-sans text-xs  uppercase tracking-[0.3em]">
            Hotel & Resort
          </p>
        </li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;

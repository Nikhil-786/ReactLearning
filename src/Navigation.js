const NavLayout = () => {
    return (
      <header>
        <div className="navItems">
          <div className="logo">
            <img
              src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
              alt=""
            />{" "}
          </div>
          <ul>
            <li>Home</li>
            <li>AboutUs</li>
            <li>ContactUs</li>
            <li>Cart</li>
          </ul>
        </div>
      </header>
    );
  };

  export default NavLayout;
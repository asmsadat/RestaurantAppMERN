import { useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(false);

  return (
    <nav>
        <div className="logo">Foodie</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>

        </div>
    </nav>
  )
}

export default Navbar
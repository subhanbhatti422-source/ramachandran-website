import { useRef } from "react";
import gsap from "gsap";

function Navbar() {
  const menuRef = useRef(null);

  const openMenu = () => {
  console.log("clicked");
  
  gsap.to(menuRef.current, {
    right: 0,
    duration: 0.5,
  });
};

  const closeMenu = () => {
    gsap.to(menuRef.current, {
      right: "-80%",
      duration: 0.5,
      ease: "power3.in",
    });
  };

  return (
    <>
     <div className="hamburger" onClick={openMenu}>
  ☰
</div>

<div ref={menuRef} id="menu">
  <button onClick={closeMenu}>✕</button>

  <h4>Home</h4>
  <h4>About</h4>
  <h4>Contact</h4>
</div>
    </>
  );
}

export default Navbar;
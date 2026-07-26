import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

const Contact = () => {
  <Navbar/>
  const navigate = useNavigate();

  
  useEffect(() => {
    navigate("/");

    setTimeout(() => {
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  }, [navigate]);

  return null;
};

export default Contact;
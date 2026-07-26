import "./Resume.css";
import resumeImg from "../../../assets/images/aL2aZcglZ3qnmxm9bb2DBaHvIS8.avif";
import Navbar from "../../Navbar/Navbar";
function Resume() {
  
  return (
    <>

    <Navbar/>
    <div id="resume">
      <img src={resumeImg} alt="" />
    </div>
    </>
  
  )
}

export default Resume
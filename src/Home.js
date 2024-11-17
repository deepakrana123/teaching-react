import React from "react";
import { Link, useNavigate } from "react-router-dom";
// httpClient , naviagtion, remix
// client side rendering , server side rendering
// apki file index.html compress build , yeh load , jab pureley user system , tab kch dikega , but if agr load hojati , to user can interact present inside the index.html
// csr first load tough , optimization technique first load accha ho jaye to apka ban , seo
// ssr yeh first load , user type kch usko utni hi information , but costly 
//  m aya m interact m tab , phir interact reload phir page naya , jab jab m aya tab tab mera page naya bana , usse kiya hoga ki bar bar api hit , costly , serverless acrticture , system kitni hit le sakta
 

const Home = () => {
  const naviagte=useNavigate()
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2px",
      }}
    >
      <button
        style={{
          width: "100%",
          backgroundColor: "blue",
          color: "white",
        }}
        onClick={()=>naviagte("/ranjan")}
      >
        Ranjan
      </button>
      <button
        style={{
          width: "100%",
          backgroundColor: "blue",
          color: "white",
        }}
        onClick={()=>naviagte("/devendra/123456")}
      >
        Devendar
      </button>
      <button
        style={{
          width: "100%",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        <Link to="/loanApplication">Loan Application</Link>
      </button>
      <button
        style={{
          width: "100%",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default Home;

"use client";
import "../../app/style/style.css";
import { Button } from "react-bootstrap";

const buttonStyle = {
    outline: 'none',
    borderRadius: '10px',
    display: 'flex',
    width: '64px',
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    border: '1px solid rgba(183, 187, 203, 0.5)',
    background: 'linear-gradient(138deg, #1d222e 0%, #293140 100%)',
  };

  const footerStyle={
    display:'flex',
    with: '100%',
    justifyContent: 'center',
  }
const FooterHome = () =>{
    return(
        <footer style={footerStyle}>
            <button style={buttonStyle}>123</button>
        </footer>
    )
}
export default FooterHome;
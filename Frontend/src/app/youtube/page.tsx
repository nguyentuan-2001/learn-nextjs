"use client";

import Table from "react-bootstrap/Table";
import Container from 'react-bootstrap/Container';
import { useRouter } from "next/navigation";

const Test = () => {
  const router = useRouter();

  const handleButton = () => {
    router.push("/");
  };

  return (
    
      <div>

        <button onClick={() => handleButton()}>Alert youtube</button>
      </div>
    
  );
};
export default Test;

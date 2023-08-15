"use client";

import Table from "react-bootstrap/Table";
import Container from 'react-bootstrap/Container';
import { useRouter } from "next/navigation";
import React from "react";

const Test = () => {
  const router = useRouter();

  const handleButton = () => {
    router.push("/");
  };

  return (
    
      <div>

        <button onClick={() => handleButton()}>Alert</button>
      </div>
    
  );
};
export default Test;

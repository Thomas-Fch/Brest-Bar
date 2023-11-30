"use client"
import React, { useEffect, useState, useContext  } from 'react';
import MenuDesktop from "@/components/MenuDesktop/MenuDesktop";
import Nav from "@/components/Navbar/Navbar";
import ContextProvider from "../src/components/Context/ContexteProvider"


export default function App() {


  return (
    <main>
      <ContextProvider >
        <Nav />
        <MenuDesktop />
      </ContextProvider>
    </main>
  );
}

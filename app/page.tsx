// import BarList from "@/components/BarsList";
"use client"
import React, { useEffect, useState } from 'react';
import MenuDesktop from "@/components/MenuDesktop/MenuDesktop";
import Nav from "@/components/Navbar/Navbar";

async function getBars() {
  const res = await fetch('https://api.brest.bar/items/bars');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default function App() {
  const [bars, setBars] = useState([]);
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBars();
        const barsData = response.data;
        setBars(barsData);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);  

  if (isLoading) return <p>Chargement...</p>
  if (!bars) return <p>Aucune données</p>


  return (
    <main>
      <Nav />
      <MenuDesktop  data={bars}/>
      {/* <BarList/> */}
    </main>
  );
}

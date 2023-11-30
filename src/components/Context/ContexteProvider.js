import React, { useEffect, useState } from "react";
import MyContext from "./Context";

async function getBars() {
  const res = await fetch("https://api.brest.bar/items/bars");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const ContextProvider = ({ children }) => {
  const [bars, setBars] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await getBars();
        const barsData = response.data;

        if (isMounted) {
          setBars((prevBars) => [...prevBars, ...barsData]);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);
  console.log(bars, "CONTEXTE3");
  return <MyContext.Provider value={{ bars, isLoading }}>{children}</MyContext.Provider>;
};

export default ContextProvider;

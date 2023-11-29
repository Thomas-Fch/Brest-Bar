import Image from 'next/image';
import { categories } from "../../constants/index";
import { useState } from 'react';

export default function CategoryCard() {
  const [active, setActive] = useState(null);

  const handleSelected = (index:any) => {
    setActive((prevIndex) => {
      const newIndex = prevIndex === index ? null : index;
      return newIndex;
    });
  };

  return (
    <>
      {categories.map((data, index) => (
        <button
          type='button'
          className='CategoryCard'
          key={data.name}
          onClick={() => handleSelected(index)}
        >
          <Image
            alt={data.alt}
            src={data.img}
            style={{
              width: '90%',
              height: 'auto',
              padding: '1.25rem',
              borderRadius: '10px',
              backgroundColor: active === index ? '#C110C7' : '#2C2C2C',
            }}
          />
          <p style={{ color: active === index ? "#7D47AE" : "" }}>{data.name}</p>
        </button>
      ))}
    </>
  );
}

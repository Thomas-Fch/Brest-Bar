import { useContext } from 'react';
import "./_barsList.scss";
import Image from 'next/image';
import Shoes from "../../assets/Shoes.svg"
import MyContext from '../Context/Context';

export default function BarsCardDesktop() {

let {bars, isLoading} = useContext(MyContext);

if (isLoading) return <p>Chargement...</p>;

  return (
    <>
      {bars && bars.length > 0 ?bars.map((data: any) => {
        const addressParts = data.address.split(',');
        const streetName = addressParts[0];

        return (
          <div key={data.id} className='barsCard'>
            <h4 className="category">{data.category[0]}</h4>
            <div className='nameTag'>
              <h4>{data.name}</h4>
              <span
                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700 dark:bg-purple-700 dark:text-purple-100"
              >
                Live
              </span>
            </div>
            <div className="posStreet">
              <Image
                alt="chaussure"
                src={Shoes}
                style={{
                  width: '20px',
                  height: 'auto',
                }}
              />
              <p>&nbsp;
                <strong>A xxKM -</strong> &nbsp;
                {streetName}
              </p>
            </div>
            <div className="tags">
<span>tag</span>
<span>tag</span>
<span>tag</span>
            </div>
          </div>
        );
      }): {isLoading}}
    </>
  );
}
  
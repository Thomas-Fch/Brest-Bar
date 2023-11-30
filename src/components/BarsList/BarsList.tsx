import BarsCardDesktop from "./BarsCardDesktop";
import Image from 'next/image';
import Pen from '../../assets/Pen.svg'
import "./_barsList.scss";

export default function BarList({bars}:any) {
  const handleClick = ()=>{
    console.log("BUTTON FILTER")
  }

  return (
    <section className="barList">
      <div className="titleButton">

              <h3>Explorer</h3>
              <div className="btn btn1">

              <div className="inner">

              <button type="button" onClick={handleClick} >
                <Image
                                alt="Crayon"
                                src={Pen}
                                style={{
                                  width: '15px',
                                  height: 'auto',
                                }}/>Filtrer</button>
              </div>
              </div>
      </div>
              <BarsCardDesktop bars={bars}/>
    </section>
  );
}

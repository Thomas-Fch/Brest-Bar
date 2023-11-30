import BarsCardDesktop from "./BarsCardDesktop";
import "./_barsList.scss";

export default function BarList({bars}:any) {

  return (
    <section className="barList">
      <div className="titleButton">

              <h3>Explorer</h3>
              <button type="button"className="filterButton">Filtrer</button>
      </div>
              <BarsCardDesktop bars={bars}/>
    </section>
  );
}

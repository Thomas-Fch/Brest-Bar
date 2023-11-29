export default async function getBars() {
    const res = await fetch('https://api.brest.bar/items/bars');
    const data = await res.json();
    return data?.url as any[];
  }
  
export function Info({ bars }: any) {
  const { id, name, address } = bars || {};
  return (
    <div>
      <p>{name}</p>
      <p>{address}</p>
    </div>
  );
}



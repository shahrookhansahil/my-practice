function Item({ name, isPacked }) {
  //#     Logical AND operator (&&)
  return (
    <li className="item">
      {name} {isPacked && "✔"}
    </li>
  );

  //#Ternary Operator
  // return <li className="item">{isPacked ? <del>{name + " ✔"}</del> : name}</li>;

  //#  if /else
  //   if (isPacked) {
  //     return <li className="item">{name} ✔</li>;
  //   }
  //   return null;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={false} name="Helmet with a golden leaf" />
        <Item isPacked={true} name="Photo of Tam" />
      </ul>
    </section>
  );
}

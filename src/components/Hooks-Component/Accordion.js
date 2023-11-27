import { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(true);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <MyTag
        title="About"
        isActive={activeIndex === false}
        onShow={() => setActiveIndex(false)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </MyTag>
      <MyTag
        title="Etymology"
        isActive={activeIndex === true}
        onShow={() => setActiveIndex(true)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </MyTag>
    </>
  );
}

function MyTag({ title, children, isActive, onShow }) {
  return (
    <section className="MyTag">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}

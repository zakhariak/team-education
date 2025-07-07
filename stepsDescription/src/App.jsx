import { useEffect, useState } from "react";
import "./App.css";
import { useDescriptionTooltips } from "./useDescriptionTooltips";

const list = [
  {
    id: "nav_with_desc",
    label: "",
    description: "",
  },
  {
    id: "head_with_desc",
    label: "",
    description: "",
  },
  {
    id: "button_wddddddasddith_desc",
    label: "",
    description: "",
  },
  {
    id: "name_with_desc",
    label: "",
    description: "",
  },
  {
    id: "email_with_desc",
    label: "",
    description: "",
  },
  {
    id: "button_with_desc",
    label: "",
    description: "",
  },
  {
    id: "button_wddddddith_desc",
    label: "",
    description: "",
  },
];

function App() {
  const [tooltipData, setTooltipData] = useState([]);
  const elements = useDescriptionTooltips(list.map((item) => item.id));

  useEffect(() => {
    setTooltipData(
      list.flatMap((configItem, index) => {
        if (elements[index]) {
          return { ...configItem, element: elements[index] };
        }
        return [];
      })
    );
  }, [elements]);

  console.log(tooltipData);

  return (
    <>
      <header>
        <h1>Three words</h1>
        <nav id="nav_with_desc">
          <a>one word</a>
          <a>one word</a>
          <a>one word</a>
          <a>one word</a>
        </nav>
      </header>
      <main>
        <header id="head_with_desc">
          <h1>five words</h1>
        </header>
        <section>
          <h2>three words</h2>
          <p>forty-six words</p>
          <p>forty-four words</p>
          <label id="name_with_desc">
            Name
            <input type="text" />
          </label>
          <label id="email_with_desc">
            Email
            <input type="text" />
          </label>
        </section>
        <section>
          <h2>seven words</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            vel quos reprehenderit ullam minus debitis saepe vero impedit
            nesciunt aliquid culpa, recusandae numquam reiciendis suscipit
            distinctio. Placeat natus voluptate atque!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
            repudiandae corrupti, beatae voluptatem neque magni, cum, facere
            dolorem eveniet labore dolor voluptatibus omnis placeat explicabo.
            Laborum, voluptas. Quisquam, labore iure!
          </p>
          <button className="button" id="button_with_desc">
            Complete
          </button>
        </section>
      </main>
      <footer>
        <p>five words</p>
      </footer>
    </>
  );
}

export default App;

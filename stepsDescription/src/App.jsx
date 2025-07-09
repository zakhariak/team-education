import { useEffect, useState } from "react";
import { useDescriptionTooltips } from "./useDescriptionTooltips";
import { TooltipModal } from "./components/Modal";
import styles from "./App.module.css";
import { data } from "./assets/data";

const list = [
  {
    id: "nav_with_desc",
    label: "Navigation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quis sequi sint excepturi hic. Adipisci hic, unde, architecto optio quia quos pariatur maiores quisquam dolores mollitia reiciendis distinctio culpa ea.",
  },
  {
    id: "head_with_desc",
    label: "Header",
    description: "Some text",
  },
  {
    id: "button_wddddddasddith_desc",
    label: "",
    description: "Some text",
  },
  {
    id: "name_with_desc",
    label: "Name input",
    description: "Some text",
  },
  {
    id: "email_with_desc",
    label: "Email input",
    description: "Some text",
  },
  {
    id: "button_with_desc",
    label: "Button",
    description: "Some text",
  },
  {
    id: "button_wddddddith_desc",
    label: "",
    description: "Some text",
  },
];

function App() {
  const [tooltipData, setTooltipData] = useState([]);
  const [activeElementIndex, setActiveElementIndex] = useState(0);
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

  const updateActiveElement = (direction) => {
    switch (direction) {
      case "next":
        setActiveElementIndex((prevState) => prevState + 1);
        break;

      case "prev":
        setActiveElementIndex((prevState) => prevState - 1);
        break;

      case "skip":
        setActiveElementIndex(undefined);
        break;

      default:
        break;
    }
  };

  console.log(tooltipData);

  return (
    <>
      <TooltipModal
        activeElement={tooltipData[activeElementIndex]}
        onNextStepClick={() => updateActiveElement("next")}
        onPrevStepClick={() => updateActiveElement("prev")}
        onSkipStepClick={() => updateActiveElement("skip")}
        elementIndex={activeElementIndex}
        maxIndex={tooltipData.length}
      />
      <header className={styles.header}>
        <h1 className={styles.logo}>Logo</h1>
        <nav className={styles.nav} id="nav_with_desc">
          <a>Home</a>
          <a>About</a>
          <a>Сareer</a>
          <a>Contacts</a>
        </nav>
        <button className={styles.support_button}>Support</button>
      </header>
      <main>
        <header className={styles.main_header} id="head_with_desc">
          <h1>Home</h1>
        </header>

        <section className={styles.info_section}>
          <h2>{data.infoData.title}</h2>
          <p>{data.infoData.description}</p>
          <button className={styles.info_button} id="button_with_desc">
            About Us
          </button>
        </section>

        <div className={styles.middle_container}>
          <section className={styles.card_section}>
            {data.cardData.map((item) => {
              return (
                <div className={styles.card}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </section>

          <section className={styles.form_container}>
            <form className={styles.form} action="#">
              <h2>Contact us</h2>
              <div className={styles.form_inputs}>
                <div className={styles.form_group}>
                  <label id="name_with_desc" for="firstName">
                    Name
                  </label>
                  <input
                    className={styles.form_input}
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                  />
                </div>
                <div className={styles.form_group}>
                  <label for="lastName">Surname</label>
                  <input
                    className={styles.form_input}
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                  />
                </div>
                <div className={styles.form_group}>
                  <label for="phone">Phone number</label>
                  <input
                    className={styles.form_input}
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                  />
                </div>
                <div className={styles.form_group}>
                  <label id="email_with_desc" for="email">
                    Email address
                  </label>
                  <input
                    className={styles.form_input}
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <button
                id="button_with_desc"
                className={styles.form_button}
                type="submit"
              >
                Submit
              </button>
            </form>
          </section>
        </div>
      </main>
      <footer className={styles.footer}>
        <h2>{data.footerData.title}</h2>
        <p>{data.footerData.description}</p>
      </footer>
    </>
  );
}

export default App;

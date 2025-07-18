import { useEffect, useMemo, useState } from "react";
import { useDescriptionTooltips } from "./hooks/useDescriptionTooltips";
import { TooltipModal } from "./components/Modal";
import styles from "./App.module.css";
import { DescriptionDataProvider } from "./dataProviders";

const activeElementStyles = "1px solid red";

function App() {
  const [tooltipInitialData, setTooltipInitialData] = useState([]);
  const [infoData, setInfoData] = useState(null);
  const [footerData, setFooterData] = useState(null);
  const [cardData, setCardData] = useState(null);
  const [tooltipData, setTooltipData] = useState([]);
  const [activeElementIndex, setActiveElementIndex] = useState(null);

  useEffect(() => {
    const fetchToolTipData = async () => {
      const [
        tooltipDataList,
        infoDataResponse,
        footerDataResponse,
        cardDataResponse,
      ] = await Promise.all([
        DescriptionDataProvider.getTooltipData(),
        DescriptionDataProvider.getInfoData(),
        DescriptionDataProvider.getFooterData(),
        DescriptionDataProvider.getDescriptionList(),
      ]);
      setTooltipInitialData(tooltipDataList);
      setInfoData(infoDataResponse);
      setFooterData(footerDataResponse);
      setCardData(cardDataResponse);
    };

    fetchToolTipData();
  }, []);

  const idList = useMemo(() => {
    return tooltipInitialData.map((item) => item.id);
  }, [tooltipInitialData]);

  const elements = useDescriptionTooltips(idList);

  useEffect(() => {
    setTooltipData(
      tooltipInitialData.flatMap((configItem, index) => {
        if (elements[index]) {
          return { ...configItem, element: elements[index] };
        }
        return [];
      })
    );
  }, [elements]);

  useEffect(() => {
    if (tooltipData.length) {
      setActiveElementIndex(0);
      tooltipData[0].element.style.outline = activeElementStyles;
    }
  }, [tooltipData]);

  const updateActiveElement = (direction) => {
    switch (direction) {
      case "next":
        setActiveElementIndex((prevState) => {
          const newIndex = prevState + 1;
          tooltipData[prevState].element.style.outline = "none";
          if (tooltipData[newIndex]) {
            tooltipData[newIndex].element.style.outline = activeElementStyles;
            setTimeout(() => {
              tooltipData[newIndex].element.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "nearest",
              });
            }, 100);
          }

          return newIndex;
        });
        break;

      case "prev":
        setActiveElementIndex((prevState) => {
          const newIndex = prevState - 1;
          tooltipData[prevState].element.style.outline = "none";
          tooltipData[newIndex].element.style.outline = activeElementStyles;
          setTimeout(() => {
            tooltipData[newIndex].element.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "nearest",
            });
          }, 100);

          return newIndex;
        });
        break;

      case "skip":
        setActiveElementIndex((prevState) => {
          tooltipData[prevState].element.style.outline = "none";
          return undefined;
        });
        break;

      default:
        break;
    }
  };

  const bodyContent = tooltipData[activeElementIndex] ? (
    <div>
      <h2>{tooltipData[activeElementIndex].label}</h2>
      <p>{tooltipData[activeElementIndex].description}</p>
    </div>
  ) : null;

  const tooltipModalConfig = {
    nextButton: {
      style: { backgroundColor: "red" },
      onClick: () => updateActiveElement("next"),
    },
    prevButton: {
      onClick: () => updateActiveElement("prev"),
    },
    skipButton: {
      onClick: () => updateActiveElement("skip"),
      onMouseEnter: () => console.log("work"),
    },
    mainContainer: { style: { backgroundColor: "grey" } },
  };

  return (
    <>
      <TooltipModal
        activeElement={tooltipData[activeElementIndex]}
        elementIndex={activeElementIndex}
        maxIndex={tooltipData.length}
        bodyContent={bodyContent}
        config={tooltipModalConfig}
      />
      <header className={styles.header}>
        <h1 className={styles.logo}>Logo</h1>
        <nav className={styles.nav} id="nav_with_desc">
          <a>Home</a>
          <a>About</a>
          <a>Сareer</a>
          <a>Contacts</a>
        </nav>
        <button id="support_button_with_desc" className={styles.support_button}>
          Support
        </button>
      </header>
      <main>
        <header className={styles.main_header} id="head_with_desc">
          <h1>Home</h1>
        </header>

        <section className={styles.info_section}>
          {infoData ? (
            <>
              <h2>{infoData.title}</h2>
              <p>{infoData.description}</p>
            </>
          ) : (
            <h1>Loading...</h1>
          )}

          <button className={styles.info_button} id="button_with_desc">
            About Us
          </button>
        </section>

        <div className={styles.middle_container}>
          <section className={styles.card_section}>
            {cardData ? (
              cardData?.map((item) => {
                return (
                  <div key={item.title} className={styles.card}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                );
              })
            ) : (
              <h1>Loading...</h1>
            )}
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
        {footerData ? (
          <>
            <h2>{footerData?.title}</h2>
            <p>{footerData?.description}</p>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </footer>
    </>
  );
}

export default App;

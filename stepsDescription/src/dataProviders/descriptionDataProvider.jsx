export const data = {
  tolltipData: [
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
      id: "support_button_with_desc",
      label: "Support",
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
  ],
  cardData: [
    {
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores quos deserunt assumenda, deleniti natus voluptatem blanditiis eveniet similique totam quaerat. Obcaecati architecto natus impedit! Quod delectus autem quo rerum architecto.",
    },
    {
      title: "Title 2",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores quos deserunt assumenda, deleniti natus voluptatem blanditiis eveniet similique totam quaerat. Obcaecati architecto natus impedit! Quod delectus autem quo rerum architecto.",
    },
    {
      title: "Title 3",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores quos deserunt assumenda, deleniti natus voluptatem blanditiis eveniet similique totam quaerat. Obcaecati architecto natus impedit! Quod delectus autem quo rerum architecto.",
    },
    {
      title: "Title 4",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores quos deserunt assumenda, deleniti natus voluptatem blanditiis eveniet similique totam quaerat. Obcaecati architecto natus impedit! Quod delectus autem quo rerum architecto.",
    },
  ],
  infoData: {
    title: "Some text about us",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur  vel quos reprehenderit ullam minus debitis saepe vero impedit  nesciunt aliquid culpa, recusandae numquam reiciendis suscipit  distinctio. Placeat natus voluptate atque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita recusandae ratione eveniet distinctio. Non illum eveniet modi error consequatur ex quia odio, facere repudiandae, quo consectetur omnis molestias facilis iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reiciendis suscipit illum? Veniam rem, mollitia quia maiores culpa quae ipsa facilis accusantium recusandae quam qui error saepe rerum assumenda alias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vero non labore nostrum. Repellendus aperiam doloremque harum amet. Veritatis repellendus fuga rerum consectetur earum cum quos asperiores illo voluptatibus omnis?",
  },
  footerData: {
    title: "Some footer text",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur  vel quos reprehenderit ullam minus debitis saepe vero impedit  nesciunt aliquid culpa, recusandae numquam reiciendis suscipit  distinctio. Placeat natus voluptate atque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita recusandae ratione eveniet distinctio. Non illum eveniet modi error consequatur ex quia odio, facere repudiandae, quo consectetur omnis molestias facilis iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reiciendis suscipit illum? Veniam rem, mollitia quia maiores culpa quae ipsa facilis accusantium recusandae quam qui error saepe rerum assumenda alias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vero non labore nostrum. Repellendus aperiam doloremque harum amet. Veritatis repellendus fuga rerum consectetur earum cum quos asperiores illo voluptatibus omnis?",
  },
};

function getRandomTime(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class DescriptionDataProvider {
  getTooltipData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.tolltipData);
      }, getRandomTime(300, 1500));
    });
  };
  getDescriptionList = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.cardData);
      }, getRandomTime(300, 1500));
    });
  };
  getInfoData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.infoData);
      }, getRandomTime(300, 1500));
    });
  };
  getFooterData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.footerData);
      }, getRandomTime(300, 1500));
    });
  };
}

export default new DescriptionDataProvider();

import StickerList from "../stickerList";

const data = [
  { author: "Tom", content: "Feed Fish", date: 1749026366869 },
  { author: "Bob", content: "Feed Dog", date: 1749026366869 },
  { author: "Jack", content: "Clean House", date: 1749026366869 },
  { author: "Vitaliy", content: "Wash the dishes", date: 1749026366869 },
  { author: "Pedro", content: "Take a rest", date: 1749026366869 },
];

const Dashboard = () => {
  return (
    <div>
      <h1>TODO Dashboard</h1>
      <StickerList data={data} />
    </div>
  );
};

export default Dashboard;
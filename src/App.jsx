import Solution from "./Components/Solution";
function App() {
  const menu = [
    {
      title: "Home",
    },
    {
      title: "Services",
      subItems: ["Cooking", "Cleaning"],
    },
    {
      title: "Contact",
      subItems: ["Phone", "Mail"],
    },
  ];
  return (
    <>
      <Solution menu={menu} />
    </>
  );
}

export default App;

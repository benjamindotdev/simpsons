import "./App.css";
import Avatar from "./components/Avatar";

function App() {
  const simpsons = [
    {
      id: 1,
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
      firstName: "Homer",
      lastName: "Simpson",
    },
    {
      id: 2,
      image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
      firstName: "Marge",
      lastName: "Simpson",
    },
    {
      id: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
      firstName: "Bart",
      lastName: "Simpson",
    },
    {
      id: 4,
      image: "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png",
      firstName: "Lisa",
      lastName: "Simpson",
    },
    {
      id: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/220px-Maggie_Simpson.png",
      firstName: "Maggie",
      lastName: "Simpson",
    },
  ];

  return (
    <div className="container">
      {simpsons.map((simpson) => (
        <Avatar key={simpson.id} {...simpson} />
      ))}
    </div>
  );
}

export default App;

import "./App.css";
import Avatar from "./components/Avatar";

function App() {
  const simpsons = [
    {
      id: 1,
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
      hoverImage:
        "https://giphy.com/gifs/the-simpsons-scared-homer-simpson-jUwpNzg9IcyrK",
      firstName: "Homer",
      lastName: "Simpson",
    },
    {
      id: 2,
      image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
      hoverImage:
        "https://giphy.com/gifs/the-simpsons-treehouse-of-horror-ess3aimXqHfyw",
      firstName: "Marge",
      lastName: "Simpson",
    },
    {
      id: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
      hoverImage: "https://giphy.com/gifs/the-simpsons-snow-cold-EzhYp5ZQXomLm",
      firstName: "Bart",
      lastName: "Simpson",
    },
    {
      id: 4,
      image: "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png",
      hoverImage: "https://giphy.com/embed/45O9F2aiLOZXy",
      firstName: "Lisa",
      lastName: "Simpson",
    },
    {
      id: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/220px-Maggie_Simpson.png",
      hoverImage: "https://giphy.com/gifs/the-simpsons-cdZPn0rqZYd9K",
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

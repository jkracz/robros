import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then((users) => {
      setRobots(users);
    });
  }, []);

  const filteredRobots = robots.filter((robots) => {
    return robots.name
      .toLowerCase()
      .includes(searchfield.toLowerCase());
  });

  return (
    <div className="tc">
    <h1 className="f1">RoBros</h1>
    <SearchBox searchChange={(event) => setSearchfield(event.target.value)} />
    <Scroll>
      <ErrorBoundary>
        <CardList robots={filteredRobots} />
      </ErrorBoundary>
    </Scroll>
  </div>
  );
}

export default App;

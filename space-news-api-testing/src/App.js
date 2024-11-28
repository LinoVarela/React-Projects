import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/") // get data
      .then((response) => response.json()) // wait to get the answer (answer as json)
      .then((data) => {
        setNewsList(data.results || []); // Access the array of articles
      });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="App">
      <div className="title"></div>
      <h1>Space News</h1>
      <div className="newsContainer">
        {newsList.map((val, key) => {
          return <div key={key} className='article' onClick={()=>{window.location.href = val.url}}>
              <h3>{val.title}</h3>
              <img src={val.image_url} alt={val.title} ></img>
              <p>{val.summary}</p>
              <h4>{val.published_at}</h4>
            </div>; // Display article title
        })}
      </div>
    </div>
  );
}

export default App;

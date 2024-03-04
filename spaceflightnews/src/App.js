import './App.css';
import Card from './Card';
import Axios from "axios"
import React from 'react';

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [news, setNews] = React.useState([]);
  const [resp, setResp] = React.useState();
  const [url, setUrl] = React.useState("https://api.spaceflightnewsapi.net/v4/articles/");

  const handleChange = event => {
    setSearchTerm(event.target.value);
    setQuery(`?search=${searchTerm}`)
  };

  const handleNext = function (){
    if(resp.next===null){
      setUrl(url);
    } else{
      setUrl(resp.next);
    }  }
  const handlePrevious = function(){
    if(resp.previous===null){
      setUrl(url);
    } else{
      setUrl(resp.previous);
    }
  }

  const handleNewest = event =>{
    setQuery('?ordering="published_at"');
  }

  const handleOldest = event =>{
    setQuery('?ordering="published_at"');
  }
  

React.useEffect(() => {
    Axios.get(`${url}${query}`)
      .then((r) => {
        setResp(r.data);
        setNews(r.data.results);
      })
  }, [url,query]);



  return (
    <div className="App">
      <header className="App-header">
        <h1>Space Party</h1>
      </header>

      <main>
        <input type="text" placeholder="search" value={searchTerm}
          onChange={handleChange} />

        <a href="#" id="previous" onClick={handlePrevious} className="previous round">&#8249;</a>
        <a href="#" id="next" onClick={handleNext} className="next round">&#8250;</a>

        <button id="newest" onClick={handleNewest}>Newest</button>
        <button id="oldest" onClick={handleOldest}>Oldest</button>
        
        {news
          .map((element) => (
            <Card
              key={element.id}
              title={element.title}
              imgSrc={element.image_url}
              summary={element.summary}
              url={element.url}
            />
          ))
        }
      </main>
      <footer>
        by Marta Trincão
      </footer>
    </div>
  );
}

export default App;

import './App.css';
import Card from './Card';
import Axios from "axios"
import React from 'react';
import SearchBar from './Navigation/Search';
import Pagination from './Navigation/Pagination';
import Ordering from './Navigation/Ordering';

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [news, setNews] = React.useState([]);
  const [resp, setResp] = React.useState();
  const [url, setUrl] = React.useState("https://api.spaceflightnewsapi.net/v4/articles/");

  React.useEffect(() => {
    Axios.get(`${url}${query}`)
      .then((r) => {
        setResp(r.data);
        setNews(r.data.results);
      })
  }, [url, query]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Space Party</h1>
      </header>

      <main>
       <SearchBar
       searchTerm={searchTerm}
       setSearchTerm={setSearchTerm}
       setQuery={setQuery}
       /> 

       <Pagination
       resp={resp}
       url={url}
       setUrl={setUrl}
       />

       <Ordering
       setQuery={setQuery}
       />

       <div id="newslist">
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
        </div>
      </main>
      <footer>
        by Marta Trincão
      </footer>
    </div>
  );
}

export default App;

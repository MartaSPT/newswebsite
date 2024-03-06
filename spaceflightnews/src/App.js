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
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  React.useEffect(() => {
    Axios.get(`${url}${query}`)
      .then((r) => {
        setResp(r.data);
        setNews(r.data.results);
      })
  }, [url, query]);

  return (
    <div className="App">
      <div class="form-check">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleTheme}/>
          <label class="form-check-label" for="flexSwitchCheckDefault">Dark Theme</label>
        </div>
      <header className="App-header">
        <h1>Space Party</h1>
      </header>

      <main
        style={{
          backgroundColor: theme === "light" ? "white" : "#282c34"
        }}
      >
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

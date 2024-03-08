import './App.css';
import Card from './Card';
//import Axios from "axios"
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
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  React.useEffect(() => {
      async function fetchData() {
      try{  
        setIsLoading(true);
        const data = await fetch(`${url}${query}`);
        const json = await data.json();
        setResp(json);
        setNews(json.results);
      } catch (error) {
        setError(error);
      } finally {
       setIsLoading(false);
      }
    }
    fetchData();
  }, [url, query]);

  return (
    <div className="App">
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={toggleTheme} />
        <label className="form-check-label" htmlFor="flexRadioDefault1">Dark Theme</label>
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
          {isLoading ? <p>Loading...</p> : null}

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

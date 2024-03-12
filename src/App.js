import './App.css';
import Card from './Card';
import React from 'react';
import SearchBar from './Navigation/Search';
import Pagination from './Navigation/Pagination';
import Ordering from './Navigation/Ordering';
import Navbar from './Navigation/Navbar';
import imageLoading from './resources/loading_img.png';

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [news, setNews] = React.useState([]);
  const [resp, setResp] = React.useState();
  const [url, setUrl] = React.useState("https://api.spaceflightnewsapi.net/v4/articles/");
  const [theme, setTheme] = React.useState("light");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

 

  React.useEffect(() => {
      async function fetchData() {
      try{  
        setIsLoading(true);
        const data = await fetch(`${url}${query}`);
        const json = await data.json(); //turn into a javascritp object
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
      <Navbar
      setQuery={setQuery}
      setUrl={setUrl}
      theme={theme}
      setTheme={setTheme}
      />
      
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
          {isLoading ? <img id="loading" src={imageLoading} alt="loading"/>: null}

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

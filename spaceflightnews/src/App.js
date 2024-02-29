import './App.css';
import GetCard from './card';
import Axios from "axios"
import React from 'react';

function App() {
const [searchTerm, setSearchTerm] = React.useState("");
const [news, setNews] = React.useState([]);

const handleChange = event => {
  setSearchTerm(event.target.value);
};
React.useEffect(() => {
  Axios.get("https://api.spaceflightnewsapi.net/v4/articles/")
  .then((resp)=>{
    setNews(resp.data.results);
})}, []);

React.useEffect(() => {
    const results = news.filter(element =>
      (element.title.toLowerCase().includes(searchTerm) || element.summary.toLowerCase().includes(searchTerm))
);
    
    setNews(results)
},[searchTerm]);





return (
    <div className="App">
      <header className="App-header">
        <h1>Space Party</h1>
      </header>
      <input type="text" placeholder ="search" value={searchTerm}
        onChange={handleChange}/>

      <div>
       { news.map((element, index) => (
          <GetCard 
          key = {index}
          title={element.title} 
          imgSrc={element.image_url} 
          summary={element.summary}
          url ={element.url}
          />
       ))
      }
      </div>
      <footer>
       by Marta Trincão
      </footer>
    </div>
  );
}

export default App;

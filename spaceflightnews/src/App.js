import './App.css';
import GetCard from './card';
import Axios from "axios"
import React from 'react';

function App() {
const [news, setNews] = React.useState([]);
 
React.useEffect(() => {Axios.get("https://api.spaceflightnewsapi.net/v4/articles/").then((resp)=>{
    setNews(resp.data.results);
})
},[]);

console.log(news)



return (
    <div className="App">
      <header className="App-header">
        <h1>Space Party</h1>
      </header>
      <div>
       { news.map((element, index) => (
          <GetCard 
          key = {index}
          title={element.title} 
          imgSrc={element.image_url} 
          summary={element.summary}
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

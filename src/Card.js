import './Card.css'

function Card({title, imgSrc, summary, url}) {

  function handleClick(){
      window.location.replace(url);
  }

    return (
      <article class="Card">
        <img src={imgSrc} alt={imgSrc} onClick={handleClick}/>
        <div class="container">
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
      </article>

      );
  }
  
  export default Card;
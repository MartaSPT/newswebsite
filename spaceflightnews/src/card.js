function Card({title, imgSrc, summary, url}) {

  function handleClick(){
      window.location.replace(url);
  }

    return (
      <article>
        <h3>{title}</h3>
        <img src={imgSrc} alt={imgSrc} onClick={handleClick}/>
        <p>{summary}</p>
      </article>

      );
  }
  
  export default Card;
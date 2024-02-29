function GetCar({title, imgSrc, summary, url}) {

  function handleClick(){
      window.location.replace(url);
  }

    return (
      <div>
        <h3>{title}</h3>
        <img src={imgSrc} onClick={handleClick}/>
        <p>{summary}</p>
      </div>

      );
  }
  
  export default GetCar;
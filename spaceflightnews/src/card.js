
function GetCar({title, imgSrc, summary}) {
console.log('hello')
    return (
      <div>
        <h3>{title}</h3>
        <img src={imgSrc} />
        <p>{summary}</p>
      </div>

      );
  }
  
  export default GetCar;
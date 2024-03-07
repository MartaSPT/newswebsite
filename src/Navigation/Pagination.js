function Pagination({resp,url, setUrl}){
    const handleNext = function () {
        if (resp.next === null) {
            setUrl(url);
        } else {
            setUrl(resp.next);
        }
    }
    const handlePrevious = function () {
        if (resp.previous === null) {
            setUrl(url);
        } else {
            setUrl(resp.previous);
        }
    }
    return (
        <div id="pagination">
            <button id="previous" onClick={handlePrevious} className="previous round"> &#8678; previous page</button>
            <button id="next" onClick={handleNext} className="next round">next page &#8680;</button>

        </div>
    )
}
export default Pagination;
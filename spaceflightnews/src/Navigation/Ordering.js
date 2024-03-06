import './Ordering.css';

function Ordering({ setQuery }) {
    const handleNewest = event => {
        setQuery('?ordering=-published_at');
    }

    const handleOldest = event => {
        setQuery('?ordering=published_at');
    }
    return (
        <div className="dropdown">
            <button id="newest" onClick={handleNewest}>Newest</button>
            <button id="oldest" onClick={handleOldest}>Oldest</button>
        </div>
    )
}

export default Ordering
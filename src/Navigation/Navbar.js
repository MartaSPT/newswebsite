import './Navbar.css';
import React from 'react';

function Navbar({ setUrl, setQuery, theme, setTheme }) {
    const [themeSelected, setThemeSelected] = React.useState(false); //change the state of the form

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        setThemeSelected(!themeSelected);
    }

    const artFunction = event => {
        setQuery("");
        setUrl("https://api.spaceflightnewsapi.net/v4/articles/")
    }

    const blogsFunction = event => {
        setQuery("");
        setUrl("https://api.spaceflightnewsapi.net/v4/blogs/")
    }

    const reportsFunction = event => {
        setQuery("");
        setUrl("https://api.spaceflightnewsapi.net/v4/reports/")
    }

    return (
        <div id="navbar">
            <nav id="list">
                <li><a onClick={artFunction} href="#">Articles</a></li>
                <li><a onClick={blogsFunction} href="#">Blogs</a></li>
                <li><a onClick={reportsFunction} href="#">Reports</a></li>
            
            </nav>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={toggleTheme} checked={themeSelected} />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Dark Theme</label>
            </div>
        </div>


    )

}

export default Navbar;
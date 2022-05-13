import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./TopAnime.css";
import { CustomNavbar } from "../index"

export default function TopAnime() {

    const [isLoaded, setLoaded] = useState(false);
    const [results, setResults] = useState([]);

    function fetchData() {
        fetch(`https://api.jikan.moe/v4/top/anime`)
            .then(results => results.json())
            .then(data => {
                setResults(data.data)
                setLoaded(true)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (!isLoaded) {
        return <div className="loading">Data is loading...</div>
    } else {
        return (
            <div className="topAnimeMain">
                <CustomNavbar />
                <div className="sortingAndFilters">
                    TODO
                </div>
                <div className="display">
                    {results.map(results => (
                        <div key={results.mal_id}>
                            <Link to={`/view/anime/${results.mal_id}`}>
                                <img src={results.images.jpg.large_image_url} alt={results.title} className="anime-image" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
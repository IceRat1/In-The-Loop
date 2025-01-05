import {useState, useEffect} from 'react'
import Card from './Card.jsx'

function News(props) {

    const [news, setNews] = useState([])

    useEffect(() => {
        const getNews = async () => {

            if (props.country=="" && props.category=="" && props.source=="" && props.query=="") {
                setNews([])
                return
            }

            let url = props.source == "" ? 
            (`https://newsapi.org/v2/top-headlines?` +
            `${props.query == "" ? "" : `q=${props.query}&`}` +
            `${props.country == "" ? "" : `country=${props.country}&`}` +
            `${props.category == "" ? "" : `category=${props.category}&`}` +
            `pageSize=60&apiKey=14f107b63fba4c62b08e4699c542b3f5`) :
            `https://newsapi.org/v2/top-headlines?sources=${props.source}&pageSize=60&apiKey=14f107b63fba4c62b08e4699c542b3f5`;

            try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
        
            const json = await response.json();
            setNews(json['articles'])
            } catch (error) {
            console.error(error.message);
            }
        }
        getNews()
    }, [props.country, props.category, props.source, props.query])

    const newsHTML = news.map(article => <Card article={article}></Card>);

    return (
        <div className="flex flex-wrap justify-evenly p-5">
            {newsHTML}
        </div>
    )

}

export default News
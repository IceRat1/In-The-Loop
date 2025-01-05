
function Card(props) {

    const imgurl = props.article['urlToImage'] == null ? "/src/assets/news.png" : props.article['urlToImage']

    return (
        <div className="card bg-neutral text-neutral-content w-96 shadow-xl my-5">
            <figure>
                <img src={imgurl} onError={event => {
          event.target.src = "/src/assets/news.png"
        }}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.article['title']}</h2>
                <h3 className="card-title">By {props.article['author']}</h3>
                <p>{props.article['description']}</p>
                <div className="card-actions justify-end">
                    <a role="button" href={props.article['url']} className="btn btn-primary">Read Article</a>
                </div>
            </div>
        </div>
    )

}

export default Card
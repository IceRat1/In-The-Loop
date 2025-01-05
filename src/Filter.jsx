import {useState, useEffect} from 'react'

function Filter(props) {


    function handleCountryChange(event) {
        props.setCountry(event.target.value)
    }

    function handleCategoryChange(event) {
        props.setCategory(event.target.value)
    }

    function handleSourceChange(event) {
        props.setSource(event.target.value)
    }

    const [sources, setSources] = useState([])

    useEffect(() => {
        const getSources = async () => {
            let url = 
            `https://newsapi.org/v2/sources?` +
            `${props.country == "" ? "" : `country=${props.country}&`}` +
            `${props.category == "" ? "" : `category=${props.category}&`}` +
            `apiKey=14f107b63fba4c62b08e4699c542b3f5`;

            try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
        
            const json = await response.json();
            setSources(json['sources'])
            } catch (error) {
            console.error(error.message);
            }
        }
        getSources()
    }, [props.country, props.category])

    const sourcesHTML = sources.map(source => <option value={source['id']}>{source['name']}</option>);

    return (
        <div className="w-full h-auto flex items-center py-5">
            <h1 className="text-xl font-semibold pl-10 text-base-content"> Filters: </h1>

            <select className="select bg-secondary text-secondary-content w-full max-w-xs ml-5" value={props.country} onChange={handleCountryChange}>
                <option value="">Select a country</option>
                <option value="us">United States of America</option>
                <option value="au">Australia</option>
                <option value="ca">Canada</option>
                <option value="cn">China</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
                <option value="gb">United Kingdom</option>
                <option value="in">India</option>
                <option value="jp">Japan</option>
            </select>

            <select className="select bg-secondary text-secondary-content w-full max-w-xs ml-5" value={props.category} onChange={handleCategoryChange}>
                <option value="">Select a category</option>
                <option value="general">General</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
            </select>

            <select className="select bg-secondary text-secondary-content w-full max-w-xs ml-5" value={props.source} onChange={handleSourceChange}>
                <option value="">Select a source</option>
                {sourcesHTML}
            </select>
        </div>
    )
}

export default Filter
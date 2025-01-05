import { useState, useEffect } from 'react'
import { themeChange } from 'theme-change'

import Header from "./Header.jsx"
import Filter from "./Filter.jsx"
import News from "./News.jsx"
import Search from "./Search.jsx"

function App() {

    const [country, setCountry] = useState("")

    const [category, setCategory] = useState("")

    const [source, setSource] = useState("")

    const [query, setQuery] = useState("")

    useEffect(() => {
        themeChange(false)
    }, [])

    return (
        <>
            <Header/>
            <div className="divider divider-accent p-0 m-0 h-0"></div>
            <Filter category={category} setCategory={setCategory} country={country} setCountry={setCountry} source={source} setSource={setSource} />
            <Search query={query} setQuery={setQuery}/>
            <News category={category} country={country} source={source} query={query}/>
        </>
    )
}

export default App

// async function getData() {
//     const url = "https://newsapi.org/v2/top-headlines?q=trump&apiKey=14f107b63fba4c62b08e4699c542b3f5";
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       console.log(json);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
import {useState} from 'react'

function Search(props){

    function handleQueryChange(event) {
        props.setQuery(event.target.value)
    }

    return (
        <div className="pl-10 py-2">
            <input type="text" value={props.query} onChange={handleQueryChange} placeholder="Search" className="input input-bordered bg-base-200 text-base-content w--full max-w-xs"/>
        </div>
    )
}

export default Search
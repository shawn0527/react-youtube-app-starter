import React from 'react'

const SearchForm = (props) => {
    return(
        <form onSubmit={(e) => props.search(e)}>
            <input type='text' placeholder='Search Youtube....'/>
            <input type='submit'/>
        </form>
    )
}

export default SearchForm
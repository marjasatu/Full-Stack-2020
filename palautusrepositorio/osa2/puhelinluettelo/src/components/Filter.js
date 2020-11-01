import React from 'react'

const Filter = (props) => {  
    return (
        <input
        value={props.searchField}
        onChange={props.handleChange} 
      />       
    )      
}

export default Filter
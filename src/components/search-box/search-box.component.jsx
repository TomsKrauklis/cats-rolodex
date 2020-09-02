import React from 'react';
import './search-box.styles.css';
export const SearchBox =( { polaceholder, handleChange } ) =>(
    <input 
    className='search'
    type='search' 
    placeholder = {polaceholder}
    onChange={handleChange} />

)
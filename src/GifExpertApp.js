//import React, { Fragment } from 'react';
import React, { useState} from 'react';
//import PropTypes from 'prop-types';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['Samurai Chanplo', 'Vikings', 'Batman'];

    
    const [categories, setCategories] = useState(['Ragnar']);
    /*
    const handleAdd = () =>{
        setCategories([...categories,'Air bender']);
    }
    */

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
            <hr/>

        
        
        <ol>
            { 
                categories.map( category => 
                    <GifGrid 
                        key         = {category}
                        category    = {category}
                    />
                )
                
            }
        </ol>



        </>
    );
    


}


export default GifExpertApp;
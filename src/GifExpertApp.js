import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({defaulCategories = []}) => {
    
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setcategories] = useState(defaulCategories)

    /* const hadleAdd = ()=>{
        //setcategories([...categories, 'Caballeros del zodiaco']);
        setcategories(cats => [...cats, 'Caballeros del Zodiaco']);
    } */


    return(
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategory={ setcategories } />

            <hr />
            
            <ol>
                {
                    categories.map(category =>(
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
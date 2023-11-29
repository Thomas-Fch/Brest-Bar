import React from 'react'
import { useState } from 'react';
import CategoryCard from './CategoryCard'
import './_categoriesSelector.scss'

export default function CategoriesSelector({data}:any){
    const [active, setActive] = useState();

    function activeButton(value : any){
       setActive(value)
    }
    return(
        <section className='CategoriesSelector'>
        <h3>Vous êtes plutôt ?</h3>
        <div className='CategoryWrapper'>

        <CategoryCard/>
        </div>
        </section>
    )
}
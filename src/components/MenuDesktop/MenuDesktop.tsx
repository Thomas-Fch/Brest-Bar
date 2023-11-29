import React from 'react'
import './_menuDesktop.scss'
import CategorySelector from '../CategoriesSelector/CategoriesSelector'

export default function MenuDesktop({data}:any){

    return(
        <section className='menuDesktop'>
        <h1>
        Trouver le bar qu’il vous faut,
<span className='c-GradientPink'>
&nbsp; selon votre humeur.
    </span>
        </h1>
        <CategorySelector/>
        </section>
    )
}
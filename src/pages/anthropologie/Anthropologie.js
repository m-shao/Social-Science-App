import React from 'react'

import { useDarwinArticle } from '../../context/AnthroArticleContext'

import TransitionOverlay from '../../components/TransitionOverlay';
import CharlesDarwinArticle from './anthropologie-components/CharlesDarwinArticle';
import CultureArticle from './anthropologie-components/CultureArticle';
import ChoseAnthroArticle from './anthropologie-components/ChoseAnthroArticle';



function Anthropologie() {
    const darwinSelector = useDarwinArticle()

    let articleSelector = false
    darwinSelector === 'selected' ? articleSelector = true : articleSelector = false

    return (
        <>
            <TransitionOverlay count="10"/>
            <ChoseAnthroArticle />

            <div className="article-container">
                {articleSelector ? <CharlesDarwinArticle/> : <CultureArticle/>}
            </div>
            
        </>
  )
}

export default Anthropologie
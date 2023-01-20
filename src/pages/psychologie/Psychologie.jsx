import React from 'react'
import TransitionOverlay from '../../components/TransitionOverlay';

import { useBipolarArticle } from '../../context/PsychArticleContext'

import BipolarArticle from './psychologie-components/BipolarArticle'
import LonelyArticle from './psychologie-components/LonelyArticle'

import ChosePsychArticle from './psychologie-components/ChosePsychArticle';


function Psychologie() {
    const bipolarSelector = useBipolarArticle()

    let articleSelector;
    bipolarSelector === 'selected' ? articleSelector = true : articleSelector = false

    return (
        <>
            <ChosePsychArticle />
            <TransitionOverlay count="10"/>
            <div className="article-container">
                {articleSelector ? <BipolarArticle/> : <LonelyArticle/>} 
            </div>
            
        </>
  )
}

export default Psychologie
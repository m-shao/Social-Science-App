import React from 'react'
import TransitionOverlay from '../../components/TransitionOverlay';
import SociologieArticle from './sociologie-components/SociologieArticle';

function Sociologie() {
    return (
        <>
            <TransitionOverlay count="10"/>
            <div className="article-container">
                <SociologieArticle/>
            </div>
            
        </>
  )
}

export default Sociologie
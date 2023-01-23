import {React} from 'react'

import BipolarArticleSelector from '../../psychologie/psychologie-images/BipolarArticleSelector.png'
import LonelyArticleSelector from '../../psychologie/psychologie-images/LonelyArticleSelector.png'

import { usePsychArticleUpdate, useLonelyArticle, useBipolarArticle } from '../../../context/PsychArticleContext'

function ChosePsychArticle() {
    const bipolarSelector = useBipolarArticle()
    const lonelySelector = useLonelyArticle()
    const switchArticle = usePsychArticleUpdate()

    return (
        <div className='article-selection-div'>
            <h1>Articles</h1>
            <div className='article-selection'>
                <div className='article-selector' id={bipolarSelector} onClick={() => switchArticle()}>
                    <img src={BipolarArticleSelector} alt=""/>
                </div>
                <div className='article-selector' id={lonelySelector} onClick={() => switchArticle()}>
                    <img src={LonelyArticleSelector} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ChosePsychArticle
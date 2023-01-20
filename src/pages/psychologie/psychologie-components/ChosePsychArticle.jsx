import {React} from 'react'

import CultureArticleSelector from '../../anthropologie/anthropologie-images/CultureArticleSelector.png'
import DarwinArticleSelector from '../../anthropologie/anthropologie-images/DarwinArticleSelector.png'

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
                    <img src={DarwinArticleSelector} alt=""/>
                </div>
                <div className='article-selector' id={lonelySelector} onClick={() => switchArticle()}>
                    <img src={CultureArticleSelector} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ChosePsychArticle
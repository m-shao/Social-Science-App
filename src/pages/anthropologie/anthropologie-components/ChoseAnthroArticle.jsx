import {React} from 'react'

import CultureArticleSelector from '../anthropologie-images/CultureArticleSelector.png'
import DarwinArticleSelector from '../anthropologie-images/DarwinArticleSelector.png'

import { useAnthroArticleUpdate, useCultureArticle, useDarwinArticle } from '../../../context/AnthroArticleContext'

function ChoseAnthroArticle() {
    const darwinSelector = useDarwinArticle()
    const cultureSelector = useCultureArticle()
    const switchArticle = useAnthroArticleUpdate()

    return (
        <div className='article-selection-div'>
            <h1>Articles</h1>
            <div className='article-selection'>
                <div className='article-selector' id={darwinSelector} onClick={() => switchArticle()}>
                    <img src={DarwinArticleSelector} alt=""/>
                </div>
                <div className='article-selector' id={cultureSelector} onClick={() => switchArticle()}>
                    <img src={CultureArticleSelector} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ChoseAnthroArticle
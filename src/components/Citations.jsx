import {useState, React} from 'react'
import CitationButton from '../images/CitationButton.png'

import BipolarCitations from '../images/BipolarCitations.png'
import LonelyCitations from '../images/LonelyCitations.png'
import DarwinCitations from '../images/DarwinCitations.png'
import CultureCitations from '../images/CultureCitations.png'
import SociologieCitations from '../images/SociologieCitations.png'

function Citations() {

    const [citationState, setCitationState] = useState(false)
    function openCitations(){
        setCitationState(citationState => !citationState)
    }

    return (
        <>
            <img className='citation-button' src={CitationButton} alt="" onClick={openCitations} />
            {citationState ? (
                <div className="citation-page">
                <div className="article-container">
                    <div className="article-div">
                        <div className="article-section">
                            <div className="title-div">
                                <h1>Ouvrages Cités(Darwin)</h1>
                            </div>
                        </div>
                        <div>
                            <img className='banner-image' src={DarwinCitations} alt="" />
                        </div>

                        <div className="article-section">
                            <div className="title-div">
                                <h1>Ouvrages Cités(Padaung)</h1>
                            </div>
                        </div>
                        <div>
                            <img className='banner-image' src={CultureCitations} alt="" />
                        </div>

                        <div className="article-section">
                            <div className="title-div">
                                <h1>Ouvrages Cités(Bipolar)</h1>
                            </div>
                        </div>
                        <div>
                            <img className='banner-image' src={BipolarCitations} alt="" />
                        </div>

                        <div className="article-section">
                            <div className="title-div">
                                <h1>Ouvrages Cités(solitaire)</h1>
                            </div>
                        </div>
                        <div>
                            <img className='banner-image' src={LonelyCitations} alt="" />
                        </div>

                        <div className="article-section">
                            <div className="title-div">
                                <h1>Ouvrages Cités(Asch)</h1>
                            </div>
                        </div>
                        <div>
                            <img className='banner-image' src={SociologieCitations} alt="" />
                        </div>

                    </div>
                </div>
            </div>
            ): (<></>)}
            
        </>
    )
}

export default Citations
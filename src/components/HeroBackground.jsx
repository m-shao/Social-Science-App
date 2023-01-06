import { useScience } from '../context/ScienceContext';
import {scienceTitles, scienceBackgrounds} from '../data/Constants'
import treeOverlay from "../images/TreeOverlay.png" 

function HeroBackground(){
    let science = useScience()
    let scienceBackground = (science === "Anthropologie") ? scienceBackgrounds[0] : (science === "Psychologie") ? scienceBackgrounds[1] : scienceBackgrounds[2]
    let scienceTitle = (science === "Anthropologie") ? scienceTitles[0] : (science === "Psychologie") ? scienceTitles[1] : scienceTitles[2]

    return(
        <>
            <div className="background" style={{backgroundImage:`url(${scienceBackground})`}}></div>
                <div className="background-overlay" style={science==="Anthropologie" ? {backgroundImage:`url(${treeOverlay})`} : {backgroundImage:"none"}}></div>
                <div className="title-container">
                <img src={ scienceTitle } alt="" className='title'/>
            </div>
            <div className="gradient-div"></div>
        </>
    )

}

export default HeroBackground
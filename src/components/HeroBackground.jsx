import { useScience } from '../context/ScienceContext';
import {scienceTitles, scienceBackgrounds} from '../data/Constants'
import treeOverlay from "../images/TreeOverlay.png" 

import gsap from 'gsap';

function HeroBackground(){
    let science = useScience()

    let scienceBackground = (science === "Anthropologie") ? scienceBackgrounds[0] : (science === "Psychologie") ? scienceBackgrounds[1] : scienceBackgrounds[2]
    let tl = gsap.timeline()
        tl.set('.background', {backgroundImage:`url(${scienceBackground})`},)
        if  (science === "Anthropologie"){
            tl.set('.background-overlay', {backgroundImage:`url(${treeOverlay})`},)
        } else{
            tl.set('.background-overlay', {backgroundImage:`none`},)
        }
        
    
    let scienceTitle = (science === "Anthropologie") ? scienceTitles[0] : (science === "Psychologie") ? scienceTitles[1] : scienceTitles[2]

    return(
        <>
            <div className="background"></div>
                <div className="background-overlay"></div>
                <div className="title-container">
                {console.log(scienceTitle)}
                <img src={ scienceTitle } alt="" className='title'/>
            </div>
            <div className="gradient-div"></div>
        </>
    )

}

export default HeroBackground
import React from 'react'
import gsap from 'gsap'
import NextArrow from "../images/NextArrow.png"
import BackArrow from "../images/BackArrow.png"

function Introduction() {

    function closeIntro(){
        gsap.fromTo(".intro", {x:0}, {x:'-100%', duration: 1.2, ease:'power2.out'})
    }
    
    function openIntro(){
        gsap.fromTo(".intro", {x:'-100%'}, {x:0, duration: 1.2, ease:'power2.out'})
    }

    return (
        <>
            <img src={BackArrow} className="back-arrow" alt="" onClick={() => {openIntro()}}/>
            <div className="intro">
                <div className="intro-container">
                    <h3>Introduction a L’article</h3>
                    <p>        Charles Darwin est sûrement une des figures scientifiques les plus influentes et reconnaissables dans le monde au cours d’histoire. On lui voit parmi les noms de Einstein et Newton, son nom est reconnu tout autour du monde. Il est connu comme le père d'évolution et a créé la fondation pour la domaine d’Anthropologie. Il est un penseur incroyable et controversé. On racontera sa vie et ses accomplissements pour reconnaître son influence sur notre société moderne. Charles Darwin est sûrement une des figures scientifiques les plus influentes et reconnaissables dans le monde au cours d’histoire. On lui voit parmi les noms de Einstein et Newton, son nom est reconnu tout autour du monde. Il est connu comme le père d'évolution et a créé la fondation pour la domaine d’Anthropologie. Il est un penseur incroyable et controversé. On racontera sa vie et ses accomplissements pour reconnaître son influence sur notre société moderne.</p>
                </div>
                <img src={NextArrow} className="arrow" alt="" onClick={() => {closeIntro()}}/>
            </div>
        </>
  )
}

export default Introduction
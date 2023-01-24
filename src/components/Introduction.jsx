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
                    <p>Je m'appelle Minglun Shao, j'ai 16 ans et je suis un lycéen Sino Canadian en onzième année. Je viens de l'Ontario et je suis primairement un étudiant qui s'intéresse à la technologie et à l'informatique mais j’ai aussi des intérêts au lieu des sciences sociales. Au contraire des sciences naturelles comme la physique et la biologie, les sciences sociales observent plutôt l'espèce humaine, les sociétés, et les relations humaines. Ce sont les choses qui nous affectent et se passent dans l'arrière-plan sans que nous le sachions. Mon intérêt pour les sciences sociales vient du fait qu'il est si mystérieux dans la façon dont il dicte nos vies, qu’il y a si autant d'informations qu’on ne sait même pas a propos comment nous mêmes fonctions. L’anthropologie est l'étude de l'évolution humaine, le développement et continuité de ses cultures, les traditions, les populations: la formation de notre héritage. La psychologie est l'étude de nos cerveaux, nos pensées, comment passerons chaque action: que forme la conscience humaine? La psychologie et notre esprit sont finalement ce qui nous définit comme individus. La psychologie me touche spécialement, avec ma génération on continue d’avancer la conversation de la santé mentale et le changement de notre comportement avec la montée d'internet. La sociologie est l'étude de la société, les intuitions, les relations et les interactions humaines: ce qui nous relie ensemble. Les sciences sociales sont tout autour de nous et c'est important de découvrir ce qui nous conduit, l’article suivant est pour informer et te donner un petit aperçu du monde immensément vaste des sciences sociales. Si cela t'intéresse je t’encourage à rechercher plus sur ton propre accord, d’apprendre le plus que tu peux. L’article suivant est dirigé au personnes 13+ de tous genres et de promenades de la vie, ceux avec le connaissance peu à intermédiaire.</p>
                </div>
                <img src={NextArrow} className="arrow" alt="" onClick={() => {closeIntro()}}/>
            </div>
        </>
  )
}

export default Introduction
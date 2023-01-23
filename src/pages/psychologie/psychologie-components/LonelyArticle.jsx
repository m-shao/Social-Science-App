import React from 'react'

import {lonelyImages} from '../../../data/Constants.js'

function LonelyArticle() {
  return (
    <div className="article-div">
      <div className="article-section">
        <div className="title-div">
          <h1>Solitude et Isolement Social Pendant la Pandémie de COVID-19</h1>
        </div>
        <img class="banner-image" src={lonelyImages.cup} alt=""/>
      </div>
      <div className="article-section">
        <h3>Introduction</h3>
        <p>&emsp;&emsp;En 2020, le monde a complètement changé, d’aller à l'école, au travail, utiliser la transportation public, voir le famille et les amis d'être complètement isolé de tout le monde. Les procédures d’isolation, distanciation sociale et quarantaine ont soulevé plusieurs questions concernant la santé mentale et la psychologie. Les mesures urgentes créées par les gouvernements au tours du monde ont bien sur aider à prévenir la propagation du virus, mais il y avait plusieur conséquence de santé mental et physique spécialement parmi les personnes âgées.</p>
        <h3>Solitude et isolement social</h3>
        <p>&emsp;&emsp;Solitude et isolement social sont deux choses différentes qui sont observées souvent ensemble. Le solitude parle de la émotions subjectives tandis que l’isolement social est l'état social objective. Même avant le pandemis le solitude et isolement social était commun tout autour du monde, un étude qui observait les régions dans l'amérique, l’europe et la chine suggère 10-40% du population. </p>
        <h3>Impacts sur la santé physique et mentale</h3>
        <p>&emsp;&emsp;La solitude est associée avec plusieurs problèmes physique et mental. C’est associée avec un tension artérielle élevée, risque accru de maladie cardiaque, décès associé à une maladie coronarienne, même sans un antécédent médical des conditions similaires. </p>
        <p>Le liste des effets négatifs sur la santé mental est extensif, incluant:</p>
        <ul className='list'>
          <li>Réduction de l'efficacité du sommeil</li>
          <li>Symptomatologie dépressive(symptoms relier au dépression)</li>
          <li>Mauvaise santé auto-évaluée</li>
          <li>Fonction quotidienne altérée</li>
          <li>Suicides/tentatives de suicide</li>
          <li>Risque élevé du démence</li>
        </ul>
        <p>L’impact de la solitude sur la santé est relié au réponse physiologique au stress, et les réponses anormales de stress causé par la solitude ont aussi plusieurs effets comme:</p>
        <ul className="list">
          <li>Changements comportementaux/Changements à un style de vie de malsain</li>
          <li>
            <ul>
              <li>Addiction(fumeur, alcoholism, usage de drogues)</li>
              <li>Moins d'activité physique</li>
              <li>Mauvaise habitudes alimentaires</li>
              <li>Non respect des prescriptions médicales</li>
            </ul>
          </li>
        </ul>
        <p>Comprendre ses symptômes nous aide à prévenir les effets et à créer des interventions plus efficaces. </p>
      </div>
      <div className="article-section">
        <h3>Comment Prévenir les Effets de la Solitude et Isolement Social</h3>
        <img className='banner-image' src={lonelyImages.brain} alt="" />
        <p>&emsp;&emsp;Il y a plusieurs méthodes établies dont nous pouvons prévoir les effets même avec les restrictions de distanciation sociale:</p>
        <p>Maintenir les Connections:</p>
        <ul className="list">
          <li>Passer du temps avec la famille. Même avec toutes les restrictions et dangers, les interactions sociales avec les amis et les membres de famille avec les masques et les mesures de sécurité est essentiel pour batailler l’isolation. </li>
          <li>Utiliser la technologie pour maintenir l’interaction sociale. Le technologie social comme Facetime, Skype, Facebook, LINE, Instagram tout nous permet a maintenir un degré de vie social dans le confort de notre maison.</li>
        </ul>
        <p>Maintenir les Besoins de Base et une Activité Saine:</p>
        <ul className='list'>
          <li>Gérer la cognition, les émotions et l'humeur:</li>
          <li id='sub-list'>
            <ul>
              <li>Recevoir l’information reliable a propos du pandemis pour réduire le stresse</li>
              <li>Respiration consciente, méditation et autres techniques de relaxation</li>
              <li>Support emotional du famille et les amis </li>
            </ul>
          </li>
          <p>Gérer les symptômes avec les petits changements au cours de la journée est un method important pour prévenir les effets sérieux de l'isolation. </p>
          <li>Rester Conscient des Symptômes Psychiatrique. On voit que les problèmes de santé mentale sont beaucoup plus prévalent et c’est important de reconnaître les symptômes et les traiter tout de suite. Les gens avec l' histoire familiale des problèmes de santé mental devraient être spécialement conscient. Les personnes qui observent les symptômes du psychologique anormal devraient chercher du support personnel ou même professionnel dans certains cas. </li>
        </ul>
        <p>Les impacts sociaux du COVID sera les qui impactera tout un génération de gens, et changera le paysage social pour toujours. C’est toujours important d’avoir les mesures pour prévenir la propagation du virus mais c’est tout aussi important de protéger notre santé mentale.</p>
      
      </div>
      
      <div className="footer"></div>
    </div>
  )
}

export default LonelyArticle
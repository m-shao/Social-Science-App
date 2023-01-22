import React from 'react'

import {bipolarImages} from '../../../data/Constants.js'

function BipolarArticle() {
  return (
    <div className="article-div">
      <div className='article-section'>
        <div className="title-div">
          <h1>Trouble Bipolaire</h1>
        </div>
        
        <div className='article-section'>
          <img src={bipolarImages.header} alt="" className='banner-image'/>
          <p>&emsp;&emsp;Charles Darwin est né le 12 Février 1802 dans un petit village nommé Shrewsbury en Angleterre. Il est le deuxième plus jeune d'une famille de 6 enfants. Comme enfant, il était tellement curieux et intéressé par les sciences. Il était toujours influencé par son père autoritaire qui était son seul parent à cause de la mort de sa mère quand il avait seulement 8 ans. Il vient d'une famille de scientifiques, son père un docteur médical(Dr. R.W. Darwin) et son grand-père, un physicien célèbre(Dr. Erasmus Darwin). Dans cette famille il vivait un vie de privilège, un enfant de richesse, cela lui permettait d' explorer et d'apprendre librement (A. Desmond & Britannica, 2022; Biography.com, 2017).</p>
        </div>

        <div className="article-section">
          <h3>Début de la Vie - L’Enfance</h3>
          <h4>Avancement Aciens:</h4>
          <p>&emsp;&emsp;Les Grecs ont été les pionner dans le domaine de la psychologie anormale pendant les temps anciens. Pendant la première siecle, Aretaeus de Cappadocia commençait déjà à prendre notes des liens entre le Manie et la dépression. Dans les années des Grecs anciens, ils ont même découvert que les sels de lithium dans les bains aidait avec les symptômes du manie, un traitement qui est encore utilisé aujourd’hui. Même avec ces avancements anciens, les personnes avec les conditions de la psychologie anormale ont été normalement tuées sous la guise d'être possédé.</p>
          <h4>Années 1800:</h4>
          <p>&emsp;&emsp;Au tourne du 17eme siècle, Theophilus Bonnet à publier son travail «Sepulchretum» qui décrirait un condition appeler «manico-melancholicus» qui était la première fois que les gens pensaient de la dépression et le manie comme un condition. L'année 1851 apportait le psychiatre français, Jean-Pierre Falret qui est connu comme la première personne à diagnostiquer un forme de la bipolaire moderne.</p>
          <h4>Années 1900:</h4>
          <p>&emsp;&emsp;Au commencement des années 1900, Emil Kraepelin était le psychologiste principal dans les études des maladies mentales et à classifier officiellement les maladies comme le trouble bipolaire et la schizophrénie. En 1980, dans sa troisième révision du Manuel diagnostique et statistique des troubles mentaux (DSM), l' Association American Psychiatric inventait le terme «bipolaire» et décrirait en détail les épisodes de manie, hypomanie et dépression avec les traitements/médication.</p>
          <p>&emsp;&emsp;Dans la société moderne, les personnes avec des problèmes bipolaires sont capables de recevoir le traitement pour aider à gérer les symptômes et intégrer la société. La recherche continue encore et il y a encore plein de choses à apprendre. (Krans, 2019)</p>
        </div>
      </div>
      
      <div className="article-section">
        <h3>Casues</h3>
      </div>
      <div className="article-section">
        <h3>C’est quoi? Symptoms</h3>
        <img src={bipolarImages.happySad} alt="" className="banner-image" />
        <p>&emsp;&emsp;Le trouble bipolaire est décrit comme le changement imprévisible d'humeur et de niveaux d'énergie/rationalité. Les états qui sont soulignés par le trouble bipolaire sont séparés en 3 genres d'épisodes. (Mayo Foundation for Medical Education and Research, 2022)</p>
        <h4>Episode Maniaque:</h4>
        <div>
          <ul className='list'>
            <li> Une phase maniacale est une période d'au moins une semaine où une personne est extrêmement gaie ou irritable, ils possèdent plus d'énergie que d'habitude et présente au moins trois des changements de comportement suivants :</li>
            <li id='sub-list'>
              <ul>
                <li>Diminution du besoin de sommeil</li>
                <li>Parler excessivement</li>
                <li>Changements rapides en Pensées ou d'idées ou de sujets incontrôlables en parlant</li>
                <li>Facilement irritable</li>
                <li>Facilement distraire</li>
                <li>Augmentation des comportements à risque(conduite dangereuse, dépenses folles)</li>
              </ul>
            </li>
          </ul>
        </div>
        <h4>Episode Hypomaniaque:</h4>
        <div>
          <ul className="list">
            <li>Episode maniaque moins sévère</li>
            <li>Environ 4 jours</li>
            <li>Ne cause pas de problèmes majeurs</li>
          </ul>
        </div>
        <h4>Episode Dépressif majeur:</h4>
        <div>
          <ul className="list">
            <li>Au moins 2 semaines</li>
            <li>Au moins 5 des symptômes suivant:</li>
            <li id='sub-list'>
              <ul>
                <li>Tristesse ou désespoir intense</li>
                <li>Perte d'intérêt pour les activités</li>
                <li>Sentiments d'inutilité ou de culpabilité</li>
                <li>Fatigue</li>
                <li>Augmentation ou diminution du sommeil</li>
                <li>Augmentation ou diminution de l'appétit</li>
                <li>Agitation</li>
                <li>Difficulté de concentration</li>
                <li>Pensées fréquentes de mort ou de suicide</li>
              </ul>
            </li>
          </ul>
          <p>(American Psychiatry Association, n.d.)</p>
        </div>
        <div className="article-section">
          <h3>Complications/Effets:</h3>
          <p>Si le trouble bipolaire n’est pas traités, ça peut causer des problèmes à terme et dans toutes les facettes de la vie:</p>
          <ul className="list">
            <li>Problèmes d'abuser des substances</li>
            <li>Suicide, penseées suicidaires, tentatives de suicide</li>
            <li>Problèmes financiers</li>
            <li>Mauvais rendement au travail ou à l'école</li>
          </ul>
          <p>(Mayo Foundation for Medical Education and Research, 2022)</p>
        </div>
        <div className="article-section" style={{gap:"1rem"}}>
          <h3>Traitement/Prévention</h3>
          <p>&emsp;&emsp;Les troubles bipolaires sont les conditions de vie mais les traitements et les mesures préventives peuvent aider à gérer les symptômes. Les traitements peuvent inclure: Medications, Psychothérapie, Changes dans le style de vie, ou une combinaison de plusieurs traitements. </p>
          <div className="two-column img-right" style={{marginTop:0}}>
            <div><img src={bipolarImages.medicine} alt="" /></div>
            <p>Médicaments: plusieurs types de médications sont utilisés pour traiter les troubles bipolaires. Les médicaments stabilisateurs de l'humeur, comme le lithium, sont les premières étapes dans le traitement. Les antidépresseurs et les autres médications sont utilisés avec du caution(pour ne pas causer un épisode maniaque) sont utilisés aussi. </p>
          </div>
          <div className="two-column img-right" style={{marginTop:0}}>
            <div><img src={bipolarImages.therapy} alt="" /></div>
            <p>Psychothérapie: La psychothérapie est un type de thérapie cognitivo-comportementale et c’est une des méthodes les plus importantes quand on parle du traitement des troubles bipolaires. Il aide à gérer et à contrôler les effets, à identifier les déclencheurs et à trouver les méthodes pour contrôler le stress. </p>
          </div>
        </div>
        <p>Les changements dans le style de vie peuvent vous aider à gérer les symptômes. Les petits changements quotidiens peuvent beaucoup changer. Faire de l'exercice régulièrement, respecter un horaire de sommeil, avoir une alimentation saine, éviter l'alcool et les drogues et gérer le stress peuvent vous aider à réduire les épisodes de manie et de dépression.</p>
        
      </div>


      <div className="footer"></div>
    </div>
  )
}

export default BipolarArticle
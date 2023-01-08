import React from 'react'

import {charlesDarwinImages} from '../../../data/Constants.js'

function CharlesDarwinArticle() {
  return (
    <div className="article-div">
        <div className="title-div">
            <h1>Charles Darwin</h1>
            <h2>Le Père d'évolution</h2>
        </div>
        <div className="two-column" style={{marginTop:'15rem'}}>
            <div class="charles-darwin-main"><img src={charlesDarwinImages.main} alt="" /></div>
            <div className="sub-para">
                <h3>Le Penseur D’un Generation</h3>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Charles Darwin est sûrement une des figures scientifiques les plus influentes et reconnaissables dans le monde au cours d’histoire. On lui voit parmi les noms de Einstein et Newton, son nom est reconnu tout autour du monde. Il est connu comme le père d'évolution et a créé la fondation pour la domaine d’Anthropologie. Il est un penseur incroyable et controversé. On racontera sa vie et ses accomplissements pour reconnaître son influence sur notre société moderne.</p>
            </div>
        </div>
        <div className='article-section'>
          <h3>Début de la Vie - L’Enfance</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Charles Darwin est né le 12 Février 1802 dans un petit village nommé Shrewsbury en Angleterre. Il est le deuxième plus jeune d'une famille de 6 enfants. Comme enfant, il était tellement curieux et intéressé par les sciences. Il était toujours influencé par son père autoritaire qui était son seul parent à cause de la mort de sa mère quand il avait seulement 8 ans. Il vient d'une famille de scientifiques, son père un docteur médical(Dr. R.W. Darwin) et son grand-père, un physicien célèbre(Dr. Erasmus Darwin). Dans cette famille il vivait un vie de privilège, un enfant de richesse, cela lui permettait d' explorer et d'apprendre librement (A. Desmond & Britannica, 2022; Biography.com, 2017).</p>
        </div>
        <div className="two-column">
            <div className="sub-para">
                <h3>Education - la fondation d’un génie</h3>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Charles Darwin est sûrement une des figures
                    scientifiques les plus influentes et reconnaissables dans le monde au cours d’histoire. On lui voit parmi les noms de Einstein et Newton, son nom est reconnu tout autour du monde. Il est connu comme le père d'évolution et a créé la fondation pour la domaine d’Anthropologie. Il est un penseur incroyable et controversé. On racontera sa vie et ses accomplissements pour reconnaître son influence sur notre société moderne. médecine. C’est ici ou il découvrira qu’il s’est intéressé plus en histoire naturelle qu'à la médecine(National Geographic Society, 2022). Darwin racontera dans ses années plus âgées que l'expérience était presque complètement inutile pour lui.
                    Il apprenait beaucoup plus des étudiants radical à l'université et tout seul dans la nature etau à la musee locale. Dans les 5-6 années qui suivent son attendance à l’université, Darwin étudie sous la direction de dessous plusieurs professeurs et scientifiques dans un variété de domaines où il apprendrait à propos toutes sortes de plantes et animaux (A. Desmond & Britannica, 2022).</p>
            </div>
            <div class="charles-darwin-young"><img src={charlesDarwinImages.young} alt="" /></div>
        </div>
    </div>
  )
}

export default CharlesDarwinArticle
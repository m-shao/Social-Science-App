import React from 'react'

import {charlesDarwinImages} from '../../../data/Constants.js'

function CharlesDarwinArticle() {
  return (
    <div className="article-div">
        <div className="title-div">
            <h1>Charles Darwin</h1>
            <h2>Le Père d'évolution</h2>
        </div>
        <div className="two-column under-title img-left">
            <div><img src={charlesDarwinImages.main} alt="" /></div>
            <h3>Le Penseur D’un Generation</h3>
            <p>&emsp;&emsp;Charles Darwin est sûrement une des figures scientifiques les plus influentes et reconnaissables dans le monde au cours d’histoire. On lui voit parmi les noms de Einstein et Newton, son nom est reconnu tout autour du monde. Il est connu comme le père d'évolution et a créé la fondation pour la domaine d’Anthropologie. Il est un penseur incroyable et controversé. On racontera sa vie et ses accomplissements pour reconnaître son influence sur notre société moderne.</p>
        </div>
        <div className='article-section'>
          <h3>Début de la Vie - L’Enfance</h3>
          <p>&emsp;&emsp;Charles Darwin est né le 12 Février 1802 dans un petit village nommé Shrewsbury en Angleterre. Il est le deuxième plus jeune d'une famille de 6 enfants. Comme enfant, il était tellement curieux et intéressé par les sciences. Il était toujours influencé par son père autoritaire qui était son seul parent à cause de la mort de sa mère quand il avait seulement 8 ans. Il vient d'une famille de scientifiques, son père un docteur médical(Dr. R.W. Darwin) et son grand-père, un physicien célèbre(Dr. Erasmus Darwin). Dans cette famille il vivait un vie de privilège, un enfant de richesse, cela lui permettait d' explorer et d'apprendre librement (A. Desmond & Britannica, 2022; Biography.com, 2017).</p>
        </div>
        <div className="two-column img-right">
          <div><img src={charlesDarwinImages.young} alt="" /></div>
          <h3>Education - la fondation d’un génie</h3>
          <p>&emsp;&emsp;Charles Darwin est sûrement une des figures
                    scientifiques les plus influentes et reconnaissables dans le monde au cours d’histoire. On lui voit parmi les noms de Einstein et Newton, son nom est reconnu tout autour du monde. Il est connu comme le père d'évolution et a créé la fondation pour la domaine d’Anthropologie. Il est un penseur incroyable et controversé. On racontera sa vie et ses accomplissements pour reconnaître son influence sur notre société moderne. médecine. C’est ici ou il découvrira qu’il s’est intéressé plus en histoire naturelle qu'à la médecine(National Geographic Society, 2022). Darwin racontera dans ses années plus âgées que l'expérience était presque complètement inutile pour lui.
                    Il apprenait beaucoup plus des étudiants radical à l'université et tout seul dans la nature etau à la musee locale. Dans les 5-6 années qui suivent son attendance à l’université, Darwin étudie sous la direction de dessous plusieurs professeurs et scientifiques dans un variété de domaines où il apprendrait à propos toutes sortes de plantes et animaux (A. Desmond & Britannica, 2022).</p>
        </div>
        <div className='article-section'>
          <h3>Le Travail de la Vie - Les Découverts Fameuse</h3>
          <p>&emsp;&emsp;En 1831, Darwin part en voyage sur le HMS Beagle comme naturaliste, son rôle était de surveiller et tracer la carte d'Amérique du sud. </p>
          <img src={charlesDarwinImages.beagle} alt="" className='banner-image'/>
          <p>&emsp;&emsp;Pendant son voyage, il survenait les islands comme Galápagos ou il trouvait les spécimens, envoyait les fossiles des animaux extinct en angleterre, observait la variation de la biodiversité dans les forêts. Quand il y retournait , il travaillait avec plusieurs écologistes, biologistes, paléoanthropologues, pour étudier les samples qu’il a collectionné. L' analyse des plantes et des animales lui tournait à questionner l’origine des espèces et comment ils changent au cours du temps. Cela est ce qui a inspiré Darwin l'idée d'évolution et la sélection naturelle. En 1859, Darwin publie ses découvertes dans le livre, «the origin of species», qui a ce temps là était tellement controversé, c'était rien comme personne a vue ou penser jusqu'à maintenant. Darwin vivra longtemps après le publication de son livre et continuera sa recherche et l'avancée de la domaine pour plusieurs années après. Il est mort à l'âge de 73 en 1882. Il est enterré à L'abbaye de Westminster à Londres, en Angleterre (National Geographic Society, 2022).</p>
        </div>
        <div className='article-section'>
          <h3>Darwinisme - La Théorie d'évolution et la sélection Naturelle</h3>
          <img src={charlesDarwinImages.finch} alt="" className='banner-image'/>
          <p>&emsp;&emsp;La sélection naturelle forme comme base à la théorie d'évolution, que tous les humains, toutes espèces ont un ancêtre commun. Dans la nature c’est commun de voir un la variation entre les organismes: John est plus grand que Bob; Bob a les bras plus long que Jimmy; Jimmy a plus de cheveux sur son corps que Billy. Le théorie de Darwin affirme que les organismes dans un population avec un variation/mutation qui les bénéficié dans leur environnement, sont beaucoup plus probable de survivre plus longtemps et par conséquent, reproduisent plus souvent. Ses traits sont ensuite donnés à leur enfants, qui passera le même trait à leurs enfants, au cours des dizaines ou centaines de générations, ses traits plus avantageux sera la norme et la majorité de la population développera ce trait. L’héritage de ses traits est ce qui change les espèces dans la nature. Un effet de la sélection naturelle selon Darwin est la spéciation, ou autant de traits se changent dans un population dont ils deviennent leur propre espèce unique. C’est ça qui constitue l'idée d'évolution, qu’on vient des autres espèces (National Geographic Society, 2022)</p>
        </div>
        <div className="article-section">
          <h3>Son Effet sur la Domaine</h3>
          <p>&emsp;&emsp;Pendant le temps de Darwin, ses idées ont étaient tellement controversées, c’est une idée qui allait contre l'idée du créationnisme total en Europe(qui pour la plupart était chrétien/catholique). Dans notre société moderne, l'idée d'évolution est beaucoup plus commune et acceptée. Les idées de Darwin a changé notre perspective sur le monde et l’histoire et a pratiquement créé son propre domaine de science. Ses idées sont encore discutées aujourd'hui et avec plus de recherche, on voit que ses idées sont encore pertinentes et correctes d' un point de vue moderne. Il est le père d'évolution et est un des scientifiques le plus influents dans l’histoire, son nom sera enseigné plus les milliers d'années qui viennent, même quand nous comme espèce évoluonse.</p>
        </div>
        <div className='footer'></div>
    </div>
  )
}

export default CharlesDarwinArticle
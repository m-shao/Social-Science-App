import React from 'react'
import {sociologieImages} from '../../../data/Constants.js'

function SociologieArticle() {
  return (
    <div className="article-div">
        <div className="article-section">
            <div className="title-div">
                <h1>Solomon Asch - La Conformité</h1>
            </div>
        </div>
        <div className="two-column img-left">
            <div><img src={sociologieImages.clone} alt="" /></div>
            <h3>C’est quoi la Conformité?</h3>
            <p>Un conformiste est une personne qui essaie de se fondre dans un groupe, ne peut pas avoir ou montrer une opinion contraire. La majorité des personnes pensent qu’ils ne sont pas les conformistes, qu’ils peuvent aller contre la majorité s’ils voulaient. Mais en réalité selon l'expérience de Solomon Asche conduit en 1951 le conformité est plus commun qu’on pense, même sans que nous le croisions. Dans la sociologie la conformité est notre tendance de nous comporter selon les normes ou règles non-dites dans un groupe ou la société.(K. Cherry 2022)</p>
        </div>
        <div className="article-section">
            <h3>C’est quoi la But?</h3>
            <p>Il était influencé par l’Expérience de conformité de Sherif (1935) car il y avait pas un réponse correct pendant l'expérience, comment saurons nous s’ils ont conformer s’il y avait jamais un réponse prévu? Donc Asch a créé une expérience ou la réponse est si évidemment correcte qu’on saura pour certain s’ils étaient affectés par le groupe ou pas.(S. McLeod, 2018)</p>
        </div>
        <div className="article-section">
            <h3>C’est quoi L’expérience?</h3>
            <img src={sociologieImages.ex} alt="" className="banner-image" />
            <p>Asch a trouvé 50 étudiants universitaires mâles pour participer à une expérience de “vision”(vraiment de conformité). Il mettait les participants un parfois dans une salle avec 7 autres acteurs avec un script de réponses. Chaque personne était chargée de trouver le ligne qui était de la même grandeur qu’un autre et dirait ce qu’ils pensaient à haute voix, le participant vrai sera toujours la dernière à parler. Le réponse était toujours vraiment évidente, mais les acteurs diraient toujours les fausses réponses et Asch voulait observer si le participant vrai conformera avec le reste du groupe même si ça était contre ce qu'ils ont observé et confirmé avec leurs propres yeux.(S. McLeod, 2018)</p>
            <p>Le contrôle d'expérience était un essai sans acteurs et seulement un participant réel. </p>
        </div>
        <div className="article-section">
            <h3>C’est quoi les Résultats?</h3>
            <img src={sociologieImages.paint} alt="" className="banner-image" />
            <p>Les résultats du expériences observait que plus qu’un tiers du temps les participants étaient en accord avec le groupe, et plus que 75% ont dû s'y conformer au moins une fois. Dans le groupe de contrôle, moins d'un pourcent des participants ont eu la réponse incorrecte.(HeroicImaginationTV, 2013)</p>
            <p>Les participants ont dû se conformer pour 2 raisons selon asch, parce qu'ils veulent s'intégrer au groupe (influence normative) ou parce qu'ils pensaient que le groupe était plus correct qu'eux (influence informationnelle).(S. McLeod, 2018)</p>
            <p>Une variation alternative de cette expérience inclut un "allié" du participant. Un autre acteur parmi les 7 qui aura la réponse correcte. Asche observe qu’avec seulement 1 personne qui a la meme opinion que vous, le pourcentage de personnes qui conforme tombe à seulement 5%. Les personnes qui participaient dans ses testes ont dit qu’ils avaient un bon sentiment envers l'allié mais ont refusé leur influence sur leur propre décision.(HeroicImaginationTV, 2013)</p>
        </div>
        <div className="article-section">
            <h3>Est elle éthique? Est-elle encore valide aujourd'hui?</h3>
            <p>Est elle éthique? L'expérience, même si on ne leur a pas menti sur ses intentions, n'a pas blessé les participants et son véritable but a été révélé par la suite.</p>
            <p>Est-elle encore valide aujourd'hui? L'expérience de Solomon Asch était critiquée pendant son époque et encore aujourd’hui. Les critiques disent que la situation spéciale dans une expérience peut ne pas être transférée au vrai monde. La vérité, à mon avis, est que dans la société moderne, nous sommes, de plus en plus influencés par les opinions du média et des autres, spécialement en ligne. Et même si l'expérience a des défauts, on peut observer nous même la conformité dans la société.</p>
        </div>
        <div className="footer"></div>

    </div>
  )
}

export default SociologieArticle
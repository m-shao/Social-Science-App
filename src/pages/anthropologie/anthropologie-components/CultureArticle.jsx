import React from 'react'
import { cultureImages } from '../../../data/Constants'

function CultureArticle() {
  return (
    <div className="article-div">
      <div className="title-div">
          <h1>Anneaux des Femmes Padaung</h1>
          
      </div>
      <div className='article-section under-title'>
        <img src={cultureImages.group} alt="" className='banner-image'/>
      </div>
      <div className="article-section">
        <h3>Un Tribe de Femmes de Tradition</h3>
        <p>&emsp;&emsp;Dans le pays de Myanmar(Burma) et Thaïlande vit un tribu ou les femmes qui sont connu pour leur pratique ancienne qui est passer entre les générations. Les femmes ici portent les anneaux sur leur cours pour les allonger.  C’est une tradition qu’ils sont fiers, qui ont fui leur pays pour se protéger. </p>
      </div>
      <div className="two-column img-left">
        <div class="culture-shadow"><img src={cultureImages.shadow} alt="" /></div>
        <h3>Tradition Important</h3>
        <p>Dans cette tribu, toutes les femmes, d'âge de 5, portent un anneau fait de laiton autour de leur cou. Ces anneaux commencent à 4-5 livres et grandissent en taille et en poids au cours de temps. Ils restent sur leur cou plus plusieurs années, même les décennies, tout pour «allonger le cou». En réalité c’est un illusion, le cou ne grandissent pas, c’est le poids du panneau qui pousse sur leur épaules et leur poitrine et comprime leur cage thoracique, qui fait l’effet d’un cou plus grand (National Geographic, 2013; M. Senseney, n.d).</p>
      </div>
      <div className="article-section">
        <h3>Pourquoi?</h3>
        <p>&emsp;&emsp;L’élongation de la cou est une tradition ancienne pour ce tribe, c’est passer pour les générations et les générations. L’origine du tradition est pas trop claire, les théorie range de: protéger les femmes des attaques des tigres, qui souvent attaquent le cou à créer un image moins attirante pour lui protéger contre les hommes des autres villages(vu dans certaines autres tribus d’asie)(M. Senseney, n.d). Ce qu’on sait aujourd'hui est que la signification a sûrement changé au cours du temps, maintenant c’est reconnu comme un symbole de richesse, pouvoir et beauté dans la culture (factsanddetails.com, n.d). </p>
      </div>
      <div className="two-column img-right">
        <div><img src={cultureImages.young} alt="" /></div>
        <h3>Culture Attaquée Mais Protégée</h3>
        <p>&emsp;&emsp;Pendant les années 1962 quand la militaire birman a pris contrôle complète du Birmanie(Myanmar moderne), un des buts de leur régime était d’avancer la société et enlever toutes les traditions anciennes, incluant les anneaux de cou. Les peuples padaung ont fui en Thaïlande où ils vivaient dans les camps de réfugiés. En Thaïlande leur village et leur tradition est devenu un attraction touristique, l'éthique de cela est beaucoup discuté entre les groupes touristiques et l’internet aujourd’hui. Ils permettent maintenant de retourner à leur pays, même quand certaines d’entre elles restent en Thaïlande (National Geographic, 2013; M. Senseney, n.d).</p>
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default CultureArticle
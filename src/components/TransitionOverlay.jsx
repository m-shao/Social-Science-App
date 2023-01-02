function TransitionOverlay(props){
    let countArr = []
    for(let i=0; i<props.count ; i++){
        countArr.push(i)
    }

    return(
        <div className="transition-overlay">
            <div className='overlay-list'>
                {countArr.map(() => (
                <div className="overlay-items"></div>
                ))}
            </div>
        </div>
    )       
}

// function TransitionAnimation(){
//     tl.fromTo('.overlay-items', {y:0}, {duration: 1.5, delay: 1, y: '100%', stagger: {amount:0.5}, ease: "power1.out"})
//       // tl.to('.overlay-items', {duration: 1.5, y: '0%', stagger: {amount:0.5}, ease: "power1.out"})
//       // tl.to('.background-overlay', {backgroundImage:'none', duration:0.1})
//       // tl.to('.background', {backgroundImage:`url(${Psych})`, duration:1},)
//       // tl.set('.title', {attr: { src: PsychTitle}})
//       // tl.to('.overlay-items', {duration: 1.5, y: '-100%', stagger: {amount:0.5}, ease: "power1.out"})
// }

export default TransitionOverlay;

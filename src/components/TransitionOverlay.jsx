import gsap from "gsap"
import { useEffect } from "react"

function TransitionOverlay(props){
    useEffect(() => {
        let tl = gsap.timeline()
          tl.fromTo('.overlay-items', {y:"0vh"}, {duration: 1, delay: 0.5, y: '100vh', stagger: {amount:1}, ease: "power1.out"})
    }, [])

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

export default TransitionOverlay;

import React, {useContext, useState} from "react";

const BipolarArticleContext = React.createContext()
const LonelyArticleContext = React.createContext()
const PsychArticleContext = React.createContext()

export function useBipolarArticle(){
    return useContext(BipolarArticleContext)
}
export function useLonelyArticle(){
    return useContext(LonelyArticleContext)
}

export function usePsychArticleUpdate(){
    return useContext(PsychArticleContext)
}

export function PsychArticleProvider({ children }) {
    const [bipolarSelector, setBipolarSelector] = useState('selected')
    const [lonelySelector, setLonelySelector] = useState('not-selected')

    function changePsychArticle() {
        console.log("hello")
        bipolarSelector === 'selected' ? setBipolarSelector(bipolarSelector => 'not-selected') : setBipolarSelector(bipolarSelector => 'selected')
        lonelySelector === 'selected' ? setLonelySelector(lonelySelector => 'not-selected') : setLonelySelector(lonelySelector => 'selected')
    }
    
    return(
        <BipolarArticleContext.Provider value={bipolarSelector}>
            <LonelyArticleContext.Provider value={lonelySelector}>
                <PsychArticleContext.Provider value={changePsychArticle}>
                    {children}
                </PsychArticleContext.Provider>
            </LonelyArticleContext.Provider>  
        </BipolarArticleContext.Provider>
    )
}

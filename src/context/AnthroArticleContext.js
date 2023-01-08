import React, {useContext, useState} from "react";

const DarwinArticleContext = React.createContext()
const CultureArticleContext = React.createContext()
const AnthroArticleContext = React.createContext()

export function useDarwinArticle(){
    return useContext(DarwinArticleContext)
}
export function useCultureArticle(){
    return useContext(CultureArticleContext)
}

export function useAnthroArticleUpdate(){
    return useContext(AnthroArticleContext)
}

export function AnthroArticleProvider({ children }) {
    const [darwinSelector, setDarwinSelector] = useState('selected')
    const [cultureSelector, setCultureSelector] = useState('not-selected')

    function changeAnthroArticle() {
        darwinSelector === 'selected' ? setDarwinSelector(darwinSelector => 'not-selected') : setDarwinSelector(darwinSelector => 'selected')
        cultureSelector === 'selected' ? setCultureSelector(cultureSelector => 'not-selected') : setCultureSelector(cultureSelector => 'selected')
    }
    
    return(
        <DarwinArticleContext.Provider value={darwinSelector}>
            <CultureArticleContext.Provider value={cultureSelector}>
                <AnthroArticleContext.Provider value={changeAnthroArticle}>
                    {children}
                </AnthroArticleContext.Provider>
            </CultureArticleContext.Provider>  
        </DarwinArticleContext.Provider>
    )
}

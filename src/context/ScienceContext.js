import React, { useContext, useState } from 'react';

const ScienceContext = React.createContext();
const ScienceUpdateContext = React.createContext();

export function useScience() {
  return useContext(ScienceContext);
}

export function useScienceUpdate(newScience) {
  return useContext(ScienceUpdateContext);
}

export function ScienceProvider({ children }) {
  let { pathname } = window.location;
  pathname = pathname.slice(1);

  const [science, setScience] = useState(pathname);

  function changeScience(newScience) {
    console.log(newScience);
    setScience((science) => newScience);
  }

  return (
    <ScienceContext.Provider value={science}>
      <ScienceUpdateContext.Provider value={changeScience}>
        {children}
      </ScienceUpdateContext.Provider>
    </ScienceContext.Provider>
  );
}

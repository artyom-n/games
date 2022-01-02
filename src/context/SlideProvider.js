import React, { createContext, useContext, useState } from 'react';

const SlideContext = createContext();

const SlideProvider = ({children}) => {
    const [slide, setSlide] = useState(1);

    const updateSlide = currentSlide => {        
        setSlide(currentSlide);
    };

    return (
        <SlideContext.Provider value={{slide, updateSlide}}>
            {children}
        </SlideContext.Provider>
    );
};

export const useSlide = () => useContext(SlideContext);

export default SlideProvider;

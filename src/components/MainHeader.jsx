import { useState, useEffect, useRef,} from "react"
import Header from "./Header"

import HeaderImage1 from "../images/background.jpg"
import HeaderImage2 from "../images/background4.jpg" 

const MainHeader = () =>{
        
    const backgrounds =[
        {
            image: HeaderImage1,
            title: "COLLEGE BEHIND BARS",
            subtitle: "A prison education initiative in computing ",
            pre: "COME AS YOU ARE- LEAVE READY TO MAKE A DIFFERENCE IN THE WORLD",
            extra: "Prisons may seem designed to strip inhabitants of their humanity, but some individuals discover new hope and strength during their incarceration"
        },
        {
            image: HeaderImage2,
            title: "COLLEGE BEHIND BARS",
            subtitle: "A prison education initiative in computing ",
            pre: "COME AS YOU ARE- LEAVE READY TO MAKE A DIFFERENCE IN THE WORLD",
            extra: "Prisons may seem designed to strip inhabitants of their humanity, but some individuals discover new hope and strength during their incarceration"
        }
    ]

    // Code to automate transition
    
    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(null);
    const delay = 10000;
    const {image, title, subtitle, pre, extra} = backgrounds[index];
    

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [index]);


    return(

        <>
        <Header style= {{ transform: `translate3d(${-index * 100}%, 0, 0)` }} title = {title} image={image}> 
        <i>{subtitle}</i> 
        </Header>
        </>
    )
}

export default MainHeader;
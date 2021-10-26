import React, {useRef, useEffect} from 'react'
import { init } from 'ityped'

const Logo = () => {
    const textRef = useRef();       //ityped function https://www.npmjs.com/package/ityped

    useEffect(() => {            
        init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["Inspired by Phuc Vinh Le, I learnt this from him !!!"],
        });
    }, []);
    return (     
        <span className="ityped" ref={textRef}></span>   
    )
}

export default Logo
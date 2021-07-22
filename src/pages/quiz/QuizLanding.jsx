import React, {useRef, useEffect, useState, Fragment} from 'react'

const QuizLanding = () => {

const [btn, setBtn] = useState(false);

const refVirus = useRef(null);

useEffect (() => {
    refVirus.current.classList.add("startingImg");
    setTimeout(() => {
        refVirus.current.classList.remove("startingImg");
        setBtn(true)
    }, 1000);

}, [])

const setLeftImg = () => {
    refVirus.current.classList.add("leftImg");
}

const setRightImg = () => {
    refVirus.current.classList.add("rightImg");
}

const clearImg = () => {
    if(refVirus.current.classList.contains("leftImg")) {
        refVirus.current.classList.remove("leftImg")
    } else if (refVirus.current.classList.contains("rightImg")) {
        refVirus.current.classList.remove("rightImg")
    }
}

const displayBtn = btn && (
    <Fragment>
        <div onMouseOver={setLeftImg} onMouseOut={clearImg} className="leftBox">
            <button className="btn-welcome">Inscription</button>
        </div>
        <div onMouseOver={setRightImg} onMouseOut={clearImg} className="rightBox">
            <button className="btn-welcome">Connexion</button>
        </div>
    </Fragment>
)
    return (
        <div>
            <main ref={refVirus} className="welcomePage">
                {displayBtn}
            </main>
        </div>
    )
}

export default QuizLanding

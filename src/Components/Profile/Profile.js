import React, {useState, useEffect} from "react"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetter"
import "./profile.scss"
import img from "../Imagenes/developer.png"
import TopTags from "../Tags/TopTags"
import BottomTags from "../Tags/BottomTags"

function Profile(){

    const [letterClass, setLetterClass] = useState('text-animate')

    const hi =["H","o","l","a",","]
    const arrayName = ["Y","o"," ","s","o","y"," ","G","a","s","t","ó","n"," ","D","a"," ","R","u","d","a",]
    const jobArray = ["W","e","b","","D","e","v","e","l","o","p","e","r","."]
        
        useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 5000)
    }, [])

    return (
        <div className="App homeContainer d-flex flex-row justify-content-around align-items-center">
            <div className=" ">
                <TopTags />
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={hi}
                    idx={1}
                />
                <br />
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={arrayName}
                    idx={5}
                />
                <br />
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={27}
                />
                <br />
                <span className="description font-third">FrontEnd Developer / Tutor de Javascript </span>
                <BottomTags />
            </div>
            <img className="img" src="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg" alt="Frontend Developer" />
        </div>
    )
}

export default Profile
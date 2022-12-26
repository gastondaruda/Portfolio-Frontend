import React,{useEffect, useState} from "react"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetter"
import Paragraph from "../Paragraph/Paragraph"
import "./about.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSass,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'


function About(){

    const [letterClass, setLetterClass] = useState('text-animate')

        useEffect(() => {
            setTimeout(() => {
            setLetterClass('text-animate-hover')
            }, 3000)
        }, [])

    return(
        <>
        <div className="App d-flex ">
            <div className="about d-flex flex-column justify-content-center align-items-start">
            
                <AnimatedLetters
                    classNameBeforeAfter={"beforeAfter"}
                    className="justify-content-start" 
                    letterClass={letterClass}
                    strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'í']}
                    idx={15}
                />
                <Paragraph 
                    texto={"Soy un desarrollador front-end muy ambicioso que busca un puesto en una empresa de TI establecida con la oportunidad de trabajar con las últimas tecnologías en proyectos desafiantes y diversos."} 
                />
                <Paragraph
                    texto={"Tengo mucha confianza, soy curioso por naturaleza y trabajo perpetuamente para mejorar mis habilidades, un problema de diseño a la vez."}
                />
                <Paragraph
                    texto={"Actualmente formo parte del equipo de Tutores de Javascript en Coderhouse. Fomentando y facilitando la comunicación entre el alumno y el profesor. Escucho las nececidades del alumno/a, motivandole siendo una figura que asesora, orienta y anima a los estudiantes para que culminen sus estudios de manera exitosa."}
                />
                <Paragraph
                    texto={"Tengo habilidad para el trabajo en equipo y ayudar a los miembros del mismo cuando sea necesario. Me consideron una persona con capacidad de análisis, innovador y creativo con muchas ganas de crecer. "}
                />
            </div>
            <div className="stage-cube-cont d-flex justify-content-center align-items-center">
                <div className="cubespinner">
                    <div className="face1">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                    <FontAwesomeIcon icon={faSass} color="#DD0031" />
                    </div>
                    <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About
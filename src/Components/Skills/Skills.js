import React,{useEffect,useState} from "react"
import Loader from 'react-loaders'
import AnimatedLetters from "../AnimatedLetters/AnimatedLetter"
import {
    faSass,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
    faBootstrap,
    faNodeJs
    
} from '@fortawesome/free-brands-svg-icons'
import { SiMaterialui} from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./skilss.scss"

function Skills(){

    const arrIcons = [
        {icon: faReact, colorClassName:"#5ED4F4"},
        {icon:faJsSquare, colorClassName:"#EFD81D"},
        {icon:faHtml5, colorClassName:"#F06529"},
        {icon:faCss3, colorClassName:"#28A4D9"},
        {icon:faSass, colorClassName:"#DD0031"},
        {icon:faGitAlt, colorClassName:"#EC4D28"},
        {icon:faBootstrap, colorClassName:"#5ED4F4"},
        {icon: faNodeJs, colorClassName:"#FF8000"},
        {icon: SiMaterialui, colorClassName:"#28A4D9"}
    ]


    const [letterClass, setLetterClass] = useState('text-animate')

        useEffect(() => {
            setTimeout(() => {
            setLetterClass('text-animate-hover')
            }, 3000)
        }, [])
    return(
        <>
            <div className="App d-flex flex-row justify-content-around align-items-center">
            <div className="skilsContainer d-flex flex-column justify-content-center align-items-start pt-3">
                <AnimatedLetters
                        classNameBeforeAfter={"beforeAfter"}
                        className="justify-content-start" 
                        letterClass={letterClass}
                        strArray={["Skills"," ", "&"," ", "Conocimientos"]}
                        idx={5}
                />
                <p className="color-primary text-justify font-primary pt-3">Expert in front-end development including technologies like
                <span className="color-secondary"> HTML5</span > , <span className="color-secondary">CSS3</span>, <span className="color-secondary">Javascript</span>, <span className="color-secondary">Jquery</span>, <span className="color-secondary">React Js</span>, <span className="color-secondary">Typescript</span>, <span className="color-secondary">Bootstrap</span>, <span className="color-secondary">Sass</span>, <span className="color-secondary">Git</span>.</p>
                <p className="color-primary text-justify font-primary pt-3">I`m not a designer but I have a good sense of aesthetics and xperience in responsive, mobile-first web design. I put especial effort into optimizing my code and providing the best user experience. I would love to give you any kind of support alos after the project`s completion. I guarantee a commitment during work on your project.</p>
                <p className="color-primary text-justify font-primary pt-3">Visit my Linkedin profile for more details. Also you can checkout my cv on this link, or feel free to give a peek on some of my blogs posts.</p>
            </div>
            <div className="iconsContainer d-flex flex-wrap justify-content-around align-items-center">
                {arrIcons.map((icon) => {
                    return(
                        <>
                            <FontAwesomeIcon icon={icon.icon} color={icon.colorClassName} className="iconAnimation"/>
                        </>
                    )
                })}
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Skills
import React,{useState,useEffect} from "react"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
import bitcoin from "../../Imagenes/bitcoin.png"
import react from "../../Imagenes/react.png"
import javascript from "../../Imagenes/javascript.png"
import onesearch from "../../Imagenes/onesearch.png"
import recetas from "../../Imagenes/recetas.png"
import desarrolloWeb from "../../Imagenes/desarrolloWeb.png"
import movieDb from "../../Imagenes/moviedb.png"
import pokemon from "../../Imagenes/pokemon.png"
import rpc from "../../Imagenes/rock.png"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetter";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

function MyWork(){

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 5000)
    }, [])


const  projects = [
        {name:"e-commerce", image: react, url:"https://github.com/gastondaruda/react", gitpages:"https://gastondaruda.github.io/react/", herramient:"React Js", year: "2022", reactIcon: FaReact},
        {name:"Playstation", image:javascript, url:"https://github.com/gastondaruda/playstation", gitpages:"https://gastondaruda.github.io/playstation/", herramient:"Javascript Vanilla", year: "2022", reactIcon: SiJavascript},
        {name:"The Movie Db", image:movieDb, url:"https://github.com/gastondaruda/MovieDb", gitpages:"https://gastondaruda.github.io/MovieDb/", herramient:"React Js", year: "2022", reactIcon: FaReact},
        {name:"OneSearch Uy", image:onesearch, url:"https://github.com/onesearch-uy/onesearch-landing", gitpages:"https://onesearch-uy.github.io/onesearch-landing/", herramient:"Javascript Vanilla", year: "2022", reactIcon: SiJavascript},
        {name:"Recetas Api", image:recetas, url:"https://github.com/gastondaruda/RecetasReactJs", gitpages:"https://gastondaruda.github.io/RecetasReactJs/", herramient:"React Js", year: "2022", reactIcon: FaReact},
        {name:"Criptomonedas Api", image:bitcoin, url:"https://github.com/gastondaruda/criptomonedas", gitpages:"https://gastondaruda.github.io/criptomonedas/", herramient:"React Js", year: "2022", reactIcon: FaReact},
        {name:"Pokemon Api", image:pokemon, url:"https://github.com/gastondaruda/pokemonApi", gitpages:"https://gastondaruda.github.io/pokemonApi/", herramient:"Javascript Vanilla", year: "2022", reactIcon: SiJavascript},
        {name:"Rock Papel Scissors", image:rpc, url:"https://github.com/gastondaruda/rockPapelScissors", gitpages:"https://gastondaruda.github.io/rockPapelScissors/", herramient:"Javascript Vanilla", year: "2022", reactIcon:SiJavascript},
        {name:"Proyecto Desarrollo Web", image:desarrolloWeb, url:"https://github.com/gastondaruda/coderhouse", gitpages:"https://gastondaruda.github.io/coderhouse/", herramient:"Bootstrap y Css", year: "2022", reactIcon: SiJavascript},
    ]

const myWork = ["M","y"," ","W","o","r","k"]



    return(
        <div className="App">
            <Carousel fade className="mt-2">
                
                {
                    projects.map((img) => {
                        return (
                            
                        <Carousel.Item key={img.url}>
                            <a 
                                href={img.gitpages}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                            key={img.name}
                            className="d-block w-100"
                            src={img.image}
                            alt={img.url}
                            />
                            </a>
                            <Carousel.Caption>
                                <h3>{img.name}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        )
                    }
                    )
                }
            </Carousel>
            <div className="d-flex flex-wrap mt-2">
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={myWork}
                    idx={myWork.length}
                    className="justify-content-center" 
                />
                <CardGroup className="mt-2">
                <Row xs={1} md={2} className="g-4">
                    {
                        projects.map((work) => {
                            const {image,name,herramient,reactIcon,pages,url}= work
                            return (
                                <Col>
                                    <Card className="">
                                        <Card.Img variant="top" src={image} />
                                        <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Text>
                                            {herramient} {reactIcon ? <reactIcon /> : "-"}
                                        </Card.Text>
                                        <Button variant="primary">
                                            <a href={pages} target="_blank" rel="noreferrer">Ir al proyecto</a>
                                        </Button>
                                        <Button variant="warning">
                                            <a href={url} target="_blank" rel="noreferrer">Ir al repositorio</a>
                                        </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                        )
                    }

                </Row>
                </CardGroup>
            </div>
        </div>
    )
}

export default MyWork

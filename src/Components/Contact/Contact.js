import React,{Suspense} from "react"
import "./contact.scss"
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


function Contact(){

    
    return(
        <Suspense fallback={<div className="loading"><h1 >Cargando...</h1></div>}>

            <div className="app">
            <Button variant="primary" disabled>
                <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
            </Button>{' '}
            </div>
        </Suspense>
        
    )
}

export default Contact
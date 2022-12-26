import React from "react"
import "./paragraph.scss"

function Paragraph({texto}){
    return(
        <p className="texto text-justify">{texto}</p>
    )
}

export default Paragraph
import './animatedLetter.scss'

const AnimatedLetters = ({ letterClass, strArray, idx, classNameBeforeAfter }) => {
    return (
        <span className={`${classNameBeforeAfter}`}>
            {strArray.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))}
        </span>
    )
}

export default AnimatedLetters
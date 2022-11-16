import PropTypes from "prop-types"
import style from "./welcome.module.css"

const Welcome = (props) => {

    const { nom, nomDeFamille, taille } = props

    return (
        <>
            <h1 className={style.text}>Welcome {nom} {nomDeFamille} ({taille} cm)</h1>
        </>
    )
}

Welcome.defaultProps = {
    taille: 165
}

Welcome.propTypes = {
    nom: PropTypes.string.isRequired
}

export default Welcome
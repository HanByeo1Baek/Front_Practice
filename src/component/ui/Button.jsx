// 추가
import PropTypes from "prop-types";

function Button({text}) {
    return (
        <button>{text}</button>
    )
}

// 추가
Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button;
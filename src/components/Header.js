import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({title, onAdd, active}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={active ? 'red' : 'green'} text={active ? 'Cerrar' : 'Añadir'} onClick={onAdd}></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Lista de la Compra'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header

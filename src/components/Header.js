import PropTypes from 'prop-types'
import Button from './Button'
import Input from './Input'

const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
        //<Button color= 'yellow' />
      }

    return (
      <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onClick} />  
        <Button color='blue' text='Delete' onClick={onClick} /> 
        <Input/>
        <Button color='green' text='Add'/>
        <Input/>
      </header>
    )
}

Header.defaultProps = {
    title: 'To-Do-List',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// e.g. for writing styles
// include: <h1 style= {headingStyle}>whatever</h1>
// const headingStyle = { 
//     color: 'red',
//     backgroundColor: 'black',
//}

export default Header

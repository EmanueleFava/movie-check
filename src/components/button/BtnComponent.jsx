import Button from 'react-bootstrap/Button';
import "./BtnComponent.css"

function BtnComponent({handler, variant ,text}) {

    return (

        <Button className='btn-custom' variant={variant} onClick={handler}>{text}</Button>

    )

}




export default BtnComponent
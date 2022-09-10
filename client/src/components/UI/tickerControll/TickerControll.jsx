import {useDispatch} from 'react-redux';
import { offTicker } from '../../../Redux/Actions/offTicker';
import { onTicker } from '../../../Redux/Actions/onTicker';
import { deleteTicker } from '../../../Redux/Actions/deleteTicker';
import Switch from "react-switch";

const TickerPanel = ({ticker, status, setStatus}) => {

    const dispatch = useDispatch()

    function handleSwitch () {
        if (status === true) {
            //stop to update ticker changes
            dispatch(offTicker(ticker.id))
            setStatus( false )
        } else {
            //start to update ticker changes
            dispatch(onTicker(ticker.id))
            setStatus( true )
        }
    }

    function handleDelete () {
        dispatch(deleteTicker(ticker.id))
    }

    return (
        <div>
            <Switch onChange={handleSwitch} checked={status}/>
            <div className='ticker__btn' onClick={handleDelete}>DELETE</div>
        </div>
    );
}

export default TickerPanel;
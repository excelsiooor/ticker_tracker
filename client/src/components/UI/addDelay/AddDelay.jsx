import { getDelay } from '../../../Redux/Actions/getDelay';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';

const AddDelay = () => {

    //init local state for delay timer
    const [changeTimer, setChangeTimer] = useState(0);
    //fetch new delay time
    const timer = useSelector(state => state.delay.timer)
    const dispatch = useDispatch()
    
    //validate input
    const validChar = /^[.]?\d*(?:[.]\d*)?$/;
    const validate = (e) => {
        if (validChar.test(e.target.value)) {
            setChangeTimer(e.target.value)
        }
    };

    function sendTimer (e) {
        e.preventDefault();
        if (Number(changeTimer) === 0) {
            alert('Please, fill the form')
        } else {
            //send new delay changes
            dispatch(getDelay(Number(changeTimer)))
        }
    }

    useEffect(() => {
        // init delay timer on server from 0 to 3s
        dispatch(getDelay(3))
    }, [dispatch])

    return (
        <div className="main__add-delay">
            Current timer: {timer}s
            <form onSubmit={sendTimer}>
                <div>
                    <input maxLength={3} type="text" value={changeTimer} onChange={validate}/>
                </div>
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    );
}

export default AddDelay;
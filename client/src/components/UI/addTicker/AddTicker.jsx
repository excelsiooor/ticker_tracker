import { useState } from "react";
import {useDispatch} from 'react-redux';
import { addTicker } from "../../../Redux/Actions/addTicker";

const AddTicker = () => {

    const dispatch = useDispatch()

    const validPrice = /^[.]?\d*(?:[.]\d*)?$/;
    const validName = /^[A-Za-z]+$/;

    //init local state for sending
    const [ticker, setTicker] = useState({
        name: '',
        price: 0
    });

    //validate and changing
    function changeName (e) {
        if (validName.test(e.target.value)) {
            setTicker({...ticker, name: e.target.value.toUpperCase() })
        }
    }
    function changePrice (e) {
        if (validPrice.test(e.target.value)) {
            setTicker({...ticker, price: Number(e.target.value) })
        }
    }

    function sendTicker(e) {
        e.preventDefault();
        if (Number(ticker.price) === 0 || ticker.name === '') {
            alert('Please, fill the form')
        } else {
            //send name and price for new ticker
            setTicker({...ticker, name: '', price: 0})
            dispatch(addTicker(ticker))
        }
    }

    return (
        <form onSubmit={sendTicker} className="main__add-ticker">
            <span>Add Ticker</span>
            <div>
                <input 
                    type='text' 
                    placeholder="Name"
                    value={ticker.name} 
                    onChange={changeName}
                />
            </div>
            <div>
                <input 
                    maxLength={5}
                    type='text' 
                    value={ticker.price} 
                    onChange={changePrice}
                />
            </div>

            <button type="submit">SEND</button>
        </form>
    );
}

export default AddTicker;
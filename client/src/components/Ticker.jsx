import { useState } from 'react';
import TickerControll from "./UI/tickerControll/TickerControll";
import TickerUI from "./UI/tickerUI/TickerUI";

const Ticker = ({ticker}) => {

    //init local "switch status" to every new ticker
    const [switchStatus, setSwitchStatus] = useState(true);

    return (
        <div className="ticker">

            <TickerUI 
            ticker={ticker} 
            switchStatus={switchStatus} 
            />

            <TickerControll 
            ticker={ticker} 
            status={switchStatus} 
            setStatus={setSwitchStatus}
            />

        </div>
    );
}

export default Ticker;
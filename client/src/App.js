import './Styles/css/App.css';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { getTickers } from './Redux/Actions/getTickers';
import Ticker from './components/Ticker';
import Timer from './components/Timer';
import AddTicker from './components/AddTicker';

function App() {

  const dispatch = useDispatch()
  const tickers = useSelector(state => state.tickersReducer.tickers)
  const timer = useSelector(state => state.tickersReducer.timer)

  useEffect(() => {
    dispatch(getTickers())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <div className="main">
      <div className='main__header'>
        {tickers.map(ticker =>
          <Ticker ticker={ticker} />
        )}
      </div>
      <div className='main__content'>
        <AddTicker/>
      </div>
      <Timer timer={timer} />
    </div>
  );
}

export default App;
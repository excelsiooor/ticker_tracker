import './Styles/css/App.css';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { getTickers } from './Redux/Actions/getTickers';
import Ticker from './components/Ticker';
import ControlPanel from './components/ControlPanel';

function App() {

  const dispatch = useDispatch()
  const tickers = useSelector(state => state.tickers.tickers)

  useEffect(() => {
    dispatch(getTickers())
  }, [dispatch])

  return (
    <div className="main">
      <div className='main__header'>
        <ControlPanel/>
      </div>
      <div className='main__content'>
        {tickers.map(ticker =>
          <Ticker key={ticker.id} ticker={ticker} />
        )}
      </div>
    </div>
  );
}

export default App;
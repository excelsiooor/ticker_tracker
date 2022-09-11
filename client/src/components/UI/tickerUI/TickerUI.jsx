
const TickerUI = ({ticker, switchStatus}) => {

    let changes = {
        arrow: '',
        change: '',
        percent: '',
        plus: ''
    }

    switch (ticker.price.operator) {
        case 'INCREMENT':
            changes.arrow = 'ticker__increment';
            changes.change = 'ticker__change-up';
            changes.percent = 'ticker__change-up';
            changes.plus = '+';
            break;
        case 'DECREMENT':
            changes.arrow = 'ticker__decrement';
            changes.change = 'ticker__change-down';
            changes.percent = 'ticker__change-down';
            changes.plus = '';
            break;
        default:
            break;
    }

    if (switchStatus === false) {
        changes.arrow = 'ticker__gray';
        changes.change = 'ticker__change-gray';
        changes.percent = 'ticker__change-gray';
        changes.plus = '';
    }

    return (
        <div className="ticker__item">
            <div className={changes.arrow}>
                <div></div>
            </div>
            <div className="ticker__info">
                <div className="ticker__name">
                    {ticker.name}
                </div>
                <div className="ticker__price">
                    Price: {ticker.price.result}
                </div>
            </div>
            <div className="ticker__info">
                <div className={changes.change}>
                    {changes.plus}{ticker.price.change}
                </div>
                <div className={changes.percent}>
                    {changes.plus}{ticker.price.changePercent}%
                </div>
            </div>
        </div>
    );
}

export default TickerUI;
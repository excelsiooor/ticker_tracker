import AddDelay from "./UI/addDelay/AddDelay";
import AddTicker from "./UI/addTicker/AddTicker";

const ControlPanel = () => {
    return (
        <div className="main__form">
                <AddDelay/>
                <AddTicker/>
        </div>
    );
}

export default ControlPanel;
import './AddButtonStyles.css'

const AddItem = ({name, onChange, onAdd}) => (
    <div>
        <input className="insput-container" placeholder="Co potrzeba?" type="text" value={name} onChange={onChange}/>
        <button className="cybeer-btn" type="button" onClick={onAdd}>
            <span className="cybeer-btn__glitch">Add</span>
        </button>
    </div>
);
export default AddItem;
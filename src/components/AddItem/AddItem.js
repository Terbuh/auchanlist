import './AddButtonStyles.css'

const AddItem = ({name, onChange, onAdd}) => (
    <div>
        <input className="insput-container" placeholder="Co potrzeba?" type="text" value={name} onChange={onChange}/>
        <button className="cyber-btn" type="button" onClick={onAdd}>Add
            <span className="cyber-btn__glitch">Add</span>
        </button>
    </div>
);
export default AddItem;
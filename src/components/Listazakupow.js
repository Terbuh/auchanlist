import '../App.css';
import Item from "./Item/Item";

const Listazakupow = ({ list, onRemove }) => (
    <ul className="font-face-gm">
        {list.map((item) => (
           <Item key={item.id} item={item} onRemove={onRemove}/>
        ))}
    </ul>
);
export default Listazakupow;
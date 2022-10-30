import {Delete, X} from "./ItemButton";
const Item = ({ item, onRemove }) => (
    <li>
        <span>{item.name}</span>
        <Delete type="button" onClick={() => onRemove(item.id)}>
            <X>X</X>
        </Delete>
    </li>
);

export default Item;
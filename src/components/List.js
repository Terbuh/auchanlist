import ItemList from "./ItemList";

const List = (props) => {
    return (
        <div className="expenses">
            <ItemList
                title={props.items[0].title}
            />
            <ItemList
                title={props.items[1].title}
            />
        </div>
    );
}

export default List;
const ItemList = (props) => {
    return (
            <div className='expense-item__description'>
                <h2>{props.id}</h2>
                <h2>{props.title}</h2>
            </div>
    );
}

export default ItemList;
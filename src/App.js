import './App.css';
import HeaderTitle from "./components/Header-title";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import AddItem from "./components/AddItem/AddItem";
import Listazakupow from "./components/Listazakupow";
import './components/styles/Cyberpunk-Regular.ttf'

    const initiallist = [

    ];
const  App = () => {
    const [listData, setListData] = useState({
        list: initiallist,
        isShowList: true,}
    )
    const [name, setName] = useState('')

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleAdd() {
        const newList= listData.list.concat({
            name,
            id: uuidv4(),
        })
        setListData({...listData, list: newList});
        setName('');
    }

    function handleRemove(id) {
        const newWList = listData.list.filter((item) => item.id !== id);
        setListData({ ...listData, list:newWList});
    }
    if (!listData.isShowList){
        return null;
    }


  return (
    <div className="App">
      <header>
          <HeaderTitle/>
      </header>
        <AddItem
            name={name}
            onChange={handleChange}
            onAdd={handleAdd}/>
        {/*<Listazakupow list={listData.list} onRemove={handleRemove} />;*/}
        {listData.isShowList && <Listazakupow list={listData.list} onRemove={handleRemove}s/>}
    </div>
  );
};

export default App;

import './App.css';
import HeaderTitle from "./components/Header-title";
import List from "./components/List";

function App() {
    const list = [
        {
            id: 'e1',
            title: 'Toilet Paper'
        },
        {
            id: 'e2',
            title: 'Bread'
        },

    ];
    return (
        <div className="App">
            <header>
                <HeaderTitle/>
            </header>
            <List items={list}/>
        </div>
    );
}

export default App;

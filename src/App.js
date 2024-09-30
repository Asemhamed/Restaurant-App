import './App.css';
import NavBar from './componant/NavBar';
import Header from './componant/Header';
import Cat from './componant/Cat';
import { Container } from 'react-bootstrap';
import CardList from './componant/CardList';
import {Data } from './data';
import { useState } from 'react';


function App() {
  const [itemData,setItemData] = useState(Data);
const allCaat = ["الكل", ...new Set(Data.map((i) => i.category))];
  const filterByCat = (cat)=>{
    if(cat === "الكل"){
      setItemData(Data);
    }else{
          const newArr = Data.filter((item) => item.category === cat);
          setItemData(newArr);
    }
  }
    const filterBySea = (cat) => {
      if (cat !== "") {
        const newArr = Data.filter((item) => item.title === cat);
        setItemData(newArr);
      }
    };

  return (
    <div className="App">
      <NavBar filterBySea={filterBySea} />
      <Container>
        <Header />
        <Cat filterByCat={filterByCat} allCaat={allCaat} />
        <CardList itemData={itemData} />
      </Container>
    </div>
  );
}

export default App;

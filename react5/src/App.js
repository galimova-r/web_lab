import logo from './logo.svg';
import './App.css';


import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';


function MyNav(){
    return(
        <nav className="menu">
        <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Акции</a></li>
            <li><a href="#">Контакты</a></li>
        </ul>
        </nav>
)
    
}


function SweetCard({ imgsweet, size = 100, desc, title, prise }) {
  
  return (
    <div>
        <img
        className="books"
        src={imgsweet}
        width={size}
        height={size}
        />
        <h2 className="booktitle">{title}</h2>
        <p>{desc}</p>
        <h1>{prise}</h1>
        <button type="button" className="btn btn-outline-success">Заказать</button>
    </div>
    
  );
}

function ButtonCard() {
  const [isShown, setIsShown] = useState(true);

  const handleClick = event => {
    // 👇️ toggle visibility
    setIsShown(current => !current);
  };

  return (
    <div>
      <button onClick={handleClick}>Не Получается заказать</button>

      <div style={{display: isShown ? 'block' : 'none'}}>
        <h2>Если у вас есть проблемы, пожалуйста, обратитесь к менеджеру по номеру телефона: +78526314558</h2>
      </div>
    </div>
  );
}



function FlexSweets() {
  return (
    <div className="flex-container">
        <div className="item1">
            <SweetCard
                imgsweet = {"https://i.pinimg.com/736x/04/a7/e6/04a7e67c3a20d00d6c07bd2259a9cedd.jpg"}
                size={300}
                desc = {"Крутой десерт"}
                title = {"Моти зеленый"}
                prise = {"560₽"}
                

            />
        </div>
        <div className="item2">
            <SweetCard
                imgsweet = {"https://detsad68.ru/wp-content/uploads/3/e/7/3e7f86be02ab0fbf2b09bcbb1fa0e6e3.jpeg"}
                size={300}
                desc = {"Нежный вкус"}
                title = {"Десерт Павлова"}
                prise = {"399₽"}

            />
        </div>
        <div className="item3">
            <SweetCard
                imgsweet = {"https://klike.net/uploads/posts/2023-03/1679375344_3-21.jpg"} 
                size={300}
                desc = {"Классика вкуса"}
                title = {"Тирамису"}
                prise = {"259₽"}

            />
        </div>
        <div className="item4">
            <SweetCard
                imgsweet = {"https://sun9-50.userapi.com/impg/CFOHmajh7x63tDtEkjgQwqNlt2Ab1tHJS6_ulw/mUtZwG0cmoU.jpg?size=1000x1000&quality=96&sign=051c7634f5de193b4ce56be4ffa64a58&type=album"} 
                size={300}
                desc = {"Это база"}
                title = {"Чизкейк"}
                prise = {"875₽"}

            />
        </div>
    </div>
  );
}



const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


function App() {
  return (
    <div>
      <h1 className="head">Swetty</h1>
      <MyNav />
      <br/>
      <h1 className="head2">Наши лучшие десерты</h1>
      <FlexSweets />
      <ButtonCard />
      
    </div>
  );
}

export default App;

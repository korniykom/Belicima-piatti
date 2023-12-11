import Category from "../../components/Category/Category";
import Nav from "../../components/Nav/Nav";
import "./ChooseCategoryPage.css";
import Advice from "../../components/Advice/Advice";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Profile from './Profile.png';
export default function ChooseCategoryPage()
{
  const[showFullKitchenInfo, setShowFullKitchenInfo] = useState(false);
  let Kitcheninfo = <div>
  <Category category = "Американська"/>
  <Category category = "Українська"/>
  <Category category = "Шведська"/>
  <Category category = "Мозамбіцька"/>
  <Category category = "Грецька"/>
  <Category category = "Німецька"/>
  <Category category = "Великобританська"/>
  <Category category = "Грузинська"/>
  <Category category = "Мексиканська"/>
  <Category category = "Тайландська"/>
  <div className = "ButtonContainer">
      <div><button className="MoreInfoButton" onClick={()=>setShowFullKitchenInfo(!showFullKitchenInfo)}>Приховати</button></div>
      </div>
  </div>;
  
  const[showFullCategoryInfo, setShowFullCategoryInfo] = useState(false);
  let Categoryinfo = <div>
    <Link to = "/dishes/top?pageSize=3&page=1" className="ChooseCategoryLink"><Category category = "Найкращі"/></Link>
    <div className = "ButtonContainer">
      <div><button className="MoreInfoButton" onClick={()=>setShowFullCategoryInfo(!showFullCategoryInfo)}>Приховати</button></div>
      </div>
  </div>
  return(
    <div>
      <Nav title = "Категорії"/>
      <Link to = "/profile"><img src = {Profile} alt = "Profile.png" className="Profile"/></Link>
      <h2 className="ChooseCategoryText">Критерії пошуку рецепту:</h2>
      <h2 className="ChooseCategoryText2">За типом страви</h2>
      <Link to = "/dishes/Перші%20страви?page=1&pageSize=5" className="ChooseCategoryLink"><Category category = "Перші страви"/></Link>
      <Link to = "/dishes/Другі%20страви?pageSize=3&page=1" className = "ChooseCategoryLink"><Category category = "Другі страви"/></Link>
      <Link to = "/dishes/Десерти?pageSize=3&page=1" className="ChooseCategoryLink"><Category category = "Десерти"/></Link>
      <div className = "ButtonContainer">
      <div>{!showFullCategoryInfo ? <button className="MoreInfoButton" onClick={()=>setShowFullCategoryInfo(!showFullCategoryInfo)}>Дізнатися більше</button> : null}</div>
      </div>
      <div>{showFullCategoryInfo ? Categoryinfo : null}</div>
      <h2 className="ChooseCategoryText2">За типом кухні</h2>
      <Category category = "Італійська"/>
      <Category category = "Англійська"/>
      <Category category = "Китайська"/>
      <div className = "ButtonContainer">
      <div>{!showFullKitchenInfo ? <button className="MoreInfoButton" onClick={()=>setShowFullKitchenInfo(!showFullKitchenInfo)}>Дізнатися більше</button> : null}</div>
      </div>
      <div>{showFullKitchenInfo ? Kitcheninfo : null}</div>
      <Advice AdviceText="Оберіть тип рецепту для пошуку"/>
    </div>
  );
}
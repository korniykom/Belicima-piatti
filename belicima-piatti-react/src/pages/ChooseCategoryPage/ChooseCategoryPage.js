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
  const FillCategoryArray = new Array(4).fill(false);
  const[categoryChoosen, setCategoryChoosen] = useState(FillCategoryArray);
  const FillKitchenArray = new Array(12).fill(false);
  const[countyChoosen, setCountyChoosen] = useState(FillKitchenArray);
  let [category, setCategory] = useState("");
  let [country, setCountry] = useState("");
  const[showFullKitchenInfo, setShowFullKitchenInfo] = useState(false);
  let Kitcheninfo = <div>
  <div onClick={()=>UpdateCountryAndActive("US", 3)}><Category category = "Американська" active = {[...countyChoosen][3]}/></div>
  <div onClick={()=>UpdateCountryAndActive("UA", 4)}><Category category = "Українська" active = {[...countyChoosen][4]}/></div>
  <div onClick={()=>UpdateCountryAndActive("SE", 5)}><Category category = "Шведська" active = {[...countyChoosen][5]}/></div>
  <div onClick={()=>UpdateCountryAndActive("MZ", 6)}><Category category = "Мозамбіцька" active = {[...countyChoosen][6]}/></div>
  <div onClick={()=>UpdateCountryAndActive("GR", 7)}><Category category = "Грецька" active = {[...countyChoosen][7]}/></div>
  <div onClick={()=>UpdateCountryAndActive("DE", 8)}><Category category = "Німецька" active = {[...countyChoosen][8]}/></div>
  <div onClick={()=>UpdateCountryAndActive("GE", 9)}><Category category = "Грузинська" active = {[...countyChoosen][9]}/></div>
  <div onClick={()=>UpdateCountryAndActive("MX", 10)}><Category category = "Мексиканська" active = {[...countyChoosen][10]}/></div>
  <div onClick={()=>UpdateCountryAndActive("TH", 11)}><Category category = "Тайландська" active = {[...countyChoosen][11]}/></div>
  <div className = "ButtonContainer">
      <div><button className="MoreInfoButton" onClick={()=>setShowFullKitchenInfo(!showFullKitchenInfo)}>Приховати</button></div>
      </div>
  </div>;
  const[showFullCategoryInfo, setShowFullCategoryInfo] = useState(false);
  let Categoryinfo = <div>
    <div onClick={()=>UpdateCategoryAndActive("Топ", 3)}><Category category = "Найкращі" active = {[...categoryChoosen][3]}/></div>
    <div className = "ButtonContainer">
      <div><button className="MoreInfoButton" onClick={()=>setShowFullCategoryInfo(!showFullCategoryInfo)}>Приховати</button></div>
      </div>
  </div>
  
  const UpdateCategoryAndActive = (categ, index)=>
  {
    if(categ === category)
    {
      setCategory("");
    }
    else
    {
      setCategory(categ);
    }
    let newArray = [...categoryChoosen];
    newArray[index] = !newArray[index];
    for(let i = 0; i<newArray.length; i++)
    {
      if(i !== index)
      {
        newArray[i] = false;
      }
    }
    setCategoryChoosen(newArray);
  }
  const UpdateCountryAndActive = (title, index)=>
  {
    if(title === country)
    {
      setCountry("");
    }
    else
    {
      setCountry(title);
    }
    let newArray = [...countyChoosen];
    newArray[index] = !newArray[index];
    for(let i = 0; i<newArray.length; i++)
    {
      if(i !== index)
      {
        newArray[i] = false;
      }
    }
    setCountyChoosen(newArray);
  }
  let createLink = "";
  return(
    <div>
      <Nav title = "Категорії"/>
      <Link to = "/profile"><img src = {Profile} alt = "Profile.png" className="Profile"/></Link>
      <h2 className="ChooseCategoryText">Критерії пошуку рецепту:</h2>
      <h2 className="ChooseCategoryText2">За типом страви</h2>
      <div onClick={()=>UpdateCategoryAndActive("Перші страви", 0)} >{<Category category = "Перші страви" active={[...categoryChoosen][0]}/>}</div>
      <div onClick={()=>UpdateCategoryAndActive("Другі страви", 1)}><Category category = "Другі страви" active = {[...categoryChoosen][1]}/></div>
      <div onClick={()=>UpdateCategoryAndActive("Десерти", 2)}><Category category = "Десерти" active = {[...categoryChoosen][2]}/></div>
      <div className = "ButtonContainer">
      <div>{!showFullCategoryInfo ? <button className="MoreInfoButton" onClick={()=>setShowFullCategoryInfo(!showFullCategoryInfo)}>Дізнатися більше</button> : null}</div>
      </div>
      <div>{showFullCategoryInfo ? Categoryinfo : null}</div>
      <h2 className="ChooseCategoryText2">За типом кухні</h2>
      <div onClick={()=>UpdateCountryAndActive("IT", 0)}><Category category = "Італійська" active={[...countyChoosen][0]}/></div>
    <div onClick={()=>UpdateCountryAndActive("GB", 1)}><Category category = "Великобританська" active = {[...countyChoosen][1]}/></div>
      <div onClick={()=>UpdateCountryAndActive("CN", 2)}><Category category = "Китайська" active = {[...countyChoosen][2]}/></div>
      <div className = "ButtonContainer">
      <div>{!showFullKitchenInfo ? <button className="MoreInfoButton" onClick={()=>setShowFullKitchenInfo(!showFullKitchenInfo)}>Дізнатися більше</button> : null}</div>
      </div>
      <div>{showFullKitchenInfo ? Kitcheninfo : null}</div>  
      <div className = "None">{createLink = "/dishes?pageSize=10&country="+country+"&category="+category+"&page=1"}</div>
      {category !== "" || country !== "" ? <button className = "followLink"><Link to = {createLink} className="buttonText"><p className="buttonText">Перейти</p></Link></button> : null}  
      <Advice AdviceText="Оберіть тип рецепту для пошуку"/>
    </div>
  );
}
import html2canvas from 'html2canvas';
import React from 'react';
import {useState} from 'react';
import './App.css';

function App() {

  const [topText, setTopText] = useState();
  const [bottomText, setBottomText] = useState();
  const [image, setImage] = useState();

  const onChangeTopTxt = function(event) {
    setTopText(event.target.value);
  }
  const onChangeBottomTxt = function(event){
    setBottomText(event.target.value);
  }
  const selectImage = function(event){
    setImage(event.target.value);
  }
  const onClickExport = function(event){
    html2canvas(document.querySelector("#meme")).then(canvas =>{
      let img = canvas.toDataURL("image/png");
      
      let link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    })
  }

  return (
    <div className="App">
      <select onChange={selectImage}>
        <option value="" selected>Seleccionar</option>
        <option value="calaca">Calaca</option>
        <option value="changuito">NFT de un changuito</option>
        <option value="monachina">Mona china</option>
        <option value="pez">Pez</option>
        <option value="shiba">Shiba triste</option>
        <option value="tomwtf">Tom</option>
        <option value="walterwhite">Walter White</option>
        <option value="willsmith">Will Smith</option>
        <option value="lobos">Lobos</option>
        <option value="yatevi">Ya te vi</option>
      </select><br/>
      <input onChange={onChangeTopTxt} type="text" placeholder='Top Text'/><br/>
      <input onChange={onChangeBottomTxt} type="text" placeholder='Bottom Text'/><br/>
      <button onClick={onClickExport}>Exportar</button>

      <div className='meme' id='meme'>
        <span className='bottom-text'>{bottomText}</span><br/>
        <span className='top-text'>{topText}</span>
        <img alt="Meme" src={'img/'+ image +'.png'} /><br/>
      </div> 

    </div>
  );
}

export default App;

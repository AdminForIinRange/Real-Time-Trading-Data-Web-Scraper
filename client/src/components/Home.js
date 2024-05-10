import React, { useState } from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

import "./Home.css";
import gold from "../img/marketimgs/gold-bar-4086301-3379624-removebg-preview.png";
import btc from "../img/marketimgs/free-bitcoin-3443546-2879622.webp";
import natgas from "../img/marketimgs/3d-illustration-of-natural-gas-png.png";
import crudeoil from "../img/marketimgs/istockphoto-1373138100-612x612-removebg-preview.png";
import nasdaq from "../img/marketimgs/Auth_Key__1_-removebg-preview.png";
import usdjpy from "../img/marketimgs/8-removebg-preview.png";
import eurusd from "../img/marketimgs/9-removebg-preview.png";
import eurjpy from "../img/marketimgs/10-removebg-preview.png";
import aud from "../img/marketimgs/australian-dollar-9212488-7502544.webp";
import nvidia from "../img/marketimgs/image-removebg-preview (6).png";
import tesla from "../img/marketimgs/tesla-logo-7408969_1280.webp";
import mirosoft from "../img/marketimgs/image-removebg-preview (9).png";
//day 3 :)))))))))))))))))))))))))))
export default function Home() {
  const [sort, setStort] = useState("");
  const [Commodities, setCommodities] = useState(true);
  const [Crypto, setCrypto] = useState(true);
  const [Forex, setForex] = useState(true);
  const [Stocks, setStocks] = useState(true);
  const [Indices, setIndices] = useState(true);

  return (
    <div>
      <Navbar />
      <div className="Selection--Row">
        <div className="sorter">
          <div
            className="btn"
            onClick={() => {
              setCommodities(true);
              setCrypto(false);
              setForex(false);
              setIndices(false);
              setStocks(false);
            }}
          >
            Commodities
          </div>
          <div
            className="btn"
            onClick={() => {
              setCrypto(true);
              setCommodities(false);
              setForex(false);
              setStocks(false);
              setIndices(false);
            }}
          >
            Crypto
          </div>
          <div
            className="btn"
            onClick={() => {
              setForex(true);
              setCommodities(false);
              setCrypto(false);
              setIndices(false);
              setStocks(false);
            }}
          >
            Forex
          </div>
          <div
            className="btn"
            onClick={() => {
              setStocks(true);
              setCommodities(false);
              setCrypto(false);
              setIndices(false);
              setForex(false);
            }}
          >
            Stocks
          </div>
          <div
            className="btn"
            onClick={() => {
              setIndices(true);
              setCrypto(false);
              setCommodities(false);
              setForex(false);
              setStocks(false);
            }}
          >
            Indices
          </div>
        </div>

        <div
          className="SelectionImgHandler animate__animated animate__flipInY"
          style={{ display: Commodities ? "block" : "none" }}
        >
          <NavLink to="/Systems">
          <img src={gold} alt="GOLD"  onClick={()=>{
              localStorage.setItem('dataset', 'GOLD');


          }}/>

          </NavLink>
         
        </div>

        
        <div
          className="SelectionImgHandler animate__animated animate__flipInY"
          style={{ display: Crypto ? "block" : "none" }}
        >

<NavLink to="/Systems">
          <img src={btc} alt="BTCUSD" onClick={()=>{
              localStorage.setItem('dataset', 'BTCUSD');


          }} />
            </NavLink>
         
        </div>
        <div
          className="SelectionImgHandler animate__animated animate__flipInY"
          style={{ display: Commodities ? "block" : "none" }}
        >
          
<NavLink to="/Systems">
          <img src={natgas} alt="NYMEX-NG1!"  onClick={()=>{
              localStorage.setItem('dataset', 'NYMEX-NG1!');


          }}/>
          
</NavLink>
        </div>
        <div
          className="SelectionImgHandler animate__animated animate__flipInY"
          style={{ display: Commodities ? "block" : "none" }}
        >
          <NavLink to="/Systems">

     
          <img src={crudeoil} alt="NYMEX-CL1!"  onClick={()=>{
              localStorage.setItem('dataset', 'NYMEX-CL1!');


          }}/>
      </NavLink>
        </div>
        <div
          className="SelectionImgHandler animate__animated animate__flipInY"
          style={{ display: Indices ? "block" : "none" }}
        >
          <NavLink to="/Systems">
          <img src={nasdaq} alt="NASDAQ-NDX" style={{ height: "200px" }}  onClick={()=>{
              localStorage.setItem('dataset', 'NASDAQ-NDX');


          }}/>
          </NavLink>
        </div>
        <div
          className="SelectionImgHandler animate__animated animate__flipInY"
          style={{ display: Forex ? "block" : "none" }}
        > 
        <NavLink to="/Systems">
          <img src={usdjpy} alt="USDJPY" style={{ height: "200px" }} onClick={()=>{
              localStorage.setItem('dataset', 'USDJPY');


          }} />
               </NavLink>
        </div>
        <div
          className="SelectionImgHandler animate__animated animate__flipInY"
          style={{ display: Forex ? "block" : "none" }}
        >
           <NavLink to="/Systems">
          <img src={eurusd} alt="EURUSD" style={{ height: "200px" }} onClick={()=>{
              localStorage.setItem('dataset', 'EURUSD');


          }} />
          </NavLink>
        </div>
        <div
          className="SelectionImgHandler animate__animated animate__flipInY"
          style={{ display: Forex ? "block" : "none" }}
        >
             <NavLink to="/Systems">
          <img src={eurjpy} alt="EURJPY" style={{ height: "200px" }}  onClick={()=>{
              localStorage.setItem('dataset', 'EURJPY');


          }}/>
          </NavLink>
        </div>
        <div
          className="SelectionImgHandler animate__animated animate__flipInY"
          style={{ display: Stocks ? "block" : "none" }}
        >
                <NavLink to="/Systems">
          <img src={nvidia} alt="NASDAQ-NVDA" style={{ height: "200px" }} onClick={()=>{
              localStorage.setItem('dataset', 'NASDAQ-NVDA');


          }} />
          </NavLink>
        </div>
        <div
          className="SelectionImgHandler animate__animated animate__flipInY"
          style={{ display: Stocks ? "block" : "none" }}
        >
           <NavLink to="/Systems">
          <img src={tesla} alt="NASDAQ-TSLA" onClick={()=>{
              localStorage.setItem('dataset', 'NASDAQ-TSLA');


          }}/>
          </NavLink>
        </div>
        <div
          className="SelectionImgHandler animate__animated animate__flipInY"
          style={{ display: Stocks ? "block" : "none" }}
        >
            <NavLink to="/Systems">
          <img src={mirosoft} alt="NASDAQ-MSFT" onClick={()=>{
              localStorage.setItem('dataset', 'NASDAQ-MSFT');


          }}/>
          </NavLink>
        </div>
      </div>

      <div className="Selection--Header--Container"></div>
    </div>
  );
}

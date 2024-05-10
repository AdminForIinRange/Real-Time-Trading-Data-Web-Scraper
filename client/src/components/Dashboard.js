import React from "react";
import DataExtract from "./DataExtract";
import { useEffect, useState } from "react";
import "./Dashboard.css";

export default function Dashboard({ 
  price,
    asset,
    RsiValue,
    RsiSignal,
    CCIValue,
    CCISignal,
    ADIValue,
    ADISignal,
    AOValue,
    AOSignal,
    MValue,
    MSignal,
    MACDValue,
    MACDSignal,
    SRFValue,
    SRFSignal,
    WPRValue,
    WPRSignal,
    BBPValue,
    BBPSignal,
    UOValue,
    UOSignal,
    EMA20Value,
    EMA20Signal,
    EMA30Value,
    EMA30Signal,
    EMA50Value,
    EMA50Signal,
    EMA100Value,
    EMA100Signal,
    EMA200Value,
    EMA200Signal,
    SMA10Value,
    SMA10Signal,
    SMA20Value,
    SMA20Signal,
    SMA30Value,
    SMA30Signal,
    SMA50Value,
    SMA50Signal,
    SMA100Value,
    SMA100Signal,
    SMA200Value,
    SMA200Signal,
    IBLValue,
    IBLSignal,
    VWMAValue,
    VWMASignal,
    HMAValue,
    HMASignal,
    OscillatorsSell,
    OscillatorsNeutral,
    OscillatorsBuy,
    MovingAveragesSell,
    MovingAveragesNeutral,
    MovingAveragesBuy,
    SummarySell,
    SummaryNeutral,
    SummaryBuy,
    priceArrayLong,
    priceArrayShort,
    differenceResult,
    difference,
    difference200ema,
    differenceResult200ema,
    MacdExit,
    MAsummary,
    RSIExit,
    EMA100trailingResult,
    EMA100trailing,
    EMA50trailingResult,
    EMA50trailing,
   }) {









  function RSISystem() {

      console.log("EMA100Signal:", {EMA100Signal});
  console.log("RsiSignal:", {RsiSignal});








    return (
      <div>
        <div className="header--container">
          <div className="system--container">
            System:
            <div className="systemSwitch" onClick={() => {}}>
              RSIv1WT
            </div>
          </div>
          <div className="assets--container">
            <div className="AssetsSwitch" onClick={() => {}}>
              {localStorage.getItem("dataset")}
            </div>
            {price}
          </div>
        </div>
        <div className="table--container">
          <div className="mainSystemTable--container">
            <div className="mainTable">
              <table>
                <tr>
                  <th>Metrics</th>
                  <th>value</th>
                  <th>Output</th>
                </tr>
                <tr>
                  <td>RSI80-75/30-25</td>
                  <td>{RsiValue}</td>
                  <td>SHORT</td>
                </tr>
                <tr>
                  <td>MACD-RSI Confirmation</td>
                  <td>2.4</td>
                  <td>SHORT</td>
                </tr>
                <tr>
                  <td>Trailing Breakout</td>
                  <td>{difference}</td>
                  <td>{differenceResult}</td>
                </tr>
                <tr>
                  <td>Custom Augmentations</td>
                  <td>57%</td>
                  <td>WAIT</td>
                </tr>
              </table>
            </div>
            <div className="verdict--container">
                
              <div className="verdict">
              <br/>
                Delta: (risky sell/risky sell) Difference greater than 0.5%
                <br/>
                <br/>
                CA: Delta: 0.5%, decision cannot be made Wait
                <br/>
                <br/>
                Trend: Sell Trend do not enter unless your confident, else wiat for a nother signal
                <br/>
                <br/>
                Delta: (risky sell/risky sell) Difference greater than 0.5%
              </div>
            </div>
          </div>
          <div className="AdditionsSystem--container">
            <div className="AdditionsTitle"></div>
            <div className="AdditionsTable">
              <table>
                <tr>
                  <th>Metrics</th>
                  <th>value</th>
                  <th>Output</th>
                </tr>
                <tr>
                  <td>RSI80-75/30-25</td>
                  <td>84</td>
                  <td>SHORT</td>
                </tr>
                <tr>
                  <td>MACD-RSI Confirmation</td>
                  <td>2.4</td>
                  <td>SHORT</td>
                </tr>
                <tr>
                  <td>Trailing Breakout</td>
                  <td>3%</td>
                  <td>SHORT</td>
                </tr>
                <tr>
                  <td>Custom Augmentations</td>
                  <td>57%</td>
                  <td>WAIT</td>
                </tr>
                <tr>
                  <td>Trailing Breakout</td>
                  <td>3%</td>
                  <td>SHORT</td>
                </tr>
                <tr>
                  <td>Custom Augmentations</td>
                  <td>57%</td>
                  <td>WAIT</td>
                </tr>
                <tr>
                  <td>Custom Augmentations</td>
                  <td>57%</td>
                  <td>WAIT</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  
  function TrendAnalyis() {

    





  return (
    <div>
      <div className="header--container">
        <div className="system--container">
          System:
          <div className="systemSwitch" onClick={() => {}}>
            Delta
          </div>
        </div>
        <div className="assets--container">
          <div className="AssetsSwitch" onClick={() => {}}>
            {localStorage.getItem("dataset")}
          </div>
          {price}
        </div>
      </div>
      <div className="table--container">
        <div className="mainSystemTable--container">
          <div className="mainTable">
            <table>
              <tr>
                <th>Metrics</th>
                {/* <th>value</th> */}
                <th>Output</th>
              </tr>
              <tr>
                <td>10-30</td>
                <td>{difference}</td>
                {/* <td></td> */}
              </tr>
              <tr>
                <td>10-200</td>
                <td>{difference200ema}</td>
                {/* <td></td> */}
              </tr>
              {/* <tr>
                <td>Trailing Breakout</td>
                <td>{difference}</td>
                <td>{differenceResult}</td>
              </tr>
              <tr>
                <td>Custom Augmentations</td>
                <td>57%</td>
                <td>WAIT</td>
              </tr> */}
            </table>
          </div>
          <div className="verdict--container">
              
            <div className="verdict">
            <br/>
              10-30: {differenceResult}
              <br/>
              <br/>
              10-200: {differenceResult200ema}
              <br/>
              <br/>
            
              <br/>
            
            </div>
          </div>
        </div>
        <div className="AdditionsSystem--container">
          <div className="AdditionsTitle"></div>
          <div className="AdditionsTable">
            <table>
              <tr>
                <th>Metrics</th>
                <th>value</th>
                <th>Output</th>
              </tr>
              <tr>
                <td>MACD Exits</td>
                <td>-</td>
                <td>{MacdExit}</td>
              </tr>
              <tr>
                <td>RSI Exit</td>
                <td>-</td>
                <td>{RSIExit}</td>
              </tr>
              <tr>
                <td>Trailing 50-Price</td>
                <td>{EMA50trailing}</td>
                <td>{EMA50trailingResult}</td>
              </tr>
              <tr>
                <td>Trailing 100-Price</td>
                <td>{EMA100trailing}</td>
                <td>{EMA100trailingResult}</td>
              </tr>
              <tr>
                <td>Summary</td>
                <td>-</td>
                <td>{MAsummary}</td>
              </tr>
              {/* <tr>
                <td>Custom Augmentations</td>
                <td>57%</td>
                <td>WAIT</td>
              </tr>
              <tr>
                <td>Custom Augmentations</td>
                <td>57%</td>
                <td>WAIT</td>
              </tr> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

  return (
    <>
      <TrendAnalyis />
    </>
  );
}

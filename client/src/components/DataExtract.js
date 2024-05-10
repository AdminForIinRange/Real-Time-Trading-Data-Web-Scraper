// import { useEffect, useState } from "react";
// import io from "socket.io-client";
// import "./Dashboard.css";
// import Dashboard from "./Dashboard";
// //i think day 4 idk i didnt sleep
// export default function DataExtract() {
//   const [price, setPrice] = useState("");
//   const [asset, setAsset] = useState(""); // Initialize asset state
//   const [RsiValue, setRsiValue] = useState("");
//   const [RsiSignal, setRsiSignal] = useState("");
//   const [CCIValue, setCCIValue] = useState("");
//   const [CCISignal, setCCISignal] = useState("");
//   const [ADIValue, setADIValue] = useState("");
//   const [ADISignal, setADISignal] = useState("");
//   const [AOValue, setAOValue] = useState("");
//   const [AOSignal, setAOSignal] = useState("");
//   const [MValue, setMValue] = useState("");
//   const [MSignal, setMSignal] = useState("");
//   const [MACDLValue, setMACDLValue] = useState("");
//   const [MACDLSignal, setMACDLSignal] = useState("");
//   const [SRFValue, setSRFValue] = useState("");
//   const [SRFSignal, setSRFSignal] = useState("");
//   const [WPRValue, setWPRValue] = useState("");
//   const [WPRSignal, setWPRSignal] = useState("");
//   const [BBPValue, setBBPValue] = useState("");
//   const [BBPSignal, setBBPSignal] = useState("");
//   const [UOValue, setUOValue] = useState("");
//   const [UOSignal, setUOSignal] = useState("");
//   const [EMA20Value, setEMA20Value] = useState("");
//   const [EMA20Signal, setEMA20Signal] = useState("");
//   const [EMA30Value, setEMA30Value] = useState("");
//   const [EMA30Signal, setEMA30Signal] = useState("");
//   const [EMA50Value, setEMA50Value] = useState("");
//   const [EMA50Signal, setEMA50Signal] = useState("");
//   const [EMA100Value, setEMA100Value] = useState("");
//   const [EMA100Signal, setEMA100Signal] = useState("");
//   const [EMA200Value, setEMA200Value] = useState("");
//   const [EMA200Signal, setEMA200Signal] = useState("");
//   const [SMA10Value, setSMA10Value] = useState("");
//   const [SMA10Signal, setSMA10Signal] = useState("");
//   const [SMA20Value, setSMA20Value] = useState("");
//   const [SMA20Signal, setSMA20Signal] = useState("");
//   const [SMA30Value, setSMA30Value] = useState("");
//   const [SMA30Signal, setSMA30Signal] = useState("");
//   const [SMA50Value, setSMA50Value] = useState("");
//   const [SMA50Signal, setSMA50Signal] = useState("");
//   const [SMA100Value, setSMA100Value] = useState("");
//   const [SMA100Signal, setSMA100Signal] = useState("");
//   const [SMA200Value, setSMA200Value] = useState("");
//   const [SMA200Signal, setSMA200Signal] = useState("");
//   const [IBLValue, setIBLValue] = useState("");
//   const [IBLSignal, setIBLSignal] = useState("");
//   const [VWMAValue, setVWMAValue] = useState("");
//   const [VWMASignal, setVWMASignal] = useState("");
//   const [HMAValue, setHMAValue] = useState("");
//   const [HMASignal, setHMASignal] = useState("");
//   const [OscillatorsSell, setOscillatorsSell] = useState("");
//   const [OscillatorsNeutral, setOscillatorsNeutral] = useState("");
//   const [OscillatorsBuy, setOscillatorsBuy] = useState("");
//   const [MovingAveragesSell, setMovingAveragesSell] = useState("");
//   const [MovingAveragesNeutral, setMovingAveragesNeutral] = useState("");
//   const [MovingAveragesBuy, setMovingAveragesBuy] = useState("");
//   const [SummarySell, setSummarySell] = useState("");
//   const [SummaryNeutral, setSummaryNeutral] = useState("");
//   const [SummaryBuy, setSummaryBuy] = useState("");

//   // system like onclick systemstwich setSystem(<systemNmae>) a terniy on return system === "<systemNmae>" ? return() : retrun()

//   useEffect(() => {
//     const storedAsset = localStorage.getItem("dataset");
//     setAsset(storedAsset); // Set the asset state with the value from localStorage
//     const socket = io("http://localhost:3001");
//     socket.on("connect", () => {
//       socket.emit("assetData", storedAsset);
//       socket.on("price", (data) => {
//         setPrice(data.message);
//       });
//       socket.on("TD", (data) => {
//         setRsiValue(data.RsiValue);
//         setRsiSignal(data.RsiSignal);
//         setCCIValue(data.CCIValue);
//         setCCISignal(data.CCISignal);
//         setADIValue(data.ADIValue);
//         setADISignal(data.ADISignal);
//         setAOValue(data.AOValue);
//         setAOSignal(data.AOSignal);
//         setMValue(data.MValue);
//         setMSignal(data.MSignal);
//         setMACDLValue(data.MACDLValue);
//         setMACDLSignal(data.MACDLSignal);
//         setSRFValue(data.SRFValue);
//         setSRFSignal(data.SRFSignal);
//         setWPRValue(data.WPRValue);
//         setWPRSignal(data.WPRSignal);
//         setBBPValue(data.BBPValue);
//         setBBPSignal(data.BBPSignal);
//         setUOValue(data.UOValue);
//         setUOSignal(data.UOSignal);
//         setEMA20Value(data.EMA20Value);
//         setEMA20Signal(data.EMA20Signal);
//         setEMA30Value(data.EMA30Value);
//         setEMA30Signal(data.EMA30Signal);
//         setEMA50Value(data.EMA50Value);
//         setEMA50Signal(data.EMA50Signal);
//         setEMA100Value(data.EMA100Value);
//         setEMA100Signal(data.EMA100Signal);
//         setEMA200Value(data.EMA200Value);
//         setEMA200Signal(data.EMA200Signal);
//         setSMA10Value(data.SMA10Value);
//         setSMA10Signal(data.SMA10Signal);
//         setSMA20Value(data.SMA20Value);
//         setSMA20Signal(data.SMA20Signal);
//         setSMA30Value(data.SMA30Value);
//         setSMA30Signal(data.SMA30Signal);
//         setSMA50Value(data.SMA50Value);
//         setSMA50Signal(data.SMA50Signal);
//         setSMA100Value(data.SMA100Value);
//         setSMA100Signal(data.SMA100Signal);
//         setSMA200Value(data.SMA200Value);
//         setSMA200Signal(data.SMA200Signal);
//         setIBLValue(data.IBLValue);
//         setIBLSignal(data.IBLSignal);
//         setVWMAValue(data.VWMAValue);
//         setVWMASignal(data.VWMASignal);
//         setHMAValue(data.HMAValue);
//         setHMASignal(data.HMASignal);
//         setOscillatorsSell(data.OscillatorsSell);
//         setOscillatorsNeutral(data.OscillatorsNeutral);
//         setOscillatorsBuy(data.OscillatorsBuy);
//         setMovingAveragesSell(data.MovingAveragesSell);
//         setMovingAveragesNeutral(data.MovingAveragesNeutral);
//         setMovingAveragesBuy(data.MovingAveragesBuy);
//         setSummarySell(data.SummarySell);
//         setSummaryNeutral(data.SummaryNeutral);
//         setSummaryBuy(data.SummaryBuy);
//       });
//     });

//     // Clean up the event listeners when the component unmounts
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div>
//    <Dashboard price="Your Price Value" 
//    RsiValue="Your RsiValue"
//    />
//     </div>


//   )
// }



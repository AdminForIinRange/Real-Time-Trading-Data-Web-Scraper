import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard"; // Import the correct component
import "./Systems.css";

import io from "socket.io-client";
import "./Dashboard.css";

export default function Systems() {
  const [price, setPrice] = useState("Loading...");
  const [asset, setAsset] = useState("Loading..."); // Initialize asset state
  const [RsiValue, setRsiValue] = useState("Loading...");
  const [RsiSignal, setRsiSignal] = useState("Loading...");
  const [CCIValue, setCCIValue] = useState("Loading...");
  const [CCISignal, setCCISignal] = useState("Loading...");
  const [ADIValue, setADIValue] = useState("Loading...");
  const [ADISignal, setADISignal] = useState("Loading...");
  const [AOValue, setAOValue] = useState("Loading...");
  const [AOSignal, setAOSignal] = useState("Loading...");
  const [MValue, setMValue] = useState("Loading...");
  const [MSignal, setMSignal] = useState("Loading...");
  const [MACDValue, setMACDValue] = useState("Loading...");
  const [MACDSignal, setMACDSignal] = useState("Loading...");
  const [SRFValue, setSRFValue] = useState("Loading...");
  const [SRFSignal, setSRFSignal] = useState("Loading...");
  const [WPRValue, setWPRValue] = useState("Loading...");
  const [WPRSignal, setWPRSignal] = useState("Loading...");
  const [BBPValue, setBBPValue] = useState("Loading...");
  const [BBPSignal, setBBPSignal] = useState("Loading...");
  const [UOValue, setUOValue] = useState("Loading...");
  const [UOSignal, setUOSignal] = useState("Loading...");
  const [EMA10Value, setEMA10Value] = useState("Loading...");
  const [EMA10Signal, setEMA10Signal] = useState("Loading...");
  const [EMA20Value, setEMA20Value] = useState("Loading...");
  const [EMA20Signal, setEMA20Signal] = useState("Loading...");
  const [EMA30Value, setEMA30Value] = useState("Loading...");
  const [EMA30Signal, setEMA30Signal] = useState("Loading...");
  const [EMA50Value, setEMA50Value] = useState("Loading...");
  const [EMA50Signal, setEMA50Signal] = useState("Loading...");
  const [EMA100Value, setEMA100Value] = useState("Loading...");
  const [EMA100Signal, setEMA100Signal] = useState("Loading...");
  const [EMA200Value, setEMA200Value] = useState("Loading...");
  const [EMA200Signal, setEMA200Signal] = useState("Loading...");
  const [SMA10Value, setSMA10Value] = useState("Loading...");
  const [SMA10Signal, setSMA10Signal] = useState("Loading...");
  const [SMA20Value, setSMA20Value] = useState("Loading...");
  const [SMA20Signal, setSMA20Signal] = useState("Loading...");
  const [SMA30Value, setSMA30Value] = useState("Loading...");
  const [SMA30Signal, setSMA30Signal] = useState("Loading...");
  const [SMA50Value, setSMA50Value] = useState("Loading...");
  const [SMA50Signal, setSMA50Signal] = useState("Loading...");
  const [SMA100Value, setSMA100Value] = useState("Loading...");
  const [SMA100Signal, setSMA100Signal] = useState("Loading...");
  const [SMA200Value, setSMA200Value] = useState("Loading...");
  const [SMA200Signal, setSMA200Signal] = useState("Loading...");
  const [IBLValue, setIBLValue] = useState("Loading...");
  const [IBLSignal, setIBLSignal] = useState("Loading...");
  const [VWMAValue, setVWMAValue] = useState("Loading...");
  const [VWMASignal, setVWMASignal] = useState("Loading...");
  const [HMAValue, setHMAValue] = useState("Loading...");
  const [HMASignal, setHMASignal] = useState("Loading...");
  const [OscillatorsSell, setOscillatorsSell] = useState("Loading...");
  const [OscillatorsNeutral, setOscillatorsNeutral] = useState("Loading...");
  const [OscillatorsBuy, setOscillatorsBuy] = useState("Loading...");
  const [MovingAveragesSell, setMovingAveragesSell] = useState("Loading...");
  const [MovingAveragesNeutral, setMovingAveragesNeutral] = useState("Loading...");
  const [MovingAveragesBuy, setMovingAveragesBuy] = useState("Loading...");
  const [SummarySell, setSummarySell] = useState("Loading...");
  const [SummaryNeutral, setSummaryNeutral] = useState("Loading...");
  const [SummaryBuy, setSummaryBuy] = useState("Loading...");

  const [difference, setDifference] = useState("Loading...");
  const [differenceResult, setDifferenceResult] = useState("Loading...");

  const [difference200ema, setdifference200ema] = useState("Loading...");
  const [differenceResult200ema, setDifferenceResult200ema] = useState("Loading...");

  const [MacdExit, setMacdExit] = useState("Loading...");

  const [MAsummary, setMAsummary] = useState("Loading...");

  const [RSIExit, setRSIExit] = useState("Loading...");

  const [EMA50trailing, setEMA50trailing] = useState("Loading...");

  const [EMA50trailingResult, setEMA50trailingResult] = useState("Loading...");



  const [EMA100trailing, setEMA100trailing] = useState("Loading...");


  const [EMA100trailingResult, setEMA100trailingResult] = useState("Loading...");

  //diff trailing allows for diff systems and resustls and riskkk



  useEffect(() => {
    const storedAsset = localStorage.getItem("dataset");
    setAsset(storedAsset);
    const socket = io("http://localhost:3001");
    socket.on("connect", () => {
      socket.emit("assetData", storedAsset);

      socket.on("TD", (data) => {
        setPrice(data.Price === "" ? "Loading..." : data.Price);
        setRsiValue(data.RsiValue);
        setRsiSignal(data.RsiSignal);
        setCCIValue(data.CCIValue);
        setCCISignal(data.CCISignal);
        setADIValue(data.ADIValue);
        setADISignal(data.ADISignal);
        setAOValue(data.AOValue);
        setAOSignal(data.AOSignal);
        setMValue(data.MValue);
        setMSignal(data.MSignal);
        setMACDValue(data.MACDValue);
        setMACDSignal(data.MACDSignal);
        setSRFValue(data.SRFValue);
        setSRFSignal(data.SRFSignal);
        setWPRValue(data.WPRValue);
        setWPRSignal(data.WPRSignal);
        setBBPValue(data.BBPValue);
        setBBPSignal(data.BBPSignal);
        setUOValue(data.UOValue);
        setUOSignal(data.UOSignal);
        setEMA10Value(data.EMA10Value);
        setEMA10Signal(data.EMA10Signal);
        setEMA20Value(data.EMA20Value);
        setEMA20Signal(data.EMA20Signal);
        setEMA30Value(data.EMA30Value);
        setEMA30Signal(data.EMA30Signal);
        setEMA50Value(data.EMA50Value);
        setEMA50Signal(data.EMA50Signal);
        setEMA100Value(data.EMA100Value);
        setEMA100Signal(data.EMA100Signal);
        setEMA200Value(data.EMA200Value);
        setEMA200Signal(data.EMA200Signal);
        setSMA10Value(data.SMA10Value);
        setSMA10Signal(data.SMA10Signal);
        setSMA20Value(data.SMA20Value);
        setSMA20Signal(data.SMA20Signal);
        setSMA30Value(data.SMA30Value);
        setSMA30Signal(data.SMA30Signal);
        setSMA50Value(data.SMA50Value);
        setSMA50Signal(data.SMA50Signal);
        setSMA100Value(data.SMA100Value);
        setSMA100Signal(data.SMA100Signal);
        setSMA200Value(data.SMA200Value);
        setSMA200Signal(data.SMA200Signal);
        setIBLValue(data.IBLValue);
        setIBLSignal(data.IBLSignal);
        setVWMAValue(data.VWMAValue);
        setVWMASignal(data.VWMASignal);
        setHMAValue(data.HMAValue);
        setHMASignal(data.HMASignal);
        setOscillatorsSell(data.OscillatorsSell);
        setOscillatorsNeutral(data.OscillatorsNeutral);
        setOscillatorsBuy(data.OscillatorsBuy);
        setMovingAveragesSell(data.MovingAveragesSell);
        setMovingAveragesNeutral(data.MovingAveragesNeutral);
        setMovingAveragesBuy(data.MovingAveragesBuy);
        setSummarySell(data.SummarySell);
        setSummaryNeutral(data.SummaryNeutral);
        setSummaryBuy(data.SummaryBuy);
      });
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const calculateDifferenceResult = (difference) => {
      const isBullTrend = EMA30Value <= EMA10Value;
     
      if (isBullTrend) {
        if (difference <= 0.05) {
          return "Delta below ~0.05, Wait, if in a Position consider exiting, Potential reversal/Stagnation";
        } else if (difference <= 0.07) {
          return "Delta ~0.7, Long if Experienced, else delta is still too low, Wait, if in a Position consider exiting, Potential reversal/Stagnation, Review Exit MACD";
        } else if (difference <= 0.1) {
          return "Delta ~0.1, Potential Long, Review Exit MACD";
        } else if (difference <= 0.12) {
          return "Delta ~0.12, Potential Long, Review Exit MACD";
        } else if (difference <= 0.14) {
          return "Delta ~0.14, Potential Long, Review Exit MACD";
        } else if (difference <= 0.16) {
          return "Delta ~0.16, Bull Trend Potential Long, Review Exit MACD";
        } else if (difference <= 0.18) {
          return "Delta ~0.18 Bull Trend Potential Long, Review Exit MACD";
        } else if (difference <= 0.2) {
          return "Delta ~0.2, Bull Trend, Hold, Review Exit MACD ";
        } else if (difference <= 0.22) {
          return "Delta ~0.22, Bull Trend, Hold, Review Exit MACD";
        } else if (difference <= 0.24) {
          return "Delta ~0.24, Bull Trend, Hold, consider exiting, 20% Potential reversal/Stagnation Review Exit MACD";
        } else if (difference <= 0.26) {
          return "Delta ~0.26, Bull Trend, Hold, consider exiting, 20% Potential reversal/Stagnation Review Exit MACD";
        } else if (difference <= 0.28) {
          return "Delta ~0.28,Bull Trend, Hold, consider exiting, 40% Potential reversal/Stagnation, Review Exit RSI";
        } else if (difference <= 0.3) {
          return "Delta ~0.3, Bull Trend, Hold, consider exiting, 40% Potential reversal/Stagnation, Review Exit RSI";
        } else if (difference <= 0.32) {
          return "Delta ~0.32, Bull Trend, Hold, consider exiting, 60% Potential reversal/Stagnation, Review Exit RSI";
        } else if (difference <= 0.34) {
          return "Delta ~0.34, Bull Trend, Hold, consider exiting, 60% Potential reversal/Stagnation, Review Exit RSI";
        } else if (difference <= 0.36) {
          return "Delta ~0.36,  Bull Trend, Hold, consider exiting, 80% Potential reversal/Stagnation, Review Exit RSI";
        } else if (difference <= 0.38) {
          return "Delta ~0.38, Bull Trend, Hold, consider exiting, 80% Potential reversal/Stagnation, Review Exit RSI";
        } else if (difference <= 0.4) {
          return "Delta ~0.4, Bull Trend, Hold, consider exiting, >90% Potential reversal/Stagnation, Review Exit RSI";
        } else if (difference <= 0.42) {
          return "Delta ~0.42, Bull Trend, Hold, consider exiting, >95% Potential reversal/Stagnation, Review Exit RSI";
        } else if (difference <= 0.44) {
          return "Delta ~0.44, Bull Trend, Hold, consider exiting, >96% Potential reversal/Stagnation, Review Exit RSI";
        } else if (difference <= 0.46) {
          return "Delta ~0.46, Bull Trend, Hold, consider exiting, >97% Potential reversal/Stagnation, Review Exit RSI";
        } else if (difference <= 0.48) {
          return "Delta ~0.48, Bull Trend, Hold, consider exiting, >98% Potential reversal/Stagnation, Review Exit RSI";
        } else if (difference <= 0.5) {
          return "Delta ~0.5, Bull Trend, Hold, consider exiting, >99% Potential reversal/Stagnation, Review Exit RSI";
        
        } else {
          return "Delta above 0.5, Very Heavy Bull Trend, Don't Enter, >99% Potential reversal/Stagnation/Glitch, Review Exit RSI";
        }

      } else {
        if (difference >= -0.02) {
          return "Delta below ~-0.02, Wait and consider exiting your position.";
        } else if (difference >= -0.04) {
          return "Delta ~-0.03, Potential Short, Exit Long Position";
        } else if (difference >= -0.06) {
          return "Delta ~-0.04, Short if confident, Exit Long Position";
        } else if (difference >= -0.08) {
          return "Delta ~-0.08, Short if confident, Exit Long Position";
        } else if (difference >= -0.1) {
          return "Delta ~-0.1, Short if confident, Exit Long Position";
        } else if (difference >= -0.2) {
          return "Delta ~-0.2, Short if confident, Exit Long Position";
        } else if (difference >= -0.4) {
          return "Delta ~-0.4, Short if confident, Exit Long Position";
        } else if (difference >= -0.6) {
          return "Delta ~-0.8, Short if confident, Exit Long Position";
        } else if (difference >= -0.8) {
          return "Delta ~-0.8, Short if confident, Exit Long Position";
        } else if (difference >= -1) {
          return "Delta ~-1, Short if confident, Exit Long Position";
        } else if (difference >= -1.2) {
          return "Delta ~-1.2, Short if confident, Exit Long Position";
        } else if (difference >= -1.4) {
          return "Delta ~-1.4, Short if confident, Exit Long Position";
        } else if (difference >= -1.6) {
          return "Delta ~-1.6, Short if confident, Exit Long Position";
        } else if (difference >= -1.8) {
          return "Delta ~-1.8, Short if confident, Exit Long Position";
        } else if (difference >= -2) {
          return "Delta ~-2, Short if confident, Exit Long Position";
        } else if (difference >= -2.2) {
          return "Delta ~-2.2, Short if confident, Exit Long Position";
        } else if (difference >= -2.4) {
          return "Delta ~-2.4, Short if confident, Exit Long Position";
        } else if (difference >= -2.6) {
          return "Delta ~-2.6, Short if confident, Exit Long Position";
        } else if (difference >= -2.8) {
          return "Delta ~-2.8, Short if confident, Exit Long Position";
        } else if (difference >= -3) {
          return "Delta ~-3, Short if confident, Exit Long Position";
        } else {
          return "Delta over -3, Very Heavy Bear Trend, Don't Enter, consider exiting your Position, Potential Reversal";
        }
      }
    };

    const calculateDifference = () => {
      const diff =
        EMA30Value > EMA10Value
          ? parseFloat(((EMA10Value - EMA30Value) / EMA30Value) * 100).toFixed(
              3
            )
          : parseFloat(((EMA10Value - EMA30Value) / EMA30Value) * 100).toFixed(
              3
            );
      return diff;
    };

    const diff = calculateDifference();
    const initialDifferenceResult = calculateDifferenceResult(diff);

    setDifference(diff);
    setDifferenceResult(initialDifferenceResult);
  }, [EMA30Value, EMA10Value]);

  //Aggregate
  //teh isses issnt my abbity to code, (i can code great this is in a prototype so its like my code has to be perfect it
  //just has to work) the isse is trying to make these systems accuete and understand what im doing, this has to be very accurture
  // so it takes alot of time thinking and trying convert into a fuctioning statement. the coding part is simlpe its the
  // other stuff thats hard

  //=============================================================================================================================
  //=============================================================================================================================
  //=============================================================================================================================
  //=============================================================================================================================

  useEffect(() => {
    const calculateDifferenceResult = (difference) => {
      const isBullTrend = EMA200Value < EMA10Value;
      if (isBullTrend) {
        if (difference <= 0.1) {
          return "Delta below ~0.1, Wait and consider exiting your current position.";
        } else if (difference <= 0.12) {
          return "Delta ~0.12, Long if confident, Exit Short Position";
        } else if (difference <= 0.14) {
          return "Delta ~0.14, Long if confident, Exit Short Position";
        } else if (difference <= 0.16) {
          return "Delta ~0.16, Long if confident, Exit Short Position";
        } else if (difference <= 0.18) {
          return "Delta ~0.18, Long if confident, Exit Short Position";
        } else if (difference <= 0.2) {
          return "Delta ~0.2, Long if confident, Exit Short Position";
        } else if (difference <= 0.4) {
          return "Delta ~0.4, Long if confident, Exit Short Position";
        } else if (difference <= 0.6) {
          return "Delta ~0.6, Long if confident, Exit Short Position";
        } else if (difference <= 0.8) {
          return "Delta ~0.8, Long if confident, Exit Short Position";
        } else if (difference <= 1) {
          return "Delta ~1, Long if confident, Exit Short Position";
        } else if (difference <= 2) {
          return "Delta ~2, Long if confident, Exit Short Position";
        } else if (difference <= 4) {
          return "Delta ~4, Long if confident, Exit Short Position";
        } else if (difference <= 6) {
          return "Delta ~6, Long if confident, Exit Short Position";
        } else if (difference <= 8) {
          return "Delta ~8, Long if confident, Exit Short Position consider exiting your current position, Potential Reversal";
        } else if (difference <= 10) {
          return "Delta ~10, Long if confident, Exit Short Position consider exiting your current position, Potential Reversal";
        } else if (difference <= 11) {
          return "Delta ~11, Long if confident, Exit Short Position consider exiting your current position, Potential Reversal";
        } else {
          return "Delta above 11, Very Heavy Bull Trend, Don't Enter, consider exiting your current position, Potential Reversal";
        }
      } else {
        if (difference >= -0.1) {
          return "Delta below ~-0.1, Wait and consider exiting your current position.";
        } else if (difference >= -0.12) {
          return "Delta ~-0.12, Short if confident, Exit Long Position";
        } else if (difference >= -0.14) {
          return "Delta ~-0.14, Short if confident, Exit Long Position";
        } else if (difference >= -0.16) {
          return "Delta ~-0.16, Short if confident, Exit Long Position";
        } else if (difference >= -0.18) {
          return "Delta ~-0.18, Short if confident, Exit Long Position";
        } else if (difference >= -0.2) {
          return "Delta ~-0.2, Short if confident, Exit Long Position";
        } else if (difference >= -0.4) {
          return "Delta ~-0.4, Short if confident, Exit Long Position";
        } else if (difference >= -0.6) {
          return "Delta ~-0.6, Short if confident, Exit Long Position";
        } else if (difference >= -0.8) {
          return "Delta ~-0.8, Short if confident, Exit Long Position";
        } else if (difference >= -1) {
          return "Delta ~-1, Short if confident, Exit Long Position";
        } else if (difference >= -2) {
          return "Delta ~-2, Short if confident, Exit Long Position";
        } else if (difference >= -4) {
          return "Delta ~-4, Short if confident, Exit Long Position";
        } else if (difference >= -6) {
          return "Delta ~-6, Short if confident, Exit Long Position";
        } else if (difference >= -8) {
          return "Delta ~-8, Short if confident, Exit Long Position consider exiting your current position, Potential Reversal";
        } else if (difference >= -10) {
          return "Delta ~-10, Short if confident, Exit Long Position consider exiting your current position, Potential Reversal";
        } else if (difference >= -11) {
          return "Delta ~-11, Short if confident, Exit Long Position consider exiting your current position, Potential Reversal";
        } else {
          return "Delta above 11, Very Heavy Bear Trend, Don't Enter, consider exiting your current position, Potential Reversal";
        }
      }
    };

    const calculateDifference = () => {
      const diff =
        EMA200Value > EMA10Value
          ? parseFloat(((EMA10Value - EMA200Value) / EMA200Value) * 100).toFixed(3)
          : parseFloat(((EMA10Value - EMA200Value) / EMA200Value) * 100).toFixed(3);
      return diff;
    };

    const diff = calculateDifference();
    const initialDifferenceResult = calculateDifferenceResult(diff);

    setdifference200ema(diff);
    setDifferenceResult200ema(initialDifferenceResult);
  }, [EMA200Value, EMA10Value]);

  //=============================================================================================================================
  //=============================================================================================================================
  //=============================================================================================================================
  //=============================================================================================================================


  
  useEffect(() => {
    const calculateMACDExit = () => {
      const currentTime = new Date().toLocaleTimeString();
      return `New value at ${currentTime}: Exit and ${MACDSignal} review Deltas `;
    };

    setMacdExit(calculateMACDExit());
  }, [MACDSignal]);

  //if macd switches 

  useEffect(() => {
    const calculateRSIExit = () => {
      if (RsiValue >= 70) {
        return "Exit with Long";
      } else if (RsiValue >= 75) {
        return "High RSI, Exit with Long";
      } else if (RsiValue >= 80) {
        return "Super High RSI, Exit with Long";
      } else if (RsiValue <= 30) {
        return "Exit with Short";
      } else if (RsiValue <= 25) {
        return "Low RSI, Exit with Short";
      } else if (RsiValue <= 20) {
        return "Super Low RSI, Exit with Short";
    } else {
        return "No decision";
      }
    }
  
    setRSIExit(calculateRSIExit());
  }, [difference, RsiValue]);
  

  useEffect(() => {
    const calculateMA = () => {
      if (MovingAveragesSell > MovingAveragesNeutral && MovingAveragesSell > MovingAveragesBuy) {
        return `Sell`;
      } else if (MovingAveragesNeutral > MovingAveragesSell && MovingAveragesNeutral > MovingAveragesBuy) {
        return "Neutral";
      } else if (MovingAveragesBuy > MovingAveragesSell && MovingAveragesBuy > MovingAveragesNeutral) {
        return "Buy";
      } else {
        // If none of the conditions are met, you can return a default value.
        return "No decision";
      }
    };

    setMAsummary(calculateMA());
  }, [MovingAveragesSell, MovingAveragesNeutral, MovingAveragesBuy]);


  

  useEffect(() => {
    const calculateDifferenceResult = (difference) => {
      const isBullTrend = EMA50Value <= price;
      if (isBullTrend) {
        if (difference <= 0.1) {
          return "Trailing 50 ~0.1, No decision.";
        } else if (difference <= 0.08) {
          return "Trailing 50 ~0.2, No decision.";
        } else if (difference <= 0.06) {
          return "Trailing 50 ~0.2, Wait and consider exiting your current position.";
        } else if (difference <= 0.04) {
          return "Trailing 50 ~0.2, consider exiting your current position.";
        } else if (difference <= 0.02) {
          return "Trailing 50 ~0.2, consider exiting your current position.";
        } else if (difference <= 0.00) {
          return "Trailing 50 ~0.00, Exit.";
  
        } else {
          return  `Trailing 50: ${difference}  No decision`;
        }
      } else {
        if (difference >= -0.1) {
          return "Trailing 50 ~0.1, No decision.";
        } else if (difference >= -0.08) {
          return "Trailing 50 ~0.2, No decision.";
        } else if (difference >= -0.06) {
          return "Trailing 50 ~0.2, Wait and consider exiting your current position.";
        } else if (difference >= -0.04) {
          return "Trailing 50 ~0.2, consider exiting your current position.";
        } else if (difference >= -0.02) {
          return "Trailing 50 ~0.2, consider exiting your current position.";
        } else if (difference >= -0.00) {
          return "Trailing 50 ~0.00, Exit.";
  
        } else {
          return  `Trailing 50: ${difference}  No decision`;
        }
      }
    };

    const calculateDifference = () => {
      const diff =
        EMA50Value > price
          ? parseFloat(((price - EMA50Value) / EMA50Value) * 100).toFixed(3)
          : parseFloat(((price - EMA50Value) / EMA50Value) * 100).toFixed(3);
      return diff;
    };

    const diff = calculateDifference();
    const initialDifferenceResult = calculateDifferenceResult(diff);

    setEMA50trailing(diff);
    setEMA50trailingResult(initialDifferenceResult);
  }, [EMA50Value, price]);



  
  useEffect(() => {
    const calculateDifferenceResult = (difference) => {
      const isBullTrend = EMA100Value <= price;
      if (isBullTrend) {
        if (difference >= 0.1) {
          return "Trailing 50 ~0.1, No decision.";
        } else if (difference >= 0.08) {
          return "Trailing 50 ~0.2, No decision.";
        } else if (difference >= 0.06) {
          return "Trailing 50 ~0.2, Wait and consider exiting your current position.";
        } else if (difference >= 0.04) {
          return "Trailing 50 ~0.2, consider exiting your current position.";
        } else if (difference >= 0.02) {
          return "Trailing 50 ~0.2, consider exiting your current position.";
        } else if (difference >= 0.00) {
          return "Trailing 50 ~0.00, Exit.";
  
        } else {
          return  `Trailing 50: ${difference}  No decision`;
        }
      } else {
        if (difference <= -0.1) {
          return "Trailing 50 ~0.1, No decision.";
        } else if (difference <= -0.08) {
          return "Trailing 50 ~0.2, No decision.";
        } else if (difference <= -0.06) {
          return "Trailing 50 ~0.2, Wait and consider exiting your current position.";
        } else if (difference <= -0.04) {
          return "Trailing 50 ~0.2, consider exiting your current position.";
        } else if (difference <= -0.02) {
          return "Trailing 50 ~0.2, consider exiting your current position.";
        } else if (difference <= -0.00) {
          return "Trailing 50 ~0.00, Exit.";
  
        } else {
          return  `Trailing 50: ${difference}  No decision`;
        }
      }
    };

    const calculateDifference = () => {
      const diff =
        EMA100Value > price
          ? parseFloat(((price - EMA100Value) / EMA100Value) * 100).toFixed(3)
          : parseFloat(((price - EMA100Value) / EMA100Value) * 100).toFixed(3);
      return diff;
    };

    const diff = calculateDifference();
    const initialDifferenceResult = calculateDifferenceResult(diff);

    setEMA100trailing(diff);
    setEMA100trailingResult(initialDifferenceResult);
  }, [EMA100Value, price]);




  // Next i gotta make a macd EXIT beacuse i did some long hours of backetsting and i found Macd exits are great! ":))"
  // i wont enforce rather suggest
  // all this hours of coding better pay off, i sleep liek 5 hours a day beacuse this project is giving me mental issues ahhaha
  //i love coding and now i cant live without it, i cant even spend one day without coding or thinking of code
  //if i dont code i feel bad, liek some type of withdrawl from a drug

  return (
    <div>
      <Navbar />
      <Dashboard
        // RSIwMACD={RSIwMACD}\
        EMA50trailing={EMA50trailing}

        EMA50trailingResult={EMA50trailingResult}
        EMA100trailing={EMA100trailing}
        EMA100trailingResult={EMA100trailingResult}







        RSIExit={RSIExit}
        difference200ema={difference200ema}
        differenceResult200ema={differenceResult200ema}
        MacdExit={MacdExit}
        MAsummary={MAsummary}
        differenceResult={differenceResult}
        difference={difference}

        
        price={price}
        asset={asset}
        RsiValue={RsiValue}
        RsiSignal={RsiSignal}
        CCIValue={CCIValue}
        CCISignal={CCISignal}
        ADIValue={ADIValue}
        ADISignal={ADISignal}
        AOValue={AOValue}
        AOSignal={AOSignal}
        MValue={MValue}
        MSignal={MSignal}
        MACDValue={MACDValue}
        MACDSignal={MACDSignal}
        SRFValue={SRFValue}
        SRFSignal={SRFSignal}
        WPRValue={WPRValue}
        WPRSignal={WPRSignal}
        BBPValue={BBPValue}
        BBPSignal={BBPSignal}
        UOValue={UOValue}
        UOSignal={UOSignal}
        EMA20Value={EMA20Value}
        EMA20Signal={EMA20Signal}
        EMA30Value={EMA30Value}
        EMA30Signal={EMA30Signal}
        EMA50Value={EMA50Value}
        EMA50Signal={EMA50Signal}
        EMA100Value={EMA100Value}
        EMA100Signal={EMA100Signal}
        EMA200Value={EMA200Value}
        EMA200Signal={EMA200Signal}
        SMA10Value={SMA10Value}
        EMA10Signal={EMA10Signal}
        SMA10Signal={SMA10Signal}
        SMA20Value={SMA20Value}
        SMA20Signal={SMA20Signal}
        SMA30Value={SMA30Value}
        SMA30Signal={SMA30Signal}
        SMA50Value={SMA50Value}
        SMA50Signal={SMA50Signal}
        SMA100Value={SMA100Value}
        SMA100Signal={SMA100Signal}
        SMA200Value={SMA200Value}
        SMA200Signal={SMA200Signal}
        IBLValue={IBLValue}
        IBLSignal={IBLSignal}
        VWMAValue={VWMAValue}
        VWMASignal={VWMASignal}
        HMAValue={HMAValue}
        HMASignal={HMASignal}
        OscillatorsSell={OscillatorsSell}
        OscillatorsNeutral={OscillatorsNeutral}
        OscillatorsBuy={OscillatorsBuy}
        MovingAveragesSell={MovingAveragesSell}
        MovingAveragesNeutral={MovingAveragesNeutral}
        MovingAveragesBuy={MovingAveragesBuy}
        SummarySell={SummarySell}
        SummaryNeutral={SummaryNeutral}
        SummaryBuy={SummaryBuy}
      />
    </div>
  );
}

import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});


import puppeteer from 'puppeteer'
import axios from "axios"
import {
  RsiValueXPath,
  RsiSignalXPath,
  CCIvalueXPath,
  CCISignalXPath,
  ADIvalueXPath,
  ADISignalXPath,
  AOvalueXPath,
  AOsignalXPath,
  MValueXPath,
  MsignalXPath,
  MACDLValueXPath,
  MACDLSignalXPath,
  SRFValueXPath,
  SRFSignalXPath,
  WPRValueXPath,
  WPRSignalXPath,
  BBPvalueXPath,
  BBPSignalXPath,
  UOValueXPath,
  UOSignalXPath,
  EMA20ValueXPath,
  EMA20SignalXPath,
  EMA30ValueXPath,
  EMA30SignalXPath,
  EMA50ValueXPath,
  EMA50SignalXPath,
  EMA100ValueXPath,
  EMA100SignalXPath,
  EMA200ValueXPath,
  EMA200SignalXPath,
  SMA10ValueXPath,
  SMA10SignalXPath,
  SMA20ValueXPath,
  SMA20SignalXPath,
  SMA30ValueXPath,
  SMA30SignalXPath,
  SMA50ValueXPath,
  SMA50SignalXPath,
  SMA100ValueXPath,
  SMA100SignalXPath,
  SMA200ValueXPath,
  SMA200SignalXPath,
  IBLValueXPath,
  IBLSignalXPath,
  VWMAValueXPath,
  VWMASignalXPath,
  HMAValueXPath,
  HMASignalXPath,
  OscillatorsSellXPath,
  OscillatorsNeutralXPath,
  OscillatorsBuyXPath,
  MovingAveragesSellXPath,
  MovingAveragesNeutralXPath,
  MovingAveragesBuyXPath,
  SummarySellXPath,
  SummaryNeutralXPath,
  SummaryBuyXPath,

} from './BodyXpaths.js';



// Now you have access to all these constants and can use them as needed in your code.


export async function scrapeData() {

  const browser = await puppeteer.launch({ headless: false }); // Set to true if you want to run it headless
    const page = await browser.newPage();




    await page.goto(`https://www.tradingview.com/symbols/GOLD/technicals`);


    await page.waitForXPath('//*[@id="5m"]/span[1]/span');

    const [elementHandleClick] = await page.$x('//*[@id="15m"]/span[1]/span');
    await elementHandleClick.click();

 
    setInterval(async () => {
  try {


    


    const [PriceElement] = await page.$x('//*[@id="js-category-content"]/div[1]/div[1]/div/div/div/div[3]/div[1]/div/div[1]/span[1]/span');
    const PriceText = await page.evaluate(element => element.textContent, PriceElement);
    
    const [RsiValueElement] = await page.$x(RsiValueXPath);
    const RsiValueText = await page.evaluate(element => element.textContent, RsiValueElement);

    const [RsiSignalElement] = await page.$x(RsiSignalXPath);
    const RsiSignalText = await page.evaluate(element => element.textContent, RsiSignalElement);

    const [CCIvalueElement] = await page.$x(CCIvalueXPath);
    const CCIvalueText = await page.evaluate((element) => element.textContent, CCIvalueElement);
  
    const [CCISignalElement] = await page.$x(CCISignalXPath);
    const CCISignalText = await page.evaluate((element) => element.textContent, CCISignalElement);
  
    const [ADIvalueElement] = await page.$x(ADIvalueXPath);
    const ADIvalueText = await page.evaluate((element) => element.textContent, ADIvalueElement);
  
    const [ADISignalElement] = await page.$x(ADISignalXPath);
    const ADISignalText = await page.evaluate((element) => element.textContent, ADISignalElement);
  
    const [AOvalueElement] = await page.$x(AOvalueXPath);
    const AOvalueText = await page.evaluate((element) => element.textContent, AOvalueElement);
  
    const [AOsignalElement] = await page.$x(AOsignalXPath);
    const AOsignalText = await page.evaluate((element) => element.textContent, AOsignalElement);
  
    const [MValueElement] = await page.$x(MValueXPath);
    const MValueText = await page.evaluate((element) => element.textContent, MValueElement);
  
    const [MsignalElement] = await page.$x(MsignalXPath);
    const MsignalText = await page.evaluate((element) => element.textContent, MsignalElement);
  
    const [MACDLValueElement] = await page.$x(MACDLValueXPath);
    const MACDLValueText = await page.evaluate((element) => element.textContent, MACDLValueElement);
  
    const [MACDLSignalElement] = await page.$x(MACDLSignalXPath);
    const MACDLSignalText = await page.evaluate((element) => element.textContent, MACDLSignalElement);
  
    const [SRFValueElement] = await page.$x(SRFValueXPath);
    const SRFValueText = await page.evaluate((element) => element.textContent, SRFValueElement);
  
    const [SRFSignalElement] = await page.$x(SRFSignalXPath);
    const SRFSignalText = await page.evaluate((element) => element.textContent, SRFSignalElement);
  
    const [WPRValueElement] = await page.$x(WPRValueXPath);
    const WPRValueText = await page.evaluate((element) => element.textContent, WPRValueElement);
  
    const [WPRSignalElement] = await page.$x(WPRSignalXPath);
    const WPRSignalText = await page.evaluate((element) => element.textContent, WPRSignalElement);
  
    const [BBPvalueElement] = await page.$x(BBPvalueXPath);
    const BBPvalueText = await page.evaluate((element) => element.textContent, BBPvalueElement);
  
    const [BBPSignalElement] = await page.$x(BBPSignalXPath);
    const BBPSignalText = await page.evaluate((element) => element.textContent, BBPSignalElement);
  
    const [UOValueElement] = await page.$x(UOValueXPath);
    const UOValueText = await page.evaluate((element) => element.textContent, UOValueElement);
  
    const [UOSignalElement] = await page.$x(UOSignalXPath);
    const UOSignalText = await page.evaluate((element) => element.textContent, UOSignalElement);
  
    const [EMA20ValueElement] = await page.$x(EMA20ValueXPath);
    const EMA20ValueText = await page.evaluate((element) => element.textContent, EMA20ValueElement);
  
    const [EMA20SignalElement] = await page.$x(EMA20SignalXPath);
    const EMA20SignalText = await page.evaluate((element) => element.textContent, EMA20SignalElement);
  
    const [EMA30ValueElement] = await page.$x(EMA30ValueXPath);
    const EMA30ValueText = await page.evaluate((element) => element.textContent, EMA30ValueElement);
  
    const [EMA30SignalElement] = await page.$x(EMA30SignalXPath);
    const EMA30SignalText = await page.evaluate((element) => element.textContent, EMA30SignalElement);
  
    const [EMA50ValueElement] = await page.$x(EMA50ValueXPath);
    const EMA50ValueText = await page.evaluate((element) => element.textContent, EMA50ValueElement);
  
    const [EMA50SignalElement] = await page.$x(EMA50SignalXPath);
    const EMA50SignalText = await page.evaluate((element) => element.textContent, EMA50SignalElement);
  
    const [EMA100ValueElement] = await page.$x(EMA100ValueXPath);
    const EMA100ValueText = await page.evaluate((element) => element.textContent, EMA100ValueElement);
  
    const [EMA100SignalElement] = await page.$x(EMA100SignalXPath);
    const EMA100SignalText = await page.evaluate((element) => element.textContent, EMA100SignalElement);
  
    const [EMA200ValueElement] = await page.$x(EMA200ValueXPath);
    const EMA200ValueText = await page.evaluate((element) => element.textContent, EMA200ValueElement);
  
    const [EMA200SignalElement] = await page.$x(EMA200SignalXPath);
    const EMA200SignalText = await page.evaluate((element) => element.textContent, EMA200SignalElement);
  
    const [SMA10ValueElement] = await page.$x(SMA10ValueXPath);
    const SMA10ValueText = await page.evaluate((element) => element.textContent, SMA10ValueElement);
  
    const [SMA10SignalElement] = await page.$x(SMA10SignalXPath);
    const SMA10SignalText = await page.evaluate((element) => element.textContent, SMA10SignalElement);
  
    const [SMA20ValueElement] = await page.$x(SMA20ValueXPath);
    const SMA20ValueText = await page.evaluate((element) => element.textContent, SMA20ValueElement);
  
    const [SMA20SignalElement] = await page.$x(SMA20SignalXPath);
    const SMA20SignalText = await page.evaluate((element) => element.textContent, SMA20SignalElement);
  
    const [SMA30ValueElement] = await page.$x(SMA30ValueXPath);
    const SMA30ValueText = await page.evaluate((element) => element.textContent, SMA30ValueElement);
  
    const [SMA30SignalElement] = await page.$x(SMA30SignalXPath);
    const SMA30SignalText = await page.evaluate((element) => element.textContent, SMA30SignalElement);
  
    const [SMA50ValueElement] = await page.$x(SMA50ValueXPath);
    const SMA50ValueText = await page.evaluate((element) => element.textContent, SMA50ValueElement);
  
    const [SMA50SignalElement] = await page.$x(SMA50SignalXPath);
    const SMA50SignalText = await page.evaluate((element) => element.textContent, SMA50SignalElement);
  
    const [SMA100ValueElement] = await page.$x(SMA100ValueXPath);
    const SMA100ValueText = await page.evaluate((element) => element.textContent, SMA100ValueElement);
  
    const [SMA100SignalElement] = await page.$x(SMA100SignalXPath);
    const SMA100SignalText = await page.evaluate((element) => element.textContent, SMA100SignalElement);
  
    const [SMA200ValueElement] = await page.$x(SMA200ValueXPath);
    const SMA200ValueText = await page.evaluate((element) => element.textContent, SMA200ValueElement);
  
    const [SMA200SignalElement] = await page.$x(SMA200SignalXPath);
    const SMA200SignalText = await page.evaluate((element) => element.textContent, SMA200SignalElement);
  
    const [IBLValueElement] = await page.$x(IBLValueXPath);
    const IBLValueText = await page.evaluate((element) => element.textContent, IBLValueElement);
  
    const [IBLSignalElement] = await page.$x(IBLSignalXPath);
    const IBLSignalText = await page.evaluate((element) => element.textContent, IBLSignalElement);
  
    const [VWMAValueElement] = await page.$x(VWMAValueXPath);
    const VWMAValueText = await page.evaluate((element) => element.textContent, VWMAValueElement);
  
    const [VWMASignalElement] = await page.$x(VWMASignalXPath);
    const VWMASignalText = await page.evaluate((element) => element.textContent, VWMASignalElement);
  
    const [HMAValueElement] = await page.$x(HMAValueXPath);
    const HMAValueText = await page.evaluate((element) => element.textContent, HMAValueElement);
  
    const [HMASignalElement] = await page.$x(HMASignalXPath);
    const HMASignalText = await page.evaluate((element) => element.textContent, HMASignalElement);
  
    const [OscillatorsSellElement] = await page.$x(OscillatorsSellXPath);
    const OscillatorsSellText = await page.evaluate((element) => element.textContent, OscillatorsSellElement);
  
    const [OscillatorsNeutralElement] = await page.$x(OscillatorsNeutralXPath);
    const OscillatorsNeutralText = await page.evaluate((element) => element.textContent, OscillatorsNeutralElement);
  
    const [OscillatorsBuyElement] = await page.$x(OscillatorsBuyXPath);
    const OscillatorsBuyText = await page.evaluate((element) => element.textContent, OscillatorsBuyElement);
  
    const [MovingAveragesSellElement] = await page.$x(MovingAveragesSellXPath);
    const MovingAveragesSellText = await page.evaluate((element) => element.textContent, MovingAveragesSellElement);
  
    const [MovingAveragesNeutralElement] = await page.$x(MovingAveragesNeutralXPath);
    const MovingAveragesNeutralText = await page.evaluate((element) => element.textContent, MovingAveragesNeutralElement);
  
    const [MovingAveragesBuyElement] = await page.$x(MovingAveragesBuyXPath);
    const MovingAveragesBuyText = await page.evaluate((element) => element.textContent, MovingAveragesBuyElement);
  
    const [SummarySellElement] = await page.$x(SummarySellXPath);
    const SummarySellText = await page.evaluate((element) => element.textContent, SummarySellElement);
  
    const [SummaryNeutralElement] = await page.$x(SummaryNeutralXPath);
    const SummaryNeutralText = await page.evaluate((element) => element.textContent, SummaryNeutralElement);
  
    const [SummaryBuyElement] = await page.$x(SummaryBuyXPath);
    const SummaryBuyText = await page.evaluate((element) => element.textContent, SummaryBuyElement);

    console.log("=========================");
    console.log(`Price: ${PriceText}`);
    console.log(`RSI Value: ${RsiValueText}`);
    console.log(`RSI Signal: ${RsiSignalText}`);
    console.log(`CCI Value: ${CCIvalueText}`);
    console.log(`CCI Signal: ${CCISignalText}`);
    console.log(`ADI Value: ${ADIvalueText}`);
    console.log(`ADI Signal: ${ADISignalText}`);
    console.log(`AO Value: ${AOvalueText}`);
    console.log(`AO Signal: ${AOsignalText}`);
    console.log(`M Value: ${MValueText}`);
    console.log(`M Signal: ${MsignalText}`);
    console.log(`MACDL Value: ${MACDLValueText}`);
    console.log(`MACDL Signal: ${MACDLSignalText}`);
    console.log(`SRF Value: ${SRFValueText}`);
    console.log(`SRF Signal: ${SRFSignalText}`);
    console.log(`WPR Value: ${WPRValueText}`);
    console.log(`WPR Signal: ${WPRSignalText}`);
    console.log(`BBP Value: ${BBPvalueText}`);
    console.log(`BBP Signal: ${BBPSignalText}`);
    console.log(`UO Value: ${UOValueText}`);
    console.log(`UO Signal: ${UOSignalText}`);
    console.log(`EMA 20 Value: ${EMA20ValueText}`);
    console.log(`EMA 20 Signal: ${EMA20SignalText}`);
    console.log(`EMA 30 Value: ${EMA30ValueText}`);
    console.log(`EMA 30 Signal: ${EMA30SignalText}`);
    console.log(`EMA 50 Value: ${EMA50ValueText}`);
    console.log(`EMA 50 Signal: ${EMA50SignalText}`);
    console.log(`EMA 100 Value: ${EMA100ValueText}`);
    console.log(`EMA 100 Signal: ${EMA100SignalText}`);
    console.log(`EMA 200 Value: ${EMA200ValueText}`);
    console.log(`EMA 200 Signal: ${EMA200SignalText}`);
    console.log(`SMA 10 Value: ${SMA10ValueText}`);
    console.log(`SMA 10 Signal: ${SMA10SignalText}`);
    console.log(`SMA 20 Value: ${SMA20ValueText}`);
    console.log(`SMA 20 Signal: ${SMA20SignalText}`);
    console.log(`SMA 30 Value: ${SMA30ValueText}`);
    console.log(`SMA 30 Signal: ${SMA30SignalText}`);
    console.log(`SMA 50 Value: ${SMA50ValueText}`);
    console.log(`SMA 50 Signal: ${SMA50SignalText}`);
    console.log(`SMA 100 Value: ${SMA100ValueText}`);
    console.log(`SMA 100 Signal: ${SMA100SignalText}`);
    console.log(`SMA 200 Value: ${SMA200ValueText}`);
    console.log(`SMA 200 Signal: ${SMA200SignalText}`);
    console.log(`IBL Value: ${IBLValueText}`);
    console.log(`IBL Signal: ${IBLSignalText}`);
    console.log(`VWMA Value: ${VWMAValueText}`);
    console.log(`VWMA Signal: ${VWMASignalText}`);
    console.log(`HMA Value: ${HMAValueText}`);
    console.log(`HMA Signal: ${HMASignalText}`);
    console.log(`Oscillators Sell: ${OscillatorsSellText}`);
    console.log(`Oscillators Neutral: ${OscillatorsNeutralText}`);
    console.log(`Oscillators Buy: ${OscillatorsBuyText}`);
    console.log(`Moving Averages Sell: ${MovingAveragesSellText}`);
    console.log(`Moving Averages Neutral: ${MovingAveragesNeutralText}`);
    console.log(`Moving Averages Buy: ${MovingAveragesBuyText}`);
    console.log(`Summary Sell: ${SummarySellText}`);
    console.log(`Summary Neutral: ${SummaryNeutralText}`);
    console.log(`Summary Buy: ${SummaryBuyText}`);

 

    
    await browser.close()

    


    io.on("connection", (socket) => {
      console.log(`User Connected: ${socket.id}`);
    
      socket.emit("price", `${PriceText.trim()}`);
    
      socket.on("clientMessage", (data) => {
        console.log(`Message from client: ${data}`);
      });
    
      
    
      
    });

   
    const data =  {
      Price: PriceText.trim(),
      RSI: {
        value: RsiValueText.trim(),
        signal: RsiSignalText.trim(),
      },
      CCI: {
        value: CCIvalueText.trim(),
        signal: CCISignalText.trim(),
      },
      ADI: {
        value: ADIvalueText.trim(),
        signal: ADISignalText.trim(),
      },
      AO: {
        value: AOvalueText.trim(),
        signal: AOsignalText.trim(),
      },
      M: {
        value: MValueText.trim(),
        signal: MsignalText.trim(),
      },
      MACDL: {
        value: MACDLValueText.trim(),
        signal: MACDLSignalText.trim(),
      },
      SRF: {
        value: SRFValueText.trim(),
        signal: SRFSignalText.trim(),
      },
      WPR: {
        value: WPRValueText.trim(),
        signal: WPRSignalText.trim(),
      },
      BBP: {
        value: BBPvalueText.trim(),
        signal: BBPSignalText.trim(),
      },
      UO: {
        value: UOValueText.trim(),
        signal: UOSignalText.trim(),
      },
      EMA20: {
        value: EMA20ValueText.trim(),
        signal: EMA20SignalText.trim(),
      },
      EMA30: {
        value: EMA30ValueText.trim(),
        signal: EMA30SignalText.trim(),
      },
      EMA50: {
        value: EMA50ValueText.trim(),
        signal: EMA50SignalText.trim(),
      },
      EMA100: {
        value: EMA100ValueText.trim(),
        signal: EMA100SignalText.trim(),
      },
      EMA200: {
        value: EMA200ValueText.trim(),
        signal: EMA200SignalText.trim(),
      },
      SMA10: {
        value: SMA10ValueText.trim(),
        signal: SMA10SignalText.trim(),
      },
      SMA20: {
        value: SMA20ValueText.trim(),
        signal: SMA20SignalText.trim(),
      },
      SMA30: {
        value: SMA30ValueText.trim(),
        signal: SMA30SignalText.trim(),
      },
      SMA50: {
        value: SMA50ValueText.trim(),
        signal: SMA50SignalText.trim(),
      },
      SMA100: {
        value: SMA100ValueText.trim(),
        signal: SMA100SignalText.trim(),
      },
      SMA200: {
        value: SMA200ValueText.trim(),
        signal: SMA200SignalText.trim(),
      },
      IBL: {
        value: IBLValueText.trim(),
        signal: IBLSignalText.trim(),
      },
      VWMA: {
        value: VWMAValueText.trim(),
        signal: VWMASignalText.trim(),
      },
      HMA: {
        value: HMAValueText.trim(),
        signal: HMASignalText.trim(),
      },
      Oscillators: {
        Sell: OscillatorsSellText.trim(),
        Neutral: OscillatorsNeutralText.trim(),
        Buy: OscillatorsBuyText.trim(),
      },
      MovingAverages: {
        Sell: MovingAveragesSellText.trim(),
        Neutral: MovingAveragesNeutralText.trim(),
        Buy: MovingAveragesBuyText.trim(),
      },
      Summary: {
        Sell: SummarySellText.trim(),
        Neutral: SummaryNeutralText.trim(),
        Buy: SummaryBuyText.trim(),
      },
    };
    



  
    return data
  } catch (error) {
    console.error('Puppeteer Error:', error);
    throw error;
  } ;


  
}, 5000);






}




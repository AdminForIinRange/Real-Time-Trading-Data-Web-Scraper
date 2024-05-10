
import axios from "axios";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { scrapeData } from "./scrapeData.js";
const app = express();
app.use(cors());
const server = http.createServer(app);
export const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
let socket;
export let id;
export let urlChange;
let intervalId = null;
io.on("connection", (socket) => {
  id = socket.id;
  console.log(`User Connected: ${socket.id}`);
  socket.on("assetData", (data) => {
    urlChange = data;
    console.log(data) // Set the urlChange variable
  });
});
server.listen(3001, () => {
  console.log("SERVER IS RUNNING ON 3001...");
});
function startScraping() {
  if (intervalId) {
    clearInterval(intervalId); // Clear the previous interval if it exists
  }
  intervalId = setInterval(scrapeData, 5000); // Start a new scraping interval
}

// Listen for changes in urlChange
let previousUrlChange = urlChange;
setInterval(() => {
  if (urlChange !== previousUrlChange) {
    previousUrlChange = urlChange;
    startScraping(); // URL has changed, so restart scraping
  }
}, 1000); // Check for changes every 1 second



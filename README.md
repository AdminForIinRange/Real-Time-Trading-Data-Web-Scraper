# Real-Time Trading Data Web Scraper (Read Disclaimer)

> **Disclaimer**  
> This Real-Time Trading Data Web Scraper is provided **solely for educational and demonstration purposes**. It is **not** intended to be used as a tool for live trading or financial decision-making.  
> 
> - **No Financial Advice**: The author and contributors are **not** licensed financial advisors. Nothing in this code or its output should be construed as investment advice. Always consult a qualified financial professional before making any trading decisions.  
> - **Accuracy & Liability**: Market data is inherently volatile and may be delayed, incomplete, or inaccurate. This tool is provided “as-is,” without warranties of any kind. The author disclaims all liability for any losses or damages arising from its use.  
> - **Compliance & Terms of Service**: Users must ensure their scraping activities comply with the terms of service of any data provider or website. Unauthorized or excessive scraping may violate legal or contractual terms.  
> - **No Warranty**: The author makes no representations or warranties regarding the reliability, suitability, or availability of the software, and disclaims liability for any interruptions or errors.  
> 
> Use this scraper responsibly and at your own risk.


Although Old this project allowed me to get better at backend systems, I built this project for a client who didn’t want to pay for an API, with the use of React, Puppeteer, Express, Socket.io and Animate.css. Though this project I learnt how to use puppeteer to scrape a webpage then emit the data to client side with socket.io without the need to use RESTful API (because it was slow) and I refined my node and express skills. 

## Key Features

- Utilizes Puppeteer for web scraping to gather real-time trading data.
- Implements Socket.io for real-time communication between the server and client without the need for a RESTful API.
- Utilizes Express for building the backend server.
- Incorporates Animate.css for adding pre-built animations to enhance user experience.

## Deployment

The project consists of both a server-side component and a client-side component. 

### Server Repository
- [GitHub Repository](https://github.com/AdminForIinRange/Trading-Project)

### Client Repository
- [GitHub Repository](https://github.com/AdminForIinRange/Trading-Project-client)

## Getting Started

To set up the project locally, follow these steps:

1. Clone the server repository: `git clone https://github.com/AdminForIinRange/Trading-Project.git`
2. Navigate into the server directory: `cd Trading-Project`
3. Install server dependencies: `npm install`
4. Start the server: `npm start`

5. Clone the client repository: `git clone https://github.com/AdminForIinRange/Trading-Project-client.git`
6. Navigate into the client directory: `cd Trading-Project-client`
7. Install client dependencies: `npm install`
8. Start the client: `npm start`

## Scripts

### Server

- `npm start`: Start the server using nodemon for automatic reloading.

### Client

- `npm start`: Start the React client.
- `npm run build`: Build the React application for production.
- `npm test`: Run tests.

## Dependencies

### Server

- **cors**: ^2.8.5
- **express**: ^4.18.2
- **puppeteer**: ^21.3.4
- **socket.io**: ^4.7.2
- **socket.io-client**: ^4.7.2

### Client

- **@chakra-ui/react**: ^2.8.1
- **@emotion/react**: ^11.11.1
- **@emotion/styled**: ^11.11.0
- **animate.css**: ^4.1.1
- **framer-motion**: ^10.16.4
- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **react-router-dom**: ^6.16.0
- **socket.io**: ^4.7.2
- **socket.io-client**: ^4.7.2

## Dev Dependencies

### Server

- **nodemon**: ^3.0.1

### Client

- **cross-env**: ^7.0.3

## Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to improve the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Special thanks to the creators and maintainers of React, Puppeteer, Express, Socket.io, and Animate.css for providing excellent tools and frameworks.
- Thanks to the open-source community for their valuable contributions and support.

## Contact

For any inquiries or feedback, feel free to reach out:

- Email: your.email@example.com
- Twitter: [@your_twitter_handle](https://twitter.com/your_twitter_handle)


import logo from './logo.svg';
import './App.css';
import StatisticCard from './components/StatisticCard';
import Chart from './components/Chart';
import EventsCalendar from './components/EventsCalendar' ;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Error from "./components/Error";



const theme = createTheme({
  typography: {
    fontFamily: "Manrope, sans-serif",
  },
});

function App() {
  const props = {
    January: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    February: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    March: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    April: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    May: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    June: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    July: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    August: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    September: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    October: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    November: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
    December: {
      five: Math.floor(Math.random() * 101),
      ten: Math.floor(Math.random() * 101),
      fifteen: Math.floor(Math.random() * 101),
      twenty: Math.floor(Math.random() * 101),
      twentyFive: Math.floor(Math.random() * 101),
      thirty: Math.floor(Math.random() * 101),
      thirtyFive: Math.floor(Math.random() * 101),
      fourty: Math.floor(Math.random() * 101),
      fourtyFive: Math.floor(Math.random() * 101),
      fifty: Math.floor(Math.random() * 101),
      fiftyFive: Math.floor(Math.random() * 101),
      sixty: Math.floor(Math.random() * 101),
    },
  };
  return (
    <div className="App">
        {/* <Chart props={props} /> */}
        <EventsCalendar /> 
        {/* <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Router>
        </ThemeProvider> */}
        {/* <Chart props={props} /> */}
        <StatisticCard/>
    </div>
    
    
  );
}

export default App;

// import logo from "./logo.svg";
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import AddProducts from "./pages/AddProducts";
import EventsCalendarPage from './pages/Calendar';
import StatisticCard from "./components/StatisticCard";
import Chart from "./components/Chart";

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
  const events = [
    {
      id: 0,
      image: 'https://via.placeholder.com/50', // Replace with your image URL
      title: 'Design Conference',
      date: 'Today 07:19 AM',
      address: '56 Davion Mission Suite 157',
      country: 'Meaghanberg',
    },
    {
      id: 1,
      image: 'https://via.placeholder.com/50', // Replace with your image URL
      title: 'Weekend Festival',
      date: '16 October 2019 at 5.00 PM',
      address: '853 Moore Flats Suite 158',
      country: 'Sweden',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/50', // Replace with your image URL
      title: 'Glastonbury Festival',
      date: '20-22 October 2019 at 8.00 PM',
      address: '646 Walter Road Apt. 571',
      country: 'Turks and Caicos Islands',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/50', // Replace with your image URL
      title: 'Ultra Europe 2019',
      date: '25 October 2019 at 10.00 PM',
      address: '506 Satterfield Tunnel Apt. 963',
      country: 'San Marino',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/50', // Replace with your image URL
      title: 'Ultra Europe 2020',
      date: '25 October 2019 at 10.00 PM',
      address: '506 Satterfield Tunnel Apt. 963',
      country: 'San Marino',
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/50', // Replace with your image URL
      title: 'Ultra dfgdffgdfgope 2020',
      date: '25 Octoberdfgdf 2019 at 10.00 PM',
      address: '506 Satdfgterfield Tunnel Apt. 963',
      country: 'San Mdfgdfarino',
    },
  ];
  return (
    <div className="App">
      {/* <Chart props={props} /> */}
      {/* <EventsCalendar />  */}
      {/* <EventsCalendarPage events={events} /> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Error />} />
            <Route path="/addProduct" element={<AddProducts />} />
            <Route
              path="/calendar"
              element={<EventsCalendarPage events={events} />}
            />
          </Routes>
        </Router>
      </ThemeProvider>
      {/* <Chart props={props} /> */}
      {/* <StatisticCard/> */}
    </div>
  );
}

export default App;

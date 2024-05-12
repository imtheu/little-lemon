import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/footer/footer";
import Header from "./components/layout/header/header";
import HomePage from "./components/pages/home";
import BookingPage from "./components/pages/booking";
import ConfirmedBooking from "./components/pages/confirmedBooking";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;

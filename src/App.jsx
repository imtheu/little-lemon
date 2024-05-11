import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header/header";
import HomePage from "./components/pages/homePage";
import BookingPage from "./components/pages/bookingPage";

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
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;

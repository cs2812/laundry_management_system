import { Box, Flex} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LaundryRequest from "./pages/LaundryRequest";
import RequestStatus from "./pages/RequestStatus";
import Profile from "./pages/Profile";
import SideBar from "./components/SideBar";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {

  return (
    <Box className="App">
      <Routes>
        <Route path="/" element={<><Navbar /><Flex><SideBar /><Dashboard /></Flex></>}/>
        <Route path="/laundry-request" element={<><Navbar /><Flex><SideBar /><LaundryRequest /></Flex></>}/>
        <Route path="/profile" element={<><Navbar/> <Flex><SideBar/><Profile /></Flex></>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<SignupPage />} />
        <Route path="/request-status" element={<RequestStatus />} />
      </Routes>
    </Box>
  );
}

export default App;

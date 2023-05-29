import { Box, Flex, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { AiFillDashboard } from "react-icons/ai";
import { BsFillFolderFill } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import LaundryRequest from "./pages/LaundryRequest";
import RequestStatus from "./pages/RequestStatus";
import Profile from "./pages/Profile";

function App() {
  let nav = [
    {
      route: "Dashboard",
      icon: <AiFillDashboard size="20px" />,
      arrow: "",
      navigation: "/profile",
    },
    {
      route: "Laundry Request",
      icon: <BsFillFolderFill size="20px" />,
      arrow: <BiChevronRight size={"20px"} />,
    },
    {
      route: "Request Status",
      icon: <BsFillFolderFill size="20px" />,
      arrow: <BiChevronRight size={"20px"} />,
    },
  ];
  // const navigate = useNavigate();

  useEffect(() => {
    // navigate("/profile")
  }, []);
  return (
    <Box className="App">
      {/* Navigation bar*/}
      <Navbar />

      <Flex>
        {/* Navigation box*/}
        <Box w={"20%"} h="90.5vh" bgColor={"#234465"} color={"#d0d6db"}>
          {nav.map((ele) => (
            <Flex
              p="1rem"
              pr={"30px"}
              cursor={"pointer"}
              justifyContent={"space-between"}
              _hover={{ bg: "gray.400", color: "black" }}
              onClick={() => {
                // navigate(ele.navigation);
              }}
            >
              <Flex>
                {ele.icon}
                <Text ml="6px" mt="-1.5" fontWeight={"400"} fontSize={"xl"}>
                  {ele.route}
                </Text>
              </Flex>
              <Text mt="3px">{ele.arrow}</Text>
            </Flex>
          ))}
        </Box>

        {/* Content box*/}
        <Box w={"80%"}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/laundry-request" element={<LaundryRequest />} />
            <Route path="/request-status" element={<RequestStatus />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Box>
      </Flex>
    </Box>
  );
}

export default App;

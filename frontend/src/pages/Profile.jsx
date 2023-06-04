import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import { TiCancel } from "react-icons/ti";
import {
  changePassword,
  changeProfile,
  changeProfileImage,
} from "../store/auth/auth.Action";
import axios from "axios";

const Profile = () => {
  const data = useSelector((store) => store.authReducer);
  const [selected, setSelected] = useState(null);
  const toast = useToast();
  const dispatch = useDispatch();
  const navitate = useNavigate();
  const [form, setName] = useState({
    userId: data.userId,
    newUsername: data.username,
  });
  const [password, setPassword] = useState({
    userId: data.userId,
    currentPassword: "",
    newPassword: "",
  });
  const handleChangePassword = () => {
    // console.log(password)
    dispatch(changePassword(password, toast));
  };
  const handleChangeProfile = () => {
    // console.log(form)
    dispatch(changeProfile(form, toast));
  };

  const handleSelectFile = (e) => {
    setSelected(e.target.files[0]);
  };
  const handleUpdateFile = () => {
    // console.log("selected", selected);
    let formdata = new FormData();
    formdata.append("file", selected);
    formdata.append("upload_preset", "ImageUploadByReact");
    formdata.append("cloud_name", "du5lflmib");
    axios
      .post("https://api.cloudinary.com/v1_1/du5lflmib/image/upload", formdata)
      .then((res) => {
        localStorage.setItem("userImage", res.data.url);
        dispatch(
          changeProfileImage(
            { userId: data.userId, avatar: res.data.url },
            toast
          )
        );
        // console.log(res.data.url);
        setSelected(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!data.isAuth) {
      navitate("/login");
    }
  }, [data.isAuth]);

  return (
    <Box bgColor="#f7f7f7" w="80%">
      {/* <------Profile----->*/}
      <Flex p="1rem" gap={"20px"}>
        <Box p="0.7rem" w="28%" bgColor="white" borderRadius={"10px"}>
          <Flex gap="20px">
            <Box
              shadow={"md"}
              bgColor={"#f2f2f2"}
              borderRadius={"50%"}
              p="0.3rem"
              h="120px"
              w="44%"
            >
              {data.userImage ? (
                <Image
                  src={data.userImage}
                  borderRadius={"50%"}
                  w="100%"
                  h="100%"
                  alt="Profile"
                />
              ) : (
                <Text
                  mt="45px"
                  textAlign={"center"}
                  fontSize={"14px"}
                  fontWeight={"500"}
                  color="black"
                >
                  Add Profile
                </Text>
              )}
            </Box>
            <Box ml="10px">
              <input
                onChange={(e) => handleSelectFile(e)}
                src=""
                style={{ display: "none" }}
                type="file"
                label="Image"
                name="myFile"
                id="file-upload"
                // accept=".jpg, .png, .jpeg"
                accept="image/*"
              />
              {!selected ? (
                <Button mt="40px" size={"sm"}>
                  <label htmlFor="file-upload" style={{ display: "flex" }}>
                    <Text>
                      <BiEdit size="25px" />
                    </Text>
                  </label>
                </Button>
              ) : (
                <Button
                  onClick={handleUpdateFile}
                  colorScheme="whatsapp"
                  mt="40px"
                  size={"sm"}
                >
                  <FiUpload /> <span style={{ marginLeft: "5px" }}>Update</span>{" "}
                </Button>
              )}
              {selected && (
                <Box>
                  <Button
                    onClick={() => {
                      setSelected(null);
                    }}
                    colorScheme="red"
                    size="sm"
                    mt="10px"
                  >
                    <TiCancel />{" "}
                    <span style={{ marginLeft: "9px" }}>Cancel</span>{" "}
                  </Button>
                </Box>
              )}
            </Box>
          </Flex>
        </Box>
        <Box w="65%" p="1rem" bgColor="white" borderRadius={"10px"}>
          <FormControl>
            <FormLabel>Update your username</FormLabel>
            <Input
              onChange={(e) =>
                setName({ ...form, newUsername: e.target.value })
              }
              fontWeight={"500"}
              value={form.newUsername}
              placeholder="Enter name"
            />
          </FormControl>
          <Button
            onClick={handleChangeProfile}
            colorScheme="blue"
            mt="10px"
            float={"right"}
          >
            Save
          </Button>
        </Box>
      </Flex>
      <Box p="1rem">
        <Divider fontSize={"2xl"} color="white" />
      </Box>

      {/* <------User Password Change----->*/}
      <Flex p="1rem">
        <Box p="1rem" w="30%">
          <Text fontSize={"2xl"} fontWeight={"500"}>
            Update Password
          </Text>
          <Text color="gray">
            Ensure your account is using a long, random password to stay secure.
          </Text>
        </Box>
        <Box w="65%" p="1rem" bgColor="white" borderRadius={"10px"}>
          <FormControl>
            <FormLabel>Current Password</FormLabel>
            <Input
              onChange={(e) =>
                setPassword({ ...password, currentPassword: e.target.value })
              }
              fontWeight={"500"}
              placeholder="Enter current Password"
            />
          </FormControl>
          <FormControl mt="20px">
            <FormLabel>New Password</FormLabel>
            <Input
              onChange={(e) =>
                setPassword({ ...password, newPassword: e.target.value })
              }
              fontWeight={"500"}
              placeholder="Enter new password"
            />
          </FormControl>
          <Button
            onClick={handleChangePassword}
            colorScheme="blue"
            mt="10px"
            float={"right"}
          >
            Save
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Profile;

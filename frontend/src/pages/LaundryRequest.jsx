import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";

const LaundryRequest = () => {
  const [form, setForm] = useState({
    pickupData: "",
    topwear: "",
    bottomwear: "",
    woolenCloth: "",
    others: "",
    serviceType: "",
    contactNumber: "",
    description: "",
  });

  const handleSubmit = () => {
    console.log(form);
  };
  return (
    <Box p="1rem" boxSizing="border-box">
      
      {/* Laundry Request Form*/}
      <Box>
        <Flex gap="10px">
          <FormControl>
            <FormLabel>Select Pickup Date</FormLabel>
            <Input
              onChange={(e) => setForm({ ...form, pickupData: e.target.value })}
              size="sm"
              type="datetime-local"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Topwear</FormLabel>
            <Input
              onChange={(e) => setForm({ ...form, topwear: e.target.value })}
              size="sm"
              placeholder="Tshirt, Top, Shirt"
            />
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel>Bottomwear</FormLabel>
          <Input
            onChange={(e) => setForm({ ...form, bottomwear: e.target.value })}
            size="sm"
            placeholder="Lower, jeans, Leggins"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Woolen Cloth</FormLabel>
          <Input
            onChange={(e) => setForm({ ...form, woolenCloth: e.target.value })}
            size="sm"
            placeholder="Woolen Cloth"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Others</FormLabel>
          <Input
            onChange={(e) => setForm({ ...form, others: e.target.value })}
            size="sm"
            placeholder="Others"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Select Service Type</FormLabel>
          <Select
            onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
            placeholder="- - - - - - - -"
          >
            <option value="fast">Fast Service</option>
            <option value="regular">Regular Service</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Contact Number</FormLabel>
          <Input
            onChange={(e) =>
              setForm({ ...form, contactNumber: e.target.value })
            }
            size="sm"
            type="number"
            placeholder="Contact Number"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            size="sm"
            placeholder="Description(if any)"
          />
        </FormControl>

        <Button onClick={handleSubmit} mt="10px" colorScheme="blue" w="100%">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default LaundryRequest;

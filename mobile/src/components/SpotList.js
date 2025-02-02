import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import api from "../services/api";

export default function SpotList({ tech }) {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    async function loadSpots() {
      const response = await api.get("/spots", {
        params: { tech }
      });
      console.log(response.data);
    }
    loadSpots();
  }, []);
  return <Text>{tech}</Text>;
}

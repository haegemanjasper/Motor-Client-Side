import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Voeg hier je inloglogica toe (bijv. API-aanroep, authenticatie, enz.)
    console.log("Inloggen met:", username, password);
  };

  return (
    <VStack spacing={4} align="stretch">
      <Box maxW="400px" p={8} borderWidth={4} borderRadius="md" boxShadow="lg">
        <VStack spacing={4}>
          <FormControl id="username">
            <FormLabel>Gebruikersnaam</FormLabel>
            <Input
              type="text"
              placeholder="Voer je gebruikersnaam in"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Wachtwoord</FormLabel>
            <Input
              type="password"
              placeholder="Voer je wachtwoord in"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="green" onClick={handleLogin}>
            Inloggen
          </Button>
          <Text mt={2} fontSize="sm">
            Nog geen account? Registreer hier.
          </Text>
          <Button
            colorScheme="yellow"
            mt={2} /* Voeg hier je registratielogica toe */
          >
            Registreer
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default LoginPage;

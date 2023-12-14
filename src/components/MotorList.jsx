import React from "react";
import Motors from "./Motor";
import { MOTOR_DETAILS } from "../api/mock_data";
import { Flex } from "@chakra-ui/react";

const MotorList = () => {
  const motors = MOTOR_DETAILS;

  return (
    <Flex wrap="wrap" justify="space-between">
      {motors.map((motor) => (
        <Motors {...motor} key={motor.id} />
      ))}
    </Flex>
  );
};

export default MotorList;

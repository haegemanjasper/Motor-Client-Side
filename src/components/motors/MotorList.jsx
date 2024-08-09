import React, { useContext } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Motor from "./Motor";
import { ShopContext } from "../../context/shop-context";

const MotorList = () => {
    const { motors, deleteMotor, editMotor, addToCart } =
        useContext(ShopContext);

    if (!motors || motors.length === 0) {
        return <Text textAlign="center">No motors available.</Text>;
    }

    return (
        <Box>
            <Flex wrap="wrap" justify="center" gap={6}>
                {motors.map((motor) => (
                    <Motor
                        key={motor.id}
                        motor={motor}
                        onAddToCart={() => addToCart(motor.id)}
                        onEdit={(updatedData) =>
                            editMotor(motor.id, updatedData)
                        }
                        onDelete={() => deleteMotor(motor.id)}
                    />
                ))}
            </Flex>
        </Box>
    );
};

export default MotorList;

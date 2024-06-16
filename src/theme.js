import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "Light",
    useSystemColorMode: false,
};

const theme = extendTheme({ config });
export default theme;

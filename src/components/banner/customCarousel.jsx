import React from "react";
import { Box, Image, IconButton } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerFoto1 from "../../assets/bannerFoto1.png";
import bannerFoto2 from "../../assets/bannerFoto2.png";
import bannerFoto3 from "../../assets/bannerFoto3.png";
import bannerFoto4 from "../../assets/bannerFoto4.png";
import bannerFoto5 from "../../assets/bannerFoto5.png";

export default function CustomCarousel() {
    const imageStyle = {
        width: "100%",
        height: "50%",
        objectFit: "cover",
    };

    const arrowStyles = {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
        width: 30,
        height: 30,
        cursor: "pointer",
        backgroundColor: "rgba(128, 128, 128, 0.5)",
        color: "#ffffff",
    };

    const ArrowPrev = ({ onClickHandler, hasPrev, label }) =>
        hasPrev && (
            <IconButton
                icon={<ChevronLeftIcon />}
                onClick={onClickHandler}
                aria-label={label}
                style={{ ...arrowStyles, left: 15 }}
            />
        );

    const ArrowNext = ({ onClickHandler, hasNext, label }) =>
        hasNext && (
            <IconButton
                icon={<ChevronRightIcon />}
                onClick={onClickHandler}
                aria-label={label}
                style={{ ...arrowStyles, right: 15 }}
            />
        );

    return (
        <Box width="100%" mx="auto">
            <Box borderRadius="lg" overflow="hidden">
                <Carousel
                    showStatus={false}
                    infiniteLoop={true}
                    swipeable={false}
                    emulateTouch={false}
                    showThumbs={false}
                    dynamicHeight={true}
                    renderArrowPrev={ArrowPrev}
                    renderArrowNext={ArrowNext}
                    interval={5000}
                >
                    <Box style={{ width: "100%", height: "100%" }}>
                        <Image
                            style={imageStyle}
                            src={bannerFoto1}
                            alt="Image 1"
                        />
                    </Box>
                    <Box style={{ width: "100%", height: "100%" }}>
                        <Image
                            style={imageStyle}
                            src={bannerFoto2}
                            alt="Image 2"
                        />
                    </Box>
                    <Box style={{ width: "100%", height: "100%" }}>
                        <Image
                            style={imageStyle}
                            src={bannerFoto3}
                            alt="Image 3"
                        />
                    </Box>
                    <Box style={{ width: "100%", height: "100%" }}>
                        <Image
                            style={imageStyle}
                            src={bannerFoto4}
                            alt="Image 4"
                        />
                    </Box>
                    <Box style={{ width: "100%", height: "100%" }}>
                        <Image
                            style={imageStyle}
                            src={bannerFoto5}
                            alt="Image 5"
                        />
                    </Box>
                </Carousel>
            </Box>
        </Box>
    );
}

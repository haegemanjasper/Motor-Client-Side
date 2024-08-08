import React from "react";
import { Box, Image, Text, Stack } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerFoto1 from "../../assets/bannerFoto1.png";
import bannerFoto2 from "../../assets/bannerFoto2.png";
import bannerFoto3 from "../../assets/bannerFoto3.png";
import bannerFoto4 from "../../assets/bannerFoto4.png";
import bannerFoto5 from "../../assets/bannerFoto5.png";

const carouselImages = [
    {
        src: bannerFoto1,
        alt: "Banner 1",
        title: "Explore the Best Bikes",
        description: "Find your perfect ride today!",
    },
    {
        src: bannerFoto2,
        alt: "Banner 2",
        title: "Adventure Awaits",
        description: "Discover new roads and adventures.",
    },
    {
        src: bannerFoto3,
        alt: "Banner 3",
        title: "Ultimate Performance",
        description: "Top performance and style.",
    },
    {
        src: bannerFoto4,
        alt: "Banner 4",
        title: "Ride with Confidence",
        description: "Unmatched reliability and power.",
    },
    {
        src: bannerFoto5,
        alt: "Banner 5",
        title: "Experience the Thrill",
        description: "Feel the excitement of the ride.",
    },
];

const CustomCarousel = () => {
    const imageContainerStyle = {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    };

    const imageStyle = {
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "cover",
    };

    return (
        <Box width="100%" position="relative" overflow="hidden">
            <Carousel
                showStatus={false}
                infiniteLoop={true}
                swipeable={true}
                emulateTouch={true}
                showThumbs={false}
                dynamicHeight={false}
                interval={5000}
                autoPlay={true}
                stopOnHover={true}
                transitionTime={500}
            >
                {carouselImages.map((image, index) => (
                    <Box key={index} position="relative" height="400px">
                        {" "}
                        <Box style={imageContainerStyle}>
                            <Image
                                style={imageStyle}
                                src={image.src}
                                alt={image.alt}
                            />
                        </Box>
                        <Box
                            position="absolute"
                            bottom="0"
                            left="0"
                            width="100%"
                            background="rgba(0, 0, 0, 0.5)"
                            color="white"
                            p={5}
                            textAlign="center"
                        >
                            <Stack spacing={3}>
                                <Text fontSize="2xl" fontWeight="bold">
                                    {image.title}
                                </Text>
                                <Text fontSize="lg">{image.description}</Text>
                            </Stack>
                        </Box>
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
};

export default CustomCarousel;

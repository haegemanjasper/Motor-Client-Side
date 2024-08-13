import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import Slider from "react-slick";
import { useDisclosure } from "@chakra-ui/react";
import BikeSlide from "../components/guestrentabike/BikeSlide";
import LoginRequiredModal from "../components/guestrentabike/LoginRequiredModal";
import imageMap from "../assets/imageMap";

const bikes = [
    {
        id: 1,
        name: "BMW",
        image: imageMap.BMW,
        description: "The ultimate driving machine.",
        rating: 5,
    },
    {
        id: 2,
        name: "Harley Davidson",
        image: imageMap["Harley Davidson"],
        description: "Iconic American motorcycle.",
        rating: 4,
    },
    {
        id: 3,
        name: "Honda",
        image: imageMap.Honda,
        description: "Reliable and high performance.",
        rating: 4.5,
    },
    {
        id: 4,
        name: "Kawasaki",
        image: imageMap.Kawasaki,
        description: "Sporty and powerful.",
        rating: 4,
    },
    {
        id: 5,
        name: "Yamaha",
        image: imageMap.Yamaha,
        description: "Innovative and adventurous.",
        rating: 4.5,
    },
    {
        id: 6,
        name: "KTM",
        image: imageMap.KTM,
        description: "High performance and agility.",
        rating: 4.7,
    },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
};

export default function RentABikePage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isLoggedIn = false; // Change this as needed

    return (
        <Container maxW="container.lg" py={10}>
            <Box textAlign="center">
                <Box mt={10} mb={8}>
                    <Heading as="h2" size="lg" mb={6}>
                        Most Liked Motorcycles
                    </Heading>
                    <Slider {...settings}>
                        {bikes.map((bike) => (
                            <BikeSlide
                                key={bike.id}
                                bike={bike}
                                onOpen={onOpen}
                                isLoggedIn={isLoggedIn}
                            />
                        ))}
                    </Slider>
                </Box>
            </Box>
            <LoginRequiredModal isOpen={isOpen} onClose={onClose} />
        </Container>
    );
}

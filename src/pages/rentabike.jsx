import React from "react";
import {
    Box,
    Heading,
    Text,
    Container,
    Image,
    Flex,
    Icon,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import icons for rating
import foto1 from "../assets/bmw.png";
import foto2 from "../assets/harley.png";
import foto3 from "../assets/honda.png";
import foto4 from "../assets/kawa.png";
import foto5 from "../assets/yamaha.png";
import foto6 from "../assets/ktm.png";

const bikes = [
    {
        id: 1,
        name: "BMW",
        image: foto1,
        description: "The ultimate driving machine.",
        rating: 5, // Rating out of 5
    },
    {
        id: 2,
        name: "Harley Davidson",
        image: foto2,
        description: "Iconic American motorcycle.",
        rating: 4, // Rating out of 5
    },
    {
        id: 3,
        name: "Honda",
        image: foto3,
        description: "Reliable and high performance.",
        rating: 4.5, // Rating out of 5
    },
    {
        id: 4,
        name: "Kawasaki",
        image: foto4,
        description: "Sporty and powerful.",
        rating: 4, // Rating out of 5
    },
    {
        id: 5,
        name: "Yamaha",
        image: foto5,
        description: "Innovative and adventurous.",
        rating: 4.5, // Rating out of 5
    },
    {
        id: 6,
        name: "KTM",
        image: foto6,
        description: "High performance and agility.",
        rating: 4.7, // Rating out of 5
    },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000,
    pauseOnHover: false,
};

const RatingStars = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (rating >= i + 1) {
            stars.push(<Icon key={i} as={FaStar} color="yellow.400" />);
        } else if (rating > i && rating < i + 1) {
            stars.push(<Icon key={i} as={FaStarHalfAlt} color="yellow.400" />);
        } else {
            stars.push(<Icon key={i} as={FaRegStar} color="yellow.400" />);
        }
    }
    return (
        <Flex justify="center" mt={2}>
            {stars}
        </Flex>
    );
};

export default function RentABikePage() {
    return (
        <Container maxW="container.lg" py={10}>
            <Box textAlign="center">
                <Box mt={10}>
                    <Heading as="h2" size="lg" mb={6}>
                        Most Liked Motorcycles
                    </Heading>
                    <Slider {...settings}>
                        {bikes.map((bike) => (
                            <Box
                                key={bike.id}
                                borderWidth={1}
                                borderRadius="md"
                                overflow="hidden"
                                p={4}
                                boxShadow="md"
                                bg="white"
                                height="400px" // Fixed height for the container
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                            >
                                <Box
                                    width="100%"
                                    height="200px" // Fixed height for the image container
                                    mb={4}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Image
                                        width="auto"
                                        height="100%"
                                        src={bike.image}
                                        alt={bike.name}
                                        borderRadius="md"
                                        objectFit="contain" // Adjust this to ensure proper display
                                    />
                                </Box>
                                <Box
                                    width="100%"
                                    p={4}
                                    textAlign="center"
                                    bg="white"
                                    borderTopWidth={1}
                                    borderColor="gray.200"
                                    flexGrow={1}
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="space-between"
                                >
                                    <Box>
                                        <Heading as="h3" size="md" mb={2}>
                                            {bike.name}
                                        </Heading>
                                        <Text
                                            fontSize="md"
                                            color="gray.600"
                                            mb={2}
                                        >
                                            {bike.description}
                                        </Text>
                                    </Box>
                                    <RatingStars rating={bike.rating} />
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Box>
        </Container>
    );
}

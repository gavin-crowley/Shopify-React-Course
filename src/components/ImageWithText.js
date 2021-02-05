import React from 'react';
import { Box, Flex, Text, Image, Heading, Button } from '@chakra-ui/react';

const ImageWithText = ({ image, heading, reverse, text }) => {

    const reverseSection = reverse ? 'row-reverse' : 'row'

    return (
        <Box>
            <Flex flexDir={['column', reverseSection]} w='100%'>
                <Image src={image} objectFit='cover' w={['100%', '50%']} />
                <Flex flexDir='column' w={['100%', '50%']} justifyContent='center' alignItems='center' p='2rem'>
                    <Heading p="2rem">
                        {heading && heading}
                    </Heading>
                    <Text p="2rem">
                        {text && text}
                    </Text>
                    <Button
                        w="10rem"
                        backgroundColor="#ff38db"
                        color="white"
                        _hover={{ opacity: "70%" }}
                    >
                        Buy Now
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
};

export default ImageWithText;

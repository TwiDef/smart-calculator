import React from 'react';
import { Button, Box } from '@chakra-ui/react';

const Numbers = (props) => {
    const nums = Array.from(Array(10).keys()).map(number => {
        return <Button
            key={number}
            w="80px"
            h="80px"
            margin="4px">
            {number}
        </Button>
    })
    return (
        <Box display="flex" flexWrap="wrap" w="15%">{nums}</Box>
    )

}

export default Numbers;
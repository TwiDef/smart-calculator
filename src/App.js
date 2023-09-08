
import { Box, Text } from '@chakra-ui/react';
import './App.css';
import Numbers from './components/Numbers';

function App() {
    return (
        <div className="App">
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                h="100vh">
                <Numbers />
            </Box>
        </div>
    );
}

export default App;

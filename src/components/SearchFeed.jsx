import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack } from '@mui/material'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos } from './';
import { useParams } from 'react-router-dom';
const SearchFeed = () => {

    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm]);

    return (
        <Stack sx={{
            flexDirection: { sx: "column", md: "row" }
        }}>
            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
                {/* <Typography variant="h4" fontWeight="550" mb={2} sx={{ color: 'white' }} >
                Here are videos for: <span style={{ color: '#F31503' }}>{searchTerm}</span>
            </Typography> */}

                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default SearchFeed
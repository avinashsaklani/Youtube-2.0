import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const SideBar = ({ selectedCategory, setSelectedCategory }) => (
    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: { sx: 'auto', md: '95%' },
            flexDirection: { md: 'column' },
        }}>
        {categories.map((category) => (
            <button className='category-btn'
                onClick={() => setSelectedCategory(category.name)}
                style={{
                    background: category.name === selectedCategory && '#FC1503',
                    color: 'white'
                }}>
                <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '5px' }}>{category.icon}</span>
                <span style={{ color: category.name === selectedCategory ? 'white' : 'rgba(255, 255, 255, 0.6)' }}>{category.name}</span>
            </button>
        ))}
    </Stack>
)


export default SideBar
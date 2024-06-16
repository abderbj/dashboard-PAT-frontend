import React from 'react';
import { Box, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import StarBorderRounded from '@mui/icons-material/StarBorderRounded';
import StarRounded from '@mui/icons-material/StarRounded';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const ToDoTask = ({ taskData, onSelect, onDelete, onToggleChecked, onToggleFavorite }) => {
    const selectTaskHandler = () => {
        onSelect(taskData.id);
    };

    const deleteTaskHandler = () => {
        onDelete(taskData.id);
    };

    const toggleFavoriteHandler = () => {
        onToggleFavorite(taskData.id);
    };

    const toggleCheckedHandler = () => {
        onToggleChecked(taskData.id);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 1.5,
                borderRadius: 1,
                border: taskData.isSelected ? 'none' : '1px solid #D5D5D5',
                backgroundColor: taskData.isSelected ? '#019ADD' : '#FBFCFF',
            }}
            onClick={selectTaskHandler}
        >
            <Box display={'flex'} alignItems="center">
                <Checkbox
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                    checked={taskData.isChecked}
                    onChange={toggleCheckedHandler}
                />
                <p style={{ margin: '0 8px' }}>{taskData.title}</p>
            </Box>

            <Box display={'flex'}>
                <IconButton aria-label="delete" onClick={deleteTaskHandler}>

                    {taskData.isSelected ? <DeleteIcon/> : <HighlightOffIcon/>}
                </IconButton>
                {taskData.isSelected ? null :<Checkbox
                    sx={{
                        color: '#B3B3B3',
                        '&.Mui-checked': {
                            color: '#FFD56D',
                            '& .MuiSvgIcon-root': { fontSize: 26 },
                        },
                        '& .MuiSvgIcon-root': { fontSize: 26 },
                    }}
                    icon={<StarBorderRounded />}
                    checkedIcon={<StarRounded />}
                    checked={taskData.isFavourite}
                    onChange={toggleFavoriteHandler}
                />}


            </Box>
        </Box>
    );
};

export default ToDoTask;

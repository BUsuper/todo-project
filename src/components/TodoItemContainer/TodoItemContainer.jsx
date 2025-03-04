import { Box } from '@mui/material/';
import { styled } from '@mui/material/styles';

export const TodoItemContainer = styled(Box)(({theme}) => ({
    border: "solid 1px",
    borderColor: theme.palette.divider,
    borderRadius:"5px",
    width:"80%",
    margin:"15px auto",
    transition:"box-shadow 0.5s",
    "&:hover": {
        boxShadow: "0px 0px 2px 0px black"
    },
}));
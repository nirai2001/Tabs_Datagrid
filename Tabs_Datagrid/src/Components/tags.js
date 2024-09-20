import { Chip as MuiChip, styled } from '@mui/material';

const StyledTag = styled(MuiChip)(({ theme, backgroundColor, color }) => ({
  height: '20px',
  borderRadius: '1rem',
  textTransform: 'capitalize',
  marginLeft: '10px',
  ...(color && { color: color }),
  ...(backgroundColor && { backgroundColor: backgroundColor }),
}));

const Tags = ({ label, variant = 'outlined', customSx = {}, backgroundColor, color, ...props }) => {
  return (
    <StyledTag
      label={label}
      variant={variant}
      sx={{
        ...customSx,
      }}
      backgroundColor={backgroundColor}
      color={color}
      {...props}
    />
  );
};

export default Tags;

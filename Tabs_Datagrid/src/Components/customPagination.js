import {
	Box,
	MenuItem,
	Pagination,
	Select,
	Stack,
	styled,
	Typography
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material'
import React from 'react'

const StyledPagination = styled(Pagination)(() => ({
	'& .Mui-selected': {
		backgroundColor: '#003C71 !important',
		color: '#ffffff !important',
		fontWeight: '600'
	},
	'& .Mui-selected:hover': {
		backgroundColor: '#003C71 !important',
		color: '#ffffff !important'
	},
	'& .MuiPaginationItem-page': {
		// fontFamily: "Exo !important",
		fontSize: '14px',
		color: '#333F48'
	},
	'& .MuiPaginationItem-root': {
		margin: '0px',
		minWidth: '28px',
		height: '28px'
	},
	'& .MuiPaginationItem-icon': {
		fontSize: '1.7rem'
	}
}))

const StyeldTypography = styled(Typography)(() => ({
	margin: '8px',
	// fontFamily: "Exo",
	fontSize: '14px',
	color: '#7C878E'
}))

const CustomPagination = ({
	rowsPerPage,
	pageCount,
	page,
	handleChangeRowsPerPage,
	handleChangePage,
	contentHeading = 'Rows per page',
	options
}) => {
	return (
		<Stack
			display="flex"
			alignItems="center"
			justifyContent="flex-end" // Align content to the right
			flexDirection="row"
			padding="10px"
		>
			<Box display="flex" alignItems="center" justifyContent="space-around">
				<StyeldTypography>{contentHeading}:</StyeldTypography>
				<Select
					value={rowsPerPage}
					onChange={handleChangeRowsPerPage}
					inputProps={{ 'aria-label': 'rows per page' }}
					size="small"
					sx={{
						'& .MuiOutlinedInput-notchedOutline': {
							border: 'none'
						},
						'& .MuiSelect-icon': {
							color: '#003C71'
						},
						'& .MuiInputBase-input': {
							padding: '0px'
						}
					}}
				>
					{options.map((option) => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
				</Select>
			</Box>
			<StyledPagination
				count={pageCount}
				page={page}
				onChange={handleChangePage}
			/>
		</Stack>
	)
}

export default CustomPagination
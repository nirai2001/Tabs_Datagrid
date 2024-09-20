import React from "react";
import {
  Box,
  Stack,
  Tabs,
  Tab,
  Typography,
  styled,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";

export default function CustomThemeTextField({ tabData }) {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        backgroundColor: "#EAEBEB",
        alignSelf:"flex-start",
        padding: "6px",
        borderRadius: "6px",
        display: "inline-block", // Only wraps the content
      }}
    >
      <Stack direction="row" gap={2} alignItems="flex-start">
        <Tabs
          orientation="horizontal"
          indicatorColor="white"
          value={value}
          onChange={(_event, newValue) => setValue(newValue)}
          sx={{
            "& .MuiTabs-flexContainer": {
              gap: 1,
              justifyContent: "flex-start", // Align tabs to the left
            },
          }}
        >
          {tabData.map((tab, index) => (
            <StyledTab
              key={index}
              label={
                <Stack direction="row" alignItems="center" gap={1}>
                  <Box>
                    <Typography whiteSpace="nowrap" sx={{ fontWeight: 500 }}>
                      {tab.label}
                    </Typography>
                  </Box>
                </Stack>
              }
            />
          ))}
        </Tabs>
      </Stack>
    </Box>
  );
}

const StyledTab = styled(Tab)(({ theme }) => ({
  alignItems: "center",
  borderColor: grey[300],
  textTransform: "none",
  backgroundColor: "#EAEBEB",
  borderRadius: "5px",
  padding: "4px 8px",
  transition: "all 0.2s ease-in-out",
  "& p": {
    color: grey[600],
  },
  "& svg": {
    fontSize: 30,
    color: grey[500],
  },
  "&.Mui-selected, &:hover": {
    backgroundColor: "#fff",
    boxShadow: "0px 2px 9px -3px #333F4840",
    "& p": {
      color: "#333F48",
    },
    "& svg": {
      color: blue[400],
    },
  },
}));

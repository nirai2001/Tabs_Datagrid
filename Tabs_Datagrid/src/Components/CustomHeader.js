import React from 'react';
import SwapVertIcon from "@mui/icons-material/SwapVert";

const CustomHeader = ({ headerName }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    }}
  >
    {headerName}
    <SwapVertIcon style={{ marginLeft: 10, fontSize: "16px", color: "#1976d2" }} />
  </div>
);

export default CustomHeader;

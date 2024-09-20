import * as React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import CustomHeader from "./CustomHeader";
import ActionButtons from "./ActionsButton";
import RowEditDrawer from "./RowEditDrawer";
import CustomPaginationComponent from "./CustomPaginationComponent";
import Tags from "./tags";

const rows = [
    {
      id: 1,
      Entity: "Company A",
      UtilityUsage: "Electricity",
      Audit: "Passed",
      LogicalName: 101,
      CreatedBy: "John Doe",
    },
    {
      id: 2,
      Entity: "Company B",
      UtilityUsage: "Water",
      Audit: "Failed",
      LogicalName: 102,
      CreatedBy: "Jane Smith",
    },
    {
      id: 3,
      Entity: "Company C",
      UtilityUsage: "Gas",
      Audit: "Pending",
      LogicalName: 103,
      CreatedBy: "Mike Johnson",
    },
    {
      id: 4,
      Entity: "Company D",
      UtilityUsage: "Electricity",
      Audit: "Passed",
      LogicalName: 104,
      CreatedBy: "Emily Davis",
    },
    {
      id: 5,
      Entity: "Company E",
      UtilityUsage: "Water",
      Audit: "Passed",
      LogicalName: 105,
      CreatedBy: "Chris Brown",
    },
    {
      id: 6,
      Entity: "Company f",
      UtilityUsage: "Water",
      Audit: "Passed",
      LogicalName: 106,
      CreatedBy: "gopal Brown",
    },
  ];
  

export default function DataGridWithDrawer() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [entity, setEntity] = React.useState("");
  const [logicalName, setLogicalName] = React.useState("");
  const [addToUtility, setAddToUtility] = React.useState(false);
  const [enableAudit, setEnableAudit] = React.useState(false);
  const [totalCount, setTotalCount] = React.useState(rows.length);
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const pageCount = Math.ceil(totalCount / rowsPerPage);

  const handlePageChange = (e, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(Number(event.target.value));
    setPage(1);
  };

  const handleEdit = (row) => {
    setSelectedRow(row);
    setEntity(row.Entity);
    setLogicalName(row.LogicalName);
    setAddToUtility(false);
    setEnableAudit(false);
    setDrawerOpen(true);
  };

  const handleSave = () => {
    console.log("Saved:", { entity, logicalName, addToUtility, enableAudit });
    setDrawerOpen(false);
  };

  const handleCancel = () => setDrawerOpen(false);

  const columns = [
    { field: "Entity", headerName: "Entity", width: 150, renderHeader: () => <CustomHeader headerName="Entity" /> },
    { field: "UtilityUsage", headerName: "Utility Usage", width: 150, renderHeader: () => <CustomHeader headerName="Utility Usage" />,
      renderCell: (params) => <Tags backgroundColor={"#FFF2E5"} color={"#E57916"} label={params.row.UtilityUsage.toString()} customSx={{ borderRadius: "4px" }} />
    },
    { field: "Audit", headerName: "Audit", width: 150, renderHeader: () => <CustomHeader headerName="Audit" /> },
    { field: "LogicalName", headerName: "Logical Name", width: 150, renderHeader: () => <CustomHeader headerName="LogicalName" /> },
    { field: "CreatedBy", headerName: "Created By", width: 150, renderHeader: () => <CustomHeader headerName="CreatedBy" /> },
    { field: "edit", headerName: "Edit", width: 150, renderCell: (params) => <ActionButtons row={params.row} handleEdit={handleEdit} />, renderHeader: () => <CustomHeader headerName="Actions" /> },
  ];

  const slicedRows = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <Box sx={{ height: 400, maxWidth: 1000, margin: "0 auto" }}>
      <DataGrid
        rows={slicedRows}
        columns={columns}
        disableColumnMenu
        disableRowSelectionOnClick
        disableAutosize
        autoHeight
        pagination
        page={page}
        rowsPerPage={rowsPerPage}
        pageSize={rowsPerPage}
        onPageChange={handlePageChange}
        onPageSizeChange={handleChangeRowsPerPage}
        slots={{ pagination: CustomPaginationComponent }}
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f0f0f0",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100% !important",
            whiteSpace: "normal",
            lineHeight: "1.2",
            padding: "8px",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: "1.2",
            whiteSpace: "normal",
            overflow: "visible",
          },
          "& .MuiDataGrid-row": {
            maxHeight: "none !important",
          },
          "& .MuiDataGrid-renderingZone": {
            maxHeight: "none !important",
          },
          "& .MuiDataGrid-virtualScrollerContent": {
            maxHeight: "none !important",
          },
          "& .MuiDataGrid-sortIcon": {
            display: "none !important",
          },
        }}
      />
      <RowEditDrawer
        drawerOpen={drawerOpen}
        handleCloseDrawer={() => setDrawerOpen(false)}
        entity={entity}
        setEntity={setEntity}
        logicalName={logicalName}
        setLogicalName={setLogicalName}
        addToUtility={addToUtility}
        setAddToUtility={setAddToUtility}
        enableAudit={enableAudit}
        setEnableAudit={setEnableAudit}
        handleSave={handleSave}
        handleCancel={handleCancel}
        selectedRow={selectedRow}
      />
    </Box>
  );
}

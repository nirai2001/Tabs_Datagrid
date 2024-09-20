import React from "react";
import CustomPagination from "./customPagination";

const CustomPaginationComponent = ({
  rowsPerPage,
  pageCount,
  page,
  handleChangeRowsPerPage,
  handleChangePage
}) => (
  <CustomPagination
    rowsPerPage={rowsPerPage}
    pageCount={pageCount}
    page={page}
    handleChangeRowsPerPage={handleChangeRowsPerPage}
    handleChangePage={handleChangePage}
    options={[5, 10, 25, 50]}
  />
);

export default CustomPaginationComponent;

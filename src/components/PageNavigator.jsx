import { Container, Pagination } from "@mui/material";

const PageNavigator = ({ totalPages, handleChange }) => {
  return (
    <Container maxWidth="sm">
      <Pagination
        count={totalPages}
        onChange={handleChange}
        showFirstButton
        showLastButton
        color="primary"
      />
    </Container>
  );
};

export default PageNavigator;

import {
  Card,
  CardContent,
  Typography,
  Divider,
  Paper,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

const Rocket = ({ details }) => {
    return (
      <Card sx={{ minWidth: 300 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {details.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {details.country}
          </Typography>
          <Divider />
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    Height: {details.height.meters + "m, "}
                    Diameter: {details.diameter.meters + "m, "}
                    Mass: {details.mass.kg + "kg"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>First Flight: {details.first_flight}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Stages: {details.stages}, Landing legs: {details.landing_legs.number}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    );
};

export default Rocket;

/**
 *  Credits:
 *  1. https://mui.com/material-ui/react-popover/
 */

import { useEffect, useState } from "react";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Container,
  Popover,
  Fab,
} from "@mui/material";

import { fetchSpaceXLaunchData } from "./fetch";
import PageNavigator from "../../components/PageNavigator";
import { RocketLaunch } from "@mui/icons-material";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import NavigationIcon from "@mui/icons-material/Navigation";

import Rocket from "../../components/Rocket";

const Launches = () => {
  const [spaceXLaunches, setSpaceXLaunches] = useState({ docs: [] });
  const [page, setPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await fetchSpaceXLaunchData(page - 1);
      if (error) {
        setSpaceXLaunches({ docs: [] });
      } else {
        setSpaceXLaunches(data);
      }
    })();
  }, [page]);

  const { docs, totalDocs, totalPages } = spaceXLaunches;

  const handlePageChange = (event, value) => {
    setPage(value);
    console.log(docs);
  };

  const navigateToExternalUrl = (link) => {
    if (link) {
      console.log(link);
      window.open(link);
    }
  };

  const showRocketDetails = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const hideRocketDetails = () => {
    setAnchorEl(null);
  };

  // Convert the UTC date to YYYY
  const yearFromDate = (dateString) => new Date(dateString).getUTCFullYear();

  return (
    <Container>
      <TableContainer component={Paper} sx={{ m: 2 }}>
        <Table sx={{ mindWidth: 650 }} aria-label="Table of SpaceX Launches">
          <TableHead>
            <TableRow>
              <TableCell>PRESSKIT</TableCell>
              <TableCell>FLIGHT NUMBER</TableCell>
              <TableCell>FLIGHT DATE</TableCell>
              <TableCell>LAUNCH NAME</TableCell>
              <TableCell>ROCKET NAME</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {docs.map((doc) => (
              <TableRow key={doc.id} style={{ cursor: "pointer" }}>
                <TableCell
                  onClick={() => navigateToExternalUrl(doc.links.presskit)}
                >
                  {doc.links.presskit && (
                    <RocketLaunch
                      color="primary"
                      style={{ cursor: "pointer" }}
                    />
                  )}
                  {!doc.links.presskit && <DoNotDisturbIcon color="error" />}
                </TableCell>
                <TableCell>{doc.flight_number}</TableCell>
                <TableCell>{yearFromDate(doc.date_utc)}</TableCell>
                <TableCell>{doc.name}</TableCell>
                <TableCell>
                  <Fab variant="extended" color="primary" onClick={showRocketDetails}>
                    <NavigationIcon sx={{ mr: 1 }} />
                    {doc.rocket.name}
                  </Fab>
                  <Popover
                    id={doc.rocket.name}
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={hideRocketDetails}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <Rocket details={doc.rocket} />
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PageNavigator
        currentPage={1}
        totalDocs={totalDocs}
        totalPages={totalPages}
        page={page}
        handleChange={handlePageChange}
      />
    </Container>
  );
};

export default Launches;

import { Card } from "@mui/material";

const Rocket = ({ details }) => {
    return (
        <Card>
            <div>{details.name}</div>
        </Card>
    );
};

export default Rocket;
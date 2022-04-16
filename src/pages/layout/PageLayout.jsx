import { CssBaseline } from "@mui/material";

const PageLayout = ({ children }) => {
    return (
        <>
            <CssBaseline />
            {children}
        </>
    );
};

export default PageLayout;
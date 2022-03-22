import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import { Button } from "@mui/material";
import DashboardHome from "./DashboardHome";
import MakeAdmin from "./MakeAdmin";
import useAuth from "../../hooks/useAuth";
import AdminRoute from "../Login/AdminRoute";
import Payment from "./Payment";
import MyAppointment from "./MyAppointment";
import ManageAppointment from "./ManageAppointment";
import ManageAllReview from "./ManageAllReview";
import AddDoctor from "./AddDoctor";
const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, logOut } = useAuth();
console.log(admin)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let { path, url } = useRouteMatch();
  const drawer = (
    <div>
      <Toolbar />

      <Link
        to="/"
        style={{ textDecoration: "none", display: "block", color: "black" }}
      >
        <Button color="inherit">Home</Button>
      </Link>
      <Link
        to={`${url}`}
        style={{ textDecoration: "none", display: "block", color: "black" }}
      >
        <Button color="inherit"> Dashboard</Button>
      </Link>

      <Link
        to={`${url}/appointments`}
        style={{ textDecoration: "none", display: "block", color: "black" }}
      >
        <Button color="inherit"> My appointments</Button>
      </Link>
      <Link
        to={`${url}/payment`}
        style={{ textDecoration: "none", display: "block", color: "black" }}
      >
        <Button color="inherit">Payment </Button>
      </Link>

      {admin && (
        <Box>
          <Link
            to={`${url}/makeAdmin`}
            style={{ textDecoration: "none", display: "block", color: "black" }}
          >
            <Button color="inherit"> Make Admin</Button>
          </Link>

          <Link
            to={`${url}/addDoctor`}
            style={{ textDecoration: "none", display: "block", color: "black" }}
          >
            <Button color="inherit"> Add Car</Button>
          </Link>

          <Link
            to={`${url}/allAppointments`}
            style={{ textDecoration: "none", display: "block", color: "black" }}
          >
            <Button color="inherit"> Manage All Appointment</Button>
          </Link>
          <Link
            to={`${url}/allReview`}
            style={{ textDecoration: "none", display: "block", color: "black" }}
          >
            <Button color="inherit"> Manage All Review</Button>
          </Link>
        </Box>
      )}

      <Link
        style={{ textDecoration: "none", display: "block", color: "black" }}
      >
        <Button color="inherit" onClick={logOut}>
          Log Out
        </Button>
      </Link>

      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "bappointment-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "bappointment-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>
          <Switch>
            <Route exact path={path}>
              <DashboardHome></DashboardHome>
            </Route>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/addDoctor`}>
              <AddDoctor></AddDoctor>
            </AdminRoute>
            <AdminRoute path={`${path}/allAppointments`}>
              <ManageAppointment></ManageAppointment>
            </AdminRoute>
            <AdminRoute path={`${path}/allReview`}>
              <ManageAllReview></ManageAllReview>
            </AdminRoute>
            <Route path={`${path}/appointments`}>
              <MyAppointment></MyAppointment>
            </Route>
            <Route path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
          </Switch>
        </Typography>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;

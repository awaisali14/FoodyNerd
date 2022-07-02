import { Box } from "@material-ui/core";

const Sidebar = () => {
  return (
    <Box style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <div className="sidebar-wrapper">
        <div>
          <p className="sidebar-heading">Dashboard</p>
        </div>
      </div>
    </Box>
  );
};

export default Sidebar;

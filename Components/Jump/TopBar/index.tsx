import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import serviceContainer from "../../../Services/ServiceContainer";
import SessionService from "../../../Services/SessionService";

export interface TopBarProps {}

export function TopBar(props: TopBarProps) {
  const session = serviceContainer.get<SessionService>(SessionService);
  const profile = session.getProfile();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#fff",
          borderBottom: 4,
          borderBottomColor: "#FCB034",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Box
            display="flex"
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              display={"flex"}
              sx={{ flexDirection: "row", alignItems: "center" }}
            >
              <img src="./assets/Logo.svg" alt="logo" />
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", color: "#333", ml: 2 }}
              >
                {profile?.company}
              </Typography>
            </Box>
            <Box
              display={"flex"}
              sx={{ flexDirection: "row", alignItems: "center" }}
            >
              <Box
                display={"flex"}
                sx={{ flexDirection: "row", alignItems: "center" }}
              >
                <Box
                  display={"flex"}
                  sx={{
                    flexDirection: "column",
                    alignItems: "flex-end",
                    mr: 2,
                  }}
                >
                  <Typography variant="body1" sx={{ color: "#333" }}>
                    ยินดีต้อนรับ {profile?.firstname} {profile?.lastname}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#333" }}>
                    creator
                  </Typography>
                </Box>
                <div>
                  <img
                    src="./assets/icons/AccountCircle.svg"
                    alt="AccountCircle-icon"
                  />
                </div>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

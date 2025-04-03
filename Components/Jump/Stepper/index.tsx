import theme from "../../../Components/Themes/Theme";
import { ThemeProvider } from "@emotion/react";
import { Box, Typography, Paper } from "@mui/material";

type Props = {};

export default function Steper({}: Props) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="h3" sx={{ textAlign: "left", mb: 4 }}>
          {" "}
          Jump+{" "}
        </Typography>
        <Paper elevation={3} sx={{ p: 2, borderRadius: 1, mb: 4 }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", textAlign: "left", mb: 2 }}
          >
            {" "}
            ขั้นตอนการจัดทำและเผยแพร่แบบแสดงรายงาน{" "}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              pb: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: 190,
                height: "hug",
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  background:
                    "linear-gradient(180deg, hsl(46, 100%, 61%) 0%, hsl(37, 97%, 60%) 88%)",
                  borderRadius: 16,
                  alignContent: "center",
                }}
              >
                <Typography variant="h2">1</Typography>
              </Box>
              <Typography sx={{ fontWeight: "bold", mt: 1 }}>
                อัปโหลดมติการประชุม
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: 190,
                height: "hug",
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  background:
                    "linear-gradient(180deg, hsl(46, 100%, 61%) 0%, hsl(37, 97%, 60%) 88%)",
                  borderRadius: 16,
                  alignContent: "center",
                }}
              >
                <Typography variant="h2">2</Typography>
              </Box>
              <Typography sx={{ fontWeight: "bold", mt: 1 }}>
                กรอกข้อมูล
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: 190,
                height: "hug",
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  background:
                    "linear-gradient(180deg, hsl(46, 100%, 61%) 0%, hsl(37, 97%, 60%) 88%)",
                  borderRadius: 16,
                  alignContent: "center",
                }}
              >
                <Typography variant="h2">3</Typography>
              </Box>
              <Typography sx={{ fontWeight: "bold", mt: 1 }}>
                นำส่งรายงาน
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: 190,
                height: "hug",
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  background:
                    "linear-gradient(180deg, hsl(46, 100%, 61%) 0%, hsl(37, 97%, 60%) 88%)",
                  borderRadius: 16,
                  alignContent: "center",
                }}
              >
                <Typography variant="h2">4</Typography>
              </Box>
              <Typography sx={{ fontWeight: "bold", mt: 1 }}>
                เผยแพร่รายงาน
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </>
  );
}

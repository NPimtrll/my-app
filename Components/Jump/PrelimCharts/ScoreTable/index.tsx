import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Dataset } from "../../../../Domains/Chart/Dataset";

type ScoreTableProps = {
  datasets: Dataset[];
  labels: string[];
  dataPosition: string;
  unit: string;
};

export default function ScoreTable(props: ScoreTableProps) {
  const { datasets, labels, dataPosition, unit } = props;
  console.log("ScoreTable", datasets, labels, dataPosition);

  return (
    <Accordion
      sx={{
        width: "100%",
        boxShadow: "none",
        border: "none",
        backgroundColor: "transparent",
        "::before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon style={{ color: "hsla(212, 98%, 60%, 1)" }} />
        }
        sx={{
          borderTop: "none",
          borderBottom: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <span style={{ color: "hsla(212, 98%, 60%, 1)", marginLeft: "auto" }}>
          แสดงตาราง
        </span>
      </AccordionSummary>
      <AccordionDetails
        sx={{ padding: 0, borderTop: "none", borderBottom: "none" }}
      >
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            maxWidth: "100%",
            overflowX: "auto",
            border: "none",
            boxShadow: "none",
            backgroundColor: "transparent",
          }}
        >
          <Table sx={{ border: "none" }}>
            <TableHead>
              <TableRow style={{ backgroundColor: "hsla(220, 2%, 95%, 1)" }}>
                <TableCell
                  sx={{
                    fontSize: "10px",
                    padding: 0.5,
                    textAlign: "center",
                  }}
                >
                  ข้อมูล
                </TableCell>
                {labels.map((label, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      fontSize: "10px",
                      padding: 0.5,
                      borderLeft: "1px solid rgb(255, 255, 255)",
                      textAlign: "center",
                    }}
                  >
                    {label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {datasets.map((item, index) => (
                <TableRow key={index}>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      fontSize: "10px",
                      paddingX: 0.5,
                      paddingTop: 2,
                      paddingBottom: 1,
                      color:
                        item.title === "Average Sector"
                          ? "hsla(37, 97%, 60%, 1)"
                          : item.title === "Top 5"
                            ? "hsla(144, 83%, 40%, 1)"
                            : "hsla(220, 2%, 38%, 1)",
                    }}
                  >{`${item.title} (${unit})`}</TableCell>
                  {item.data.map((value, i) => (
                    <TableCell
                      key={i}
                      sx={{
                        fontSize: "10px",
                        paddingX: 1,
                        paddingTop: 2,
                        paddingBottom: 1,
                        textAlign: `${dataPosition}`,
                      }}
                    >
                      {value}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
}

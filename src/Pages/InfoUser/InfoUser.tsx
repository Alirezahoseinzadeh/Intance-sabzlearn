import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import { conatinerSty } from "./InfoStyle";
import RightSide from "./subComponent/rightSide/RightSide";
import LeftSide from "./subComponent/leftSide/LeftSide";
export default function InfoUser() {
  return (
    <Box sx={{ display: "flex", backgroundColor: "white" }}>
      <Container maxWidth="lg" sx={conatinerSty}>
        <Stack direction="row" spacing={1} sx={{ marginTop: "10px" }}>
          <>
            <LeftSide />
          </>
          <>
            <RightSide />
          </>
        </Stack>
      </Container>
    </Box>
  );
}

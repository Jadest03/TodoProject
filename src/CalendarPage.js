import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import TodoCard from "./components/TodoCard";

export default function CalendarPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      style={{
        width: "80vh",
        height: "80vh",
        display: "flex",
        flex: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </div>
      <div>
        <TodoCard
          handleOpen={handleOpen}
          title="콘텐츠 아이디어 리서치"
          deadline="12/23 3시"
          remaintime="12분"
        />
        <TodoCard
          handleOpen={handleOpen}
          title="콘텐츠 아이디어 리서치"
          deadline="12/23 3시"
          remaintime="12분"
        />
        <TodoCard
          handleOpen={handleOpen}
          title="콘텐츠 아이디어 리서치"
          deadline="12/23 3시"
          remaintime="12분"
        />
        <TodoCard
          handleOpen={handleOpen}
          title="콘텐츠 아이디어 리서치"
          deadline="12/23 3시"
          remaintime="12분"
        />
      </div>
    </div>
  );
}

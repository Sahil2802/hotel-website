import { useState } from "react";
import bgImg from "../../assets/images/bg-img.jpg";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Hero = () => {
  // State variables for managing check-in, check-out, and guest selection
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState("");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <section
        id="home"
        className="min-h-screen w-screen flex items-center justify-center "
      >
        <div
          className="relative h-[70vh] w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          {/* Background Image Section */}
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Main Content Section */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
            <p className="tracking-[0.3em] uppercase text-sm text-gray-200">
              Welcome to
            </p>
            <h1 className="text-8xl font-bold mb-3  ">Haven</h1>
            <p className="text-sm text-gray-200">
              Experience Comfort & Luxury at Haven
            </p>
          </div>

          {/* Date and Guest Selection Section */}
          <div className="absolute bg-white z-40 w-3/5 left-1/2 -translate-x-1/2 bottom-[-20px] p-4 rounded-lg shadow-lg grid grid-cols-7 gap-4 ">
            {/* Check-In Date Picker */}
            <div className="col-span-2">
              <DatePicker
                value={checkInDate}
                onChange={(newDate) => setCheckInDate(newDate)}
                minDate={dayjs()}
                maxDate={dayjs().add(4, "month")}
                format="DD/MM/YYYY"
                slotProps={{
                  textField: { size: "small", label: "Check-In" },
                }}
              />
            </div>
            {/* Check-Out Date Picker */}
            <div className="col-span-2">
              <DatePicker
                value={checkOutDate}
                onChange={(newDate) => setCheckOutDate(newDate)}
                minDate={checkInDate || dayjs()}
                maxDate={dayjs().add(4, "month")}
                format="DD/MM/YYYY"
                slotProps={{
                  textField: { size: "small", label: "Check-Out" },
                }}
              />
            </div>
            {/* Guest Selection Dropdown */}
            <div className="col-span-1">
              <FormControl fullWidth size="small">
                <InputLabel id="guest">Guest(s)</InputLabel>
                <Select
                  labelId="guest(s)"
                  id="guest"
                  value={guests}
                  label="Guest(s)"
                  onChange={(e) => setGuests(e.target.value)}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* Check Availability Button */}
            <div className="col-span-2 flex ">
              <button className="btn-color text-white py-2 px-4 rounded-md w-full cursor-pointer">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </section>
    </LocalizationProvider>
  );
};

export default Hero;

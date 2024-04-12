import { Button } from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const CreatePartner: React.FC = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div className="p-8">
      <div className="flex justify-between  max-w-4xl mx-auto items-center mb-4">
        <h2 className="text-2xl font-semibold">Add Business</h2>

        <Button variant="outlined" startIcon={<ChevronLeftIcon />}>
          Back
        </Button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <div className="border-b-2 border-gray-200 mb-4">
          <h3 className="text-lg font-semibold mb-2">Submit Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="business_name"
              placeholder="Business Name"
              className="form-inputs"
              title="input"
            />
            <FormControl>
              <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <input
              type="text"
              name="last_name"
              placeholder="FAX-Number"
              className="form-inputs"
              title="input"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="form-inputs"
              title="input"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="form-inputs"
              title="input"
            />
            <input
              type="number"
              name="phone"
              placeholder="Business Contact"
              className="form-inputs"
              title="input"
            />

            <input
              type="text"
              name="street"
              placeholder="Street"
              className="form-inputs"
              title="input"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="form-inputs"
              title="input"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              className="form-inputs"
              title="input"
            />
            <input
              type="number"
              name="zip"
              placeholder="Zip/postal"
              className="form-inputs"
              title="input"
            />
          </div>
        </div>
        <div className="content_between_of_div">
          <button className="bg-btn ">send</button>
          <button className="border-btn">cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePartner;

/*import React, { useState } from "react";
import useSWR from 'swr';
import {getAll} from '........index'
import Motor from "./Motor";
import css;
import {link} from "react-router-dom";

searchterm, searchoption

const van maken
fetcher maken
useSWR backend
filter
sorteeroptie
returnen van items */

import React, { useState } from "react";
import Motors from "./Motor";
import { MOTOR_DETAILS } from "../api/mock_data";

export default function MotorList() {
  const [motors, setMotors] = useState(MOTOR_DETAILS);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const filteredMotors = motors.filter((motor) =>
    motor.name.toLowerCase().includes(search.toLowerCase())
  );

  const createMotor = (id, name, price, available, rating, date) => {
    const newMotor = {
      id,
      name,
      price,
      available,
      rating,
      date: new Date(date),
    };

    setMotors([newMotor, ...motors]); // newest first
  };

  return (
    <>
      <h1>Motor List</h1>

      <div className="input-group mb-3 w-50">
        <input
          type="search"
          id="search"
          className="form-control rounded"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => setSearch(text)}
        >
          Search
        </button>
      </div>

      {filteredMotors.map((motor, index) => (
        <Motors {...motor} key={index} />
      ))}
    </>
  );
}

import React, { useEffect, useCallback } from "react";
import Motors from "./motorDetail.jsx";
import useSWR, { mutate } from "swr";
import useSWRMutation from "swr/mutation";
import AsyncData from "../AsyncData.jsx";
import { getAll, save, deleteById } from "../../api/index.js";

const MotorList = () => {
  const { data: motors, error } = useSWR("motoren", getAll);
  const {
    mutate: saveMutate,
    error: saveError,
    isLoading: isSaving,
  } = useSWRMutation("motoren", save);
  const {
    mutate: deleteMutate,
    error: deleteError,
    isLoading: isDeleting,
  } = useSWRMutation("motoren", deleteById);

  const handleUpdateMotor = useCallback(
    async (id, updatedMotor) => {
      await saveMutate({ id, updatedMotor });
    },
    [saveMutate]
  );

  const handleDeleteMotor = useCallback(
    async (id) => {
      await deleteMutate(id);
    },
    [deleteMutate]
  );

  useEffect(() => {
    const fetchData = async () => {
      await mutate("motoren");
    };

    fetchData();
  }, [saveError, deleteError]);

  return (
    <div>
      <AsyncData
        loading={!motors}
        error={error || saveError || deleteError || isSaving || isDeleting}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {motors &&
            motors.map((motor) => (
              <div
                key={motor.id}
                style={{
                  width: "30%",
                  marginBottom: "20px",
                  marginRight: "1%",
                }}
              >
                <Motors
                  {...motor}
                  onUpdate={(updatedMotor) =>
                    handleUpdateMotor(motor.id, updatedMotor)
                  }
                  onDelete={() => handleDeleteMotor(motor.id)}
                />
              </div>
            ))}
        </div>
      </AsyncData>
    </div>
  );
};

export default MotorList;

import React, { useEffect, useCallback } from "react";
import Motors from "./Motor";
import useSWR, { mutate } from "swr";
import useSWRMutation from "swr/mutation";
import AsyncData from "../components/AsyncData";
import { getAll, save, deleteById } from "../api/index";

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
    // Use the mutate function from SWR to manually trigger data refetching
    const fetchData = async () => {
      await mutate("motoren");
    };

    fetchData();
  }, [saveError, deleteError]);

  return (
    <div>
      <h1>Motors</h1>

      <AsyncData
        loading={!motors}
        error={error || saveError || deleteError || isSaving || isDeleting}
      >
        {motors &&
          motors.map((motor) => (
            <Motors
              {...motor}
              key={motor.id}
              onUpdate={(updatedMotor) =>
                handleUpdateMotor(motor.id, updatedMotor)
              }
              onDelete={() => handleDeleteMotor(motor.id)}
            />
          ))}
      </AsyncData>
    </div>
  );
};

export default MotorList;

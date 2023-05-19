import { Alert } from "flowbite-react";
import React from "react";

export default function AlertComponent() {
  const onDismiss = () => {
    alert("dismis");
  };
  return (
    <>
      <Alert
        color="success"
        rounded={false}
        withBorderAccent={true}
        onDismiss={onDismiss}
      >
        <span>
          <span className="font-medium">Info alert!</span> Change a few things
          up and try submitting again.
        </span>
      </Alert>
    </>
  );
}

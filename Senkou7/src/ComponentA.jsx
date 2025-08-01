import React from "react";
import ComponentB from "./ComponentB";

export default function ComponentA({ user }) {
  return (
    <div>
      <ComponentB user={user} />
    </div>
  );
}
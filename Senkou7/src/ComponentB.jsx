import React from "react";
import ComponentC from "./ComponentC";

export default function ComponentB({ user }) {
  return (
    <div>
      <ComponentC user={user} />
    </div>
  );
}
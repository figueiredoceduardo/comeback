"use client";
import { useState } from "react";
import CalendarApp from "../../components/dashboard/Calendar";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Dashboard() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <>
      <div className="w-screen flex justify-center mt-28">
        <CalendarApp />
      </div>
    </>
  );
}

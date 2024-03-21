import React from "react";

interface DateProps{
    label:string;
}

const Date = ({label}:DateProps) => {
  return (
    <div className="flex-col">
    <div className="mb-2">
      <label className="text-xl font-semibold">{label}</label>
    </div>
      <input
        type="date"
        className="p-3 rounded-md border-slate-300 border-2 w-full"
        placeholder="First Name"
      />
  </div>
  );
};

export default Date;

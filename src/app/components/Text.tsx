import React from "react";

interface NameProps {
  type:string;
  label: string;
  name: boolean;
  design?:string
}

const Text = ({ type, label, name = true, design }: NameProps) => {
  return (
    <div className={`${design} flex-col`}>
      <div className="mb-2">
        <label className="text-xl font-semibold">{label}</label>
      </div>
      {name ? (
        <div className="grid grid-cols-2 gap-5">
          <input
            type={type}
            className="p-3 rounded-md border-slate-300 border-2 w-full"
            placeholder="First Name"
          />
          <input
            type={type}
            className="p-3 rounded-md border-slate-300 border-2"
            placeholder="Last Name"
          />
        </div>
      ) : (
        <input
          type={type}
          className="p-3 rounded-md border-slate-300 border-2 w-full"
          placeholder={label}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
      )}
    </div>
  );
};

export default Text;

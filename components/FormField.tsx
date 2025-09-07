"use client";

import { ChangeEvent } from "react";

type Option = {
  label: string;
  value: string;
};

type FormFieldProps = {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  type?: string;
  as?: "input" | "textarea" | "select";
  options?: Option[];
};

export default function FormField({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  as = "input",
  options = [],
}: FormFieldProps) {
  const InputToRender = () => {
    if (as === "textarea") {
      return (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="form-textarea"
        />
      );
    } else if (as === "select") {
      return (
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className="form-select"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      );
    } else {
      return (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="form-input"
        />
      );
    }
  };

  return (
    <div className="form-field flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <InputToRender />
    </div>
  );
}

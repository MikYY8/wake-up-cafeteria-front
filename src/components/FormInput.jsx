function FormInput({
  labelText,
  inputType,
  placeholder,
  value,
  onChangeFn,
  isRequired = true,
  icon,
}) {
  return (
    <div className="flex flex-col text-white w-full">
      <div className="flex flex-row justify-start items-center gap-2 mb-2">
        {icon}
        <label className="text-sm font-medium">{labelText}</label>
      </div>
      <input
        type={inputType}
        placeholder={placeholder}
        value={inputType === "file" ? undefined : value}
        onChange={onChangeFn}
        required={isRequired}
        className="w-full px-6 py-3 bg-orange-50 rounded-md focus:outline-none focus:ring-2 focus:bg-amber-100"
      />
    </div>
  );
}

export default FormInput;
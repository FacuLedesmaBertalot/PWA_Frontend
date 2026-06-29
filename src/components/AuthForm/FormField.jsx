const FormField = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-semibold text-contrast">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-accent/30 bg-secondary/70 px-4 py-3 text-base text-contrast placeholder:text-contrast/50 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default FormField;

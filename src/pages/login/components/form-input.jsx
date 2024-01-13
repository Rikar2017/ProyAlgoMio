/* eslint-disable react/prop-types */

export default function FormInput({
  label,
  placeholder,
  type,
	children,
  required = false,
}) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered"
        required={required}
      />
			{children}
    </div>

  );
}

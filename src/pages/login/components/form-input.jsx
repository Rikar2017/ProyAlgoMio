/* eslint-disable react/prop-types */
export default function FormInput({
  label,
  placeholder,
  name,
  type,
  reg,
  errorMessage,
}) {
  console.log(errorMessage, name);
  const error = errorMessage !== "" && errorMessage !== undefined;
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={
          "input input-bordered duration-500 " + (error ? "input-error" : "")
        }
        {...reg(name)}
      />
      {error ? (
        <label className="label label-text-alt text-error">
          {errorMessage}
        </label>
      ) : undefined}
    </div>
  );
}

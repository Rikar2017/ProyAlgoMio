import { useRef, useState } from "react";
import { object, ref, string } from "yup";

const formScheme = object().shape({
  password: string().min(4).required(),
  confirmPass: string()
    .oneOf([ref("password")])
    .required(),
});

/* eslint-disable react/prop-types */
export default function PasswordSetter({ modalRef, formData }) {
  const form = [useRef(), useRef()];
  const [error, setErr] = useState("");

  function clickHandler() {
    const passData = {
      password: form[0].current.value,
      confirmPass: form[1].current.value,
    };

    formScheme
      .validate(passData)
      .then(({ password }) => {
        setErr("");
        console.log({ ...formData, password });
      })
      .catch(() => setErr("input-error"));
  }

  return (
    <dialog className="modal" ref={modalRef}>
      <div className="modal-box">
        <label className="label">
          <span className="label-text">Password:</span>
        </label>
        <input
          type="password"
          ref={form[0]}
          placeholder="password"
          className={"input input-bordered w-full duration-500 " + error}
        />
        <label className="label mt-3">
          <span className="label-text">Confirm Password:</span>
        </label>
        <input
          type="password"
          ref={form[1]}
          placeholder="password"
          className={"input input-bordered w-full duration-500 " + error}
        />
        <button className="btn btn-primary w-full mt-5" onClick={clickHandler}>
          <span className="loading loading-spinner" />
          Sign Up
        </button>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button />
      </form>
    </dialog>
  );
}

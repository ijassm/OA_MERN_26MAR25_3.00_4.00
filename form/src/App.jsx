import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formScheme } from "./validation";

// const App = () => {
//   console.log("App rendered");

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const onChangeHandler = (e) => {
//     const key = e.target.name;
//     const value = e.target.value;
//     console.log(key);
//     console.log(value);

//     setFormData((formData) => ({ ...formData, [key]: value }));
//   };

//   return (
//     <main className="space-y-2.5">
//       <h1>Form</h1>

//       <label htmlFor="name">Name</label>
//       <input
//         className="border-2 border-black"
//         type="text"
//         id="name"
//         name="name"
//         value={formData.name}
//         onChange={onChangeHandler}
//       />
//       <br />

//       <label htmlFor="email">Email</label>
//       <input
//         className="border-2 border-black"
//         type="email"
//         id="email"
//         name="email"
//         value={formData.email}
//         onChange={onChangeHandler}
//       />
//       <br />
//       <label htmlFor="password">Password</label>
//       <input
//         className="border-2 border-black"
//         type="password"
//         name="password"
//         value={formData.password}
//         onChange={onChangeHandler}
//       />
//     </main>
//   );
// };

// export default App;

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formScheme),
  });
  // console.log("App rendered");

  // console.log(register("name"));

  const formHandleSubmit = handleSubmit((data) => {
    console.log(data);
  });

  console.log(errors);

  return (
    <form onSubmit={formHandleSubmit} className="space-y-2.5">
      <h1>Form</h1>

      <label htmlFor="name">Name</label>
      <input
        className="border-2 border-black"
        type="text"
        {...register("name")}
      />
      <br />

      {errors.name && <p className="text-red-700">{errors.name.message}</p>}

      <label htmlFor="email">Email</label>
      <input
        className="border-2 border-black"
        type="email"
        {...register("email")}
      />
      {errors.email && <p className="text-red-700">{errors.email.message}</p>}
      <br />
      <label htmlFor="password">Password</label>
      <input
        className="border-2 border-black"
        type="password"
        {...register("password")}
      />
      {errors.password && (
        <p className="text-red-700">{errors.password.message}</p>
      )}

      <button>Submit</button>
    </form>
  );
};

export default App;

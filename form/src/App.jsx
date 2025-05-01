import { useState } from "react";

const App = () => {
  console.log("App rendered");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    console.log(key);
    console.log(value);

    setFormData((formData) => ({ ...formData, [key]: value }));
  };

  return (
    <main className="space-y-2.5">
      <h1>Form</h1>

      <label htmlFor="name">Name</label>
      <input
        className="border-2 border-black"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={onChangeHandler}
      />
      <br />

      <label htmlFor="email">Email</label>
      <input
        className="border-2 border-black"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={onChangeHandler}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        className="border-2 border-black"
        type="password"
        name="password"
        value={formData.password}
        onChange={onChangeHandler}
      />
    </main>
  );
};

export default App;

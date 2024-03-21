import React, { useState } from "react";

const Signup = () => {
  const [hidden, setHidden] = useState(true);
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const phoneRegex = /^\d{10}$/;

    if (phoneRegex.test(inputs.phone)) {
      localStorage.setItem("user", JSON.stringify(inputs));
      setInputs({ fullname: "", email: "", phone: "", password: "" });
      alert("Registration Successfull");
    } else {
      alert("enter correct phone number");
    }
  };
  return (
    <div className="container">
      <img
        src="https://www.tradoindia.com/static/media/razor_iamage_bg-02.d291c1612ad06393f973.jpg"
        alt=""
        className="imgclass"
      />

      <div className="formcontainer">
        <h2>Welcome to TradoIndia!</h2>
        <h2>Let's get started</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={inputs.fullname}
              required
              onChange={handleChange}
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={inputs.phone}
              onChange={handleChange}
              required
              placeholder="Your Mobile Number"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type={hidden ? "password" : "text"}
              id="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              required
              placeholder="Your Password"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setHidden(!hidden);
              }}
            >
              {hidden ? "show" : "hide"}
            </button>
          </div>
          <div>
            <button className="submit">Create my Free Account</button>
          </div>

          <div>or</div>

          <div>
            <button type="button"> Login with google </button>
          </div>
          <span>
            Already have an Account? <button type="button">Sign In</button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;

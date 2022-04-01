import "./signUp.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <form style={{ backgroundColor: "white" }}>
      <div class="conatiner">
        <h1>Sign Up</h1>
        <p> Please fill in this form to create an account</p>
        <hr />
        <label for="email">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label for="first-name">
          <b>First Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="first-name"
          required
        />

        <label for="last-name">
          <b>Last Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="last-name"
          required
        />

        <label for="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <label for="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          required
        />

        <div class="clearfix">
          <button type="button" class="cancelbtn" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button type="submit" class="signupbtn">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}

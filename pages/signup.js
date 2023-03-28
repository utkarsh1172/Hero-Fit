import apiClient from "@/lib/apiClient";
import Link from "next/link";
import { useState } from "react";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const handleSignup = async(e) => {
    e.preventDefault();  

    try {
      const res = await apiClient.post("/auth/signup", {email,password});

    }
    catch(e){
        console.log(e)
    }
    console.log(email,password)
  };

  return (
      <div className="p-4 space-y-8">
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            name="email"
            type="email"
            autoComplete="username"
            autoCapitalize="none"
            className={"form-control w-full input input-bordered"}
            placeholder="enter emailId."
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
            required={true}
          />
          <input
            name="password"
            type="password"
            autoComplete="new-password"
            className={"from-control w-full input input-bordered $"}
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
            required={true}
          />
          <button type="submit" className="btn btn-primary btn-block">Sign up</button>
        </form>
        <div>
          <Link href="login" className="link">
            Login instead
          </Link>
        </div>
      </div>
  );
};

export default Signup;

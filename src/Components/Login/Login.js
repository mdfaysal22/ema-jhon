import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContexts";

const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"
  const navigate = useNavigate();
    const {signInInfo} = useContext(AuthContext);
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInInfo(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            navigate(from, { replace: true })
        })
        .catch(err => {
            const errMessage = err.message;
        })
        form.reset();

    }
  return (
    <section>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Sign In Now</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p  className="label-text-alt link link-hover">
                    <small className="text-xs">Forget Password?</small>
                    
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Log In</button>
              </div>
              <div className="form-control mt-1">
              <button className="btn btn-outline btn-primary"><Link to={'/signup'}>Create Account</Link></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
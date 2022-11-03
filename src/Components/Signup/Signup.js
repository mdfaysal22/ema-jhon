import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContexts";

const Signup = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"

  const navigate = useNavigate();
  const { signUpInfo, signUpGoogle } = useContext(AuthContext);
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    signUpInfo(email, password)
      .then((result) => {
        const user = result.user;
        user.displayName = name;
        form.reset();
        navigate(from, { replace: true })
      })
      .catch((err) => {
        const errMessage = err.message;
        console.log(errMessage);
      });
    form.reset();
  };

  const handleGoogleSignUp = () => {
    signUpGoogle()
    .then(result => {
        const user = result.user;
        navigate(from, { replace: true })
    })
    .catch(err => {
        const errMessage = err.message;
    })
  }

  return (
    <section>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Sign Up Now</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
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
                  <p className="label-text-alt link link-hover">
                    <Link to={"/login"} className="text-xs">
                      Already have an account?
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-1">
                <button className="btn btn-primary">Sign Up</button>
              </div>

                  <button onClick={handleGoogleSignUp} className="btn  btn-outline btn-primary">Sign Up with Google</button>
                
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

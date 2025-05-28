const Register = () => {
  return (
    <div>
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl">Please Register</h2>
        <form>
          <input className="bg-gray-300 my-4 w-3/4 py-2 px-4" type="email" placeholder="Email Address" name="email" id="" />
          <br />
          <input
            className="bg-gray-300 w-3/4 py-2 px-4"
            type="password"
            name="password" placeholder="Password"
            id=""
          />
          <br />
          <input className="btn btn-secondary mt-4 w-3/4" type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default Register;

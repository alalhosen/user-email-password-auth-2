const Register = () => {
  return (
    <div>
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl">Please Register</h2>
        <form>
          <input className="bg-gray-300 my-4" type="email" name="email" id="" />
          <br />
          <input
            className="bg-gray-300"
            type="password"
            name="password"
            id=""
          />
          <br />
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default Register;

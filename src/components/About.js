import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-extrabold">About us</h1>
      <h2 className="text-lg font-bold font-sans">
        Foodie app is a safe haven for foodies!
      </h2>
      <h2 className="pt-5 font-extrabold">Developers:</h2>
      <UserClass name="Farzeen Syeda" location="Dubai, UAE" id="farzz" />
    </div>
  );
};

export default About;

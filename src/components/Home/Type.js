import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "IT Solutions",
          "Web Development",
          "E-commerce Solutions",
          "Cloud Computing",
          "Cybersecurity",
          "Data Analytics",
          "Software Development",
          "AI & Machine Learning",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

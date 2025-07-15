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
          "Artificial Intelligence & Machine Learning",
          "Software Development"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

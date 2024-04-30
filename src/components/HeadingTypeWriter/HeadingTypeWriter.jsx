import { useTypewriter } from "react-simple-typewriter";
import PropTypes from "prop-types";

const HeadingTypeWriter = ({ sentences }) => {
  const [text] = useTypewriter({
    words: [...sentences],
    loop: 0,
  });

  return (
    <div className="App">
      <span>{text}</span>
    </div>
  );
};

HeadingTypeWriter.propTypes = {
  sentences: PropTypes.array,
};

export default HeadingTypeWriter;

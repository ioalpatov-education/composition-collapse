import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { useState, useRef, useEffect } from "react";

const Collapse = (props) => {
  const { collapsedLabel, expandedLabel, children } = props;

  const [isShow, setIsShow] = useState(false);
  const [collapseHeight, setCollapseHeight] = useState("fit-content");

  const collapseRef = useRef();

  useEffect(() => {
    setCollapseHeight(
      `${collapseRef.current.getBoundingClientRect().height + 2}px`
    );
  }, [collapseRef]);

  const toggleCollapse = () => setIsShow(!isShow);

  const collapseWrapperStyles = {
    height: collapseHeight,
  };

  const collapseClasses = isShow
    ? "collapse-wrapper"
    : "collapse-wrapper hidden";
  const btnText = isShow ? expandedLabel : collapsedLabel;

  return (
    <div className="collapse-container">
      <Button
        className="collapse-btn"
        variant="contained"
        onClick={toggleCollapse}
      >
        {btnText}
      </Button>

      <div className={collapseClasses} style={collapseWrapperStyles}>
        <div className="collapse" ref={collapseRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  collapsedLabel: PropTypes.string,
  expandedLabel: PropTypes.string,
};

Collapse.defaultProps = {
  collapsedLabel: "Развернуть",
  expandedLabel: "Свернуть",
};

export default Collapse;

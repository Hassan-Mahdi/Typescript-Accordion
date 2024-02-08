import AcordionOne from "./AcordionOne"
import AcordionTwo from "./AcordionTwo";

const FinalAcordion = () => {
  const accordionStyle = { marginBottom: '15px'};

  return (
    <>
      <div>
        <div style={accordionStyle}>
            <AcordionOne/>
        </div>
        <div style={accordionStyle}>
          <AcordionTwo />
        </div>
      </div>
    </>
  );
};

export default FinalAcordion;
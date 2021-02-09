import React from "react";
// import sections
import HeroFull from "../components/sections/HeroFull";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';
import SectionHeader from '../components/sections/partials/SectionHeader';
import GenericSection from '../components/sections/GenericSection';

class Home extends React.Component {
  state = {
    videoModalActive: false,
  };
  openModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  };

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  };

  render() {
    return (
      <React.Fragment>
        <HeroFull className="illustration-section-01" />
        <FeaturesTiles />
        <FeaturesSplit invertMobile topDivider imageFill />
        <GenericSection topDivider>
        <h2 className="center-content">
            FAQ
        </h2>
          <div className="container-xs">
            <Accordion>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut." active>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </AccordionItem>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </AccordionItem>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </AccordionItem>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </AccordionItem>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </AccordionItem>
            </Accordion>
          </div>
        </GenericSection>
      </React.Fragment>
    );
  }
}

export default Home;

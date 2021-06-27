import React from "react";
// import sections
import HeroFull from "../components/sections/HeroFull";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Accordion from "../components/elements/Accordion";
import AccordionItem from "../components/elements/AccordionItem";
import GenericSection from "../components/sections/GenericSection";

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
          <h2 className="center-content">FAQ</h2>
          <div className="container-xs">
            <Accordion>
              <AccordionItem title="For whom is the homepage intended?" active>
                The homepage is intended to enable engineers to analyze data
                sets recorded by sensors. However, thanks to the open source
                principle, each user can adapt the functionality to his own
                needs. This results in a very wide range of applications for the
                software at hand.
              </AccordionItem>
              <AccordionItem title="What kind of data can be uploaded?">
                The data format of the data to be uploaded can be found in the
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", fontWeight: "bold" }}
                  href="https://github.com/Web-App-zur-Einzelblattmontagen/offshoreSingleBladeAssembly/wiki/Data-format"
                >
                  {" "}
                  "Data Format"{" "}
                </a>
                chapter of the documentation. The chapter further describes how
                to adapt this basic format to your data sets and which source
                code changes are necessary.
              </AccordionItem>
              <AccordionItem title="How can I adapt the homepage to my needs?">
                The complete source code is publicly uploaded to github. You can
                further develop the code locally and thus adapt the homepage to
                your needs. The requirements and code structure are documented
                in detail in the
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", fontWeight: "bold" }}
                  href="https://github.com/Web-App-zur-Einzelblattmontagen/offshoreSingleBladeAssembly/wiki"
                >
                  {" "}
                  documentation
                </a>
                .
              </AccordionItem>
              <AccordionItem title="Is my data safe?">
                SSL certificates, cloud databases and a state of the art
                architecture ensure that the latest security standards are
                adhered to. Your login data and your data records are in good
                hands and are transmitted to our server via https protocol.
              </AccordionItem>
              <AccordionItem title="Who can I contact if I have any questions or problems?">
                You are welcome to contact the responsible academic staff at BIK
                using the following contact details:
                <br />
                <br />
                malvela@uni-bremen.de
                <br />
                alsander@uni-bremen.de
              </AccordionItem>
            </Accordion>
          </div>
        </GenericSection>
      </React.Fragment>
    );
  }
}

export default Home;

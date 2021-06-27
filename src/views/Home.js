import React from "react";
// import sections
import HeroFull from "../components/sections/HeroFull";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';
import GenericSection from '../components/sections/GenericSection';

class Home extends React.Component {
    state = {
        videoModalActive: false,
    };
    openModal = (e) => {
        e.preventDefault();
        this.setState({videoModalActive: true});
    };

    closeModal = (e) => {
        e.preventDefault();
        this.setState({videoModalActive: false});
    };

    render() {
        return (
            <React.Fragment>
                <HeroFull className="illustration-section-01"/>
                <FeaturesTiles/>
                <FeaturesSplit invertMobile topDivider imageFill/>
                <GenericSection topDivider>
                    <h2 className="center-content">
                        FAQ
                    </h2>
                    <div className="container-xs">
                        <Accordion>
                            <AccordionItem title="For whom is the homepage intended?" active>
                                The homepage is intended to enable engineers to analyze data sets recorded by sensors.
                                However, thanks to the open source principle, each user can adapt the functionality to
                                his own needs. This results in a very wide range of applications for the software at
                                hand.
                            </AccordionItem>
                            <AccordionItem title="What kind of data can be uploaded?">
                                The data format of the data to be uploaded can be found in the "Data Format" chapter of
                                the documentation. The chapter further describes how to adapt this basic format to your
                                data sets and which source code changes are necessary.
                            </AccordionItem>
                            <AccordionItem title="How can I adapt the homepage to my needs?">

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

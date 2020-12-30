import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import HeroFull from '../components/sections/HeroFull';
import Clients from '../components/sections/Clients';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import GenericSection from '../components/sections/GenericSection';
import FeaturesSplit from '../components/sections/FeaturesSplit';

import Cta from '../components/sections/Cta';


class Home extends React.Component {

    state = {
        videoModalActive: false
    }
    openModal = (e) => {
        e.preventDefault();
        this.setState({videoModalActive: true});
    }

    closeModal = (e) => {
        e.preventDefault();
        this.setState({videoModalActive: false});
    }

    render() {

        const genericSection01Header = {
            title: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit'
        }

        return (
            <React.Fragment>
                <HeroFull className="illustration-section-01"/>
                <FeaturesTiles/>
                <GenericSection topDivider className="center-content">
                    <SectionHeader data={genericSection01Header} className="reveal-from-bottom"/>
                </GenericSection>
                <FeaturesSplit invertMobile topDivider imageFill/>
            </React.Fragment>
        );
    }
}

export default Home;
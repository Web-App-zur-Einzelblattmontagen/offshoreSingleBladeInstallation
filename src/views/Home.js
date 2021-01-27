import React from  'react';
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
            title: 'Easy to use data-science Tool'
        }

        return (
            <React.Fragment>
                <HeroFull className="illustration-section-01"/>
                <FeaturesTiles/>
                <FeaturesSplit invertMobile topDivider imageFill/>
            </React.Fragment>
        );
    }
}

export default Home;
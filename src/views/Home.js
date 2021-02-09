import React from  'react';
// import sections
import HeroFull from '../components/sections/HeroFull';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';


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
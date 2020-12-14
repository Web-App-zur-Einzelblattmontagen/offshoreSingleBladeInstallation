import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import HeroFull from '../components/sections/HeroFull';
import Clients from '../components/sections/Clients';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import GenericSection from '../components/sections/GenericSection';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Pricing from '../components/sections/Pricing';
import Cta from '../components/sections/Cta';
// import some required elements
import Image from '../components/elements/Image';
import Modal from '../components/elements/Modal';

class Home extends React.Component {

  state = {
    videoModalActive: false
  }
  openModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  }

  render() {

    const genericSection01Header = {
      title: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit'
    }

    return (
      <React.Fragment>
        <HeroFull className="illustration-section-01" />
        <Clients topDivider bottomDivider />
        <FeaturesTiles />
        <GenericSection topDivider className="center-content">
          <SectionHeader data={genericSection01Header} className="reveal-from-bottom" />
          <div className="reveal-from-bottom">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={this.openModal}
            >
              <Image
                src={require('./../assets/images/video-placeholder.svg')}
                alt="Video"
                width={712}
                height={400} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={this.state.videoModalActive}
            handleClose={this.closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" />
        </GenericSection>        
        <FeaturesSplit invertMobile topDivider imageFill />
        <Pricing topDivider pricingSwitcher />
        <Cta split />
      </React.Fragment>
    );
  }
}

export default Home;
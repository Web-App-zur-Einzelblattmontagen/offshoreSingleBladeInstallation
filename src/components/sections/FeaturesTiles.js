import React from 'react';
import classNames from 'classnames';
import {SectionTilesProps} from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

class FeaturesTiles extends React.Component {

    render() {

        const {
            className,
            topOuterDivider,
            bottomOuterDivider,
            topDivider,
            bottomDivider,
            hasBgColor,
            invertColor,
            pushLeft,
            ...props
        } = this.props;

        const outerClasses = classNames(
            'features-tiles section',
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color',
            className
        );

        const innerClasses = classNames(
            'features-tiles-inner section-inner',
            topDivider && 'has-top-divider',
            bottomDivider && 'has-bottom-divider'
        );

        const tilesClasses = classNames(
            'tiles-wrap',
            pushLeft && 'push-left'
        );

        const sectionHeader = {
            title: '',
            paragraph: ''
        };

        return (
            <section
                {...props}
                className={outerClasses}
            >
                <div className="container">
                    <div className={innerClasses}>
                        <SectionHeader data={sectionHeader} className="center-content"/>
                        <div className={tilesClasses}>

                            <div className="tiles-item reveal-from-bottom">
                                <div className="tiles-item-inner">
                                    <div className="features-tiles-item-header">
                                        <div className="features-tiles-item-image mb-16">
                                            <Image
                                                src={require('./../../assets/images/feature-tile-icon-01.svg')}
                                                alt="Features tile icon 01"
                                                width={64}
                                                height={64}/>
                                        </div>
                                    </div>
                                    <div className="features-tiles-item-content">
                                        <h4 className="mt-0 mb-8">
                                            Detection of causalities
                                        </h4>
                                        <p className="m-0 text-sm">
                                            Different, thematically optimized, methods for causality detection based on
                                            the magic of neural networks.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                                <div className="tiles-item-inner">
                                    <div className="features-tiles-item-header">
                                        <div className="features-tiles-item-image mb-16">
                                            <Image
                                                src={require('./../../assets/images/feature-tile-icon-02.svg')}
                                                alt="Features tile icon 02"
                                                width={64}
                                                height={64}/>
                                        </div>
                                    </div>
                                    <div className="features-tiles-item-content">
                                        <h4 className="mt-0 mb-8">
                                            Different file types
                                        </h4>
                                        <p className="m-0 text-sm">
                                            Various file types can be used. These
                                            include, for example: Excel, CSV and Pandas Dataframe.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                                <div className="tiles-item-inner">
                                    <div className="features-tiles-item-header">
                                        <div className="features-tiles-item-image mb-16">
                                            <Image
                                                src={require('./../../assets/images/feature-tile-icon-03.svg')}
                                                alt="Features tile icon 03"
                                                width={64}
                                                height={64}/>
                                        </div>
                                    </div>
                                    <div className="features-tiles-item-content">
                                        <h4 className="mt-0 mb-8">
                                            Secure SSL-Connection
                                        </h4>
                                        <p className="m-0 text-sm">
                                            SSL certificates, cloud database systems and
                                            other measures ensure we meet the highest security
                                            standards.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="tiles-item reveal-from-bottom">
                                <div className="tiles-item-inner">
                                    <div className="features-tiles-item-header">
                                        <div className="features-tiles-item-image mb-16">
                                            <Image
                                                src={require('./../../assets/images/feature-tile-icon-04.svg')}
                                                alt="Features tile icon 04"
                                                width={64}
                                                height={64}/>
                                        </div>
                                    </div>
                                    <div className="features-tiles-item-content">
                                        <h4 className="mt-0 mb-8">
                                            Expandability
                                        </h4>
                                        <p className="m-0 text-sm">
                                            You can individually expand the existing analysis functions and adapt the
                                            process to your needs.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                                <div className="tiles-item-inner">
                                    <div className="features-tiles-item-header">
                                        <div className="features-tiles-item-image mb-16">
                                            <Image
                                                src={require('./../../assets/images/feature-tile-icon-05.svg')}
                                                alt="Features tile icon 05"
                                                width={64}
                                                height={64}/>
                                        </div>
                                    </div>
                                    <div className="features-tiles-item-content">
                                        <h4 className="mt-0 mb-8">
                                            Responsive Design
                                        </h4>
                                        <p className="m-0 text-sm">
                                            In contrast to adaptive design, responsive web design adapts flexibly to the
                                            size of the browser window.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                                <div className="tiles-item-inner">
                                    <div className="features-tiles-item-header">
                                        <div className="features-tiles-item-image mb-16">
                                            <Image
                                                src={require('./../../assets/images/feature-tile-icon-06.svg')}
                                                alt="Features tile icon 06"
                                                width={64}
                                                height={64}/>
                                        </div>
                                    </div>
                                    <div className="features-tiles-item-content">
                                        <h4 className="mt-0 mb-8">
                                            Optimized page-speed
                                        </h4>
                                        <p className="m-0 text-sm">
                                            Despite the high complexity and computing time, we are able to keep this
                                            within a user-friendly frame.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
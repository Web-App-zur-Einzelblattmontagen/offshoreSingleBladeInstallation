import React from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../utils/SectionProps';
import Button from '../elements/Button';
import Image from '../elements/Image';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

class HeroFull extends React.Component {

    render() {
        const {
            className,
            topOuterDivider,
            bottomOuterDivider,
            topDivider,
            bottomDivider,
            hasBgColor,
            invertColor,
            ...props
        } = this.props;

        const outerClasses = classNames(
            'hero section center-content',
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color',
            className
        );

        const innerClasses = classNames(
            'hero-inner section-inner',
            topDivider && 'has-top-divider',
            bottomDivider && 'has-bottom-divider'
        );

        return (
            <section
                {...props}
                className={outerClasses}
            >
                <div className="container-sm">
                    <div className={innerClasses}>
                        <div className="hero-content">
                            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                                Offshore Single Blade Installation
                            </h1>
                            <div className="container-xs">
                                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                                    An intuitive and helpful tool for statistical analysis of measurement data, in the
                                    context of single blade installation.
                                </p>
                            </div>
                        </div>
                        <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px"
                             data-reveal-delay="800">
                            <Image
                                className="has-shadow"
                                src={require('./../../assets/images/titlePicture')}
                                alt="Hero"
                                width={896}
                                height={404}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

HeroFull.propTypes = propTypes;
HeroFull.defaultProps = defaultProps;

export default HeroFull;
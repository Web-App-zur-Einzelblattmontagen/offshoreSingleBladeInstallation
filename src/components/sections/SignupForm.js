import React from "react";

import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import { useHistory } from "react-router-dom";
import SectionHeader from "./partials/SectionHeader";

import Button from "../elements/Button";
import googleLogo from "../../assets/images/google.png";

import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux";
import { setActiveUser } from "../../store/userSlice";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

function SignupForm() {
  const history = useHistory();

  const dispatch = useDispatch();

  const handleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          setActiveUser({
            userName: result.user.displayName,
            userEmail: result.user.email,
            userID: result.user.uid,
          })
        );
        localStorage.setItem("userName", result.user.displayName);
        localStorage.setItem("userEmail", result.user.email);
        localStorage.setItem("userID", result.user.uid);
        if (!!localStorage.getItem("userID")) {
          history.push("/");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const {
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
  } = defaultProps;

  const outerClasses = classNames(
    "signin section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "signin-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const sectionHeader = {
    title: "Welcome. We make data-science easier.",
  };
  return (
    <section className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            tag="h1"
            data={sectionHeader}
            className="center-content"
          />
          <div className="tiles-wrap">
            <div className="tiles-item">
              <div className="tiles-item-inner">
                <form>
                  <fieldset>
                    <div className="mt-24 mb-32">
                      <Button
                        color="primary"
                        onClick={handleSignIn}
                        wide
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          padding: "auto 15px auto 15px",
                        }}
                      >
                        <img
                          style={{
                            marginRight: "2rem",
                            height: "20px",
                            width: "20px",
                          }}
                          src={googleLogo}
                          alt="Logo"
                        />
                        Sign up with Google
                      </Button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

SignupForm.propTypes = propTypes;
SignupForm.defaultProps = defaultProps;

export default SignupForm;

import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import { Link } from "react-router-dom";
import SectionHeader from "./partials/SectionHeader";
import Input from "../elements/Input";
import Button from "../elements/Button";
import googleLogo from "../../assets/images/google.png";

import { auth, provider } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUser,
  setUserLogOutState,
  selectUserEmail,
  selectUserName,
} from "../../store/userSlice";
import { Autocomplete } from "@material-ui/lab";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

function SignupForm() {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const handleSignIn = () => {
    auth()
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          setActiveUser({
            userName: result.user.displayName,
            userEmail: result.user.email,
          })
        );
        var credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
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
                <div className="signin-bottom has-top-divider">
                  <div className="pt-32 text-xs center-content text-color-low">
                    Already have an account?{" "}
                    <Link to="/login/" className="func-link">
                      Login
                    </Link>
                  </div>
                </div>
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

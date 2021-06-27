import React, {useState} from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Image from "../elements/Image";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import GitHubIcon from "@material-ui/icons/GitHub";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ContactsIcon from "@material-ui/icons/Contacts";
import { useHistory } from "react-router-dom";

const categories = [

  {
    id: "Help",
    children: [
      {
        id: "Wiki",
        icon: <LibraryBooksIcon style={{ fontSize: 25 }} />,
        link: "https://github.com/Web-App-zur-Einzelblattmontagen/offshoreSingleBladeInstallation/wiki/Contact",
      },
      {
        id: "Contact",
        icon: <ContactsIcon style={{ fontSize: 25 }} />,
        link: "https://github.com/Web-App-zur-Einzelblattmontagen/offshoreSingleBladeInstallation/wiki/Contact",
      },
      {
        id: "Code on Github",
        icon: <GitHubIcon style={{ fontSize: 25 }} />,
        link: "https://github.com/Web-App-zur-Einzelblattmontagen/offshoreSingleBladeInstallation",
      },
    ],
  },
  {
    id: "Settings",
    children: [
      {
        id: "Logout",
        icon: <ExitToAppIcon style={{ fontSize: 25 }} />,
        onClick: "DS",
      },
    ],
  },
];

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(2),
  },

  categoryHeaderPrimary: {
    color: theme.palette.common.white,
    fontSize: 30,
  },
  item: {
    paddingTop: 1,
    fontSize: 25,
    paddingBottom: 1,

    color: "rgba(255, 255, 255, 0.7)",
    "&:hover,&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
  },
  itemCategory: {
    backgroundColor: "#232f3e",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: theme.spacing(2),

    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 60,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: "#4fc3f7",
  },
  itemPrimary: {
    fontSize: "inherit",
  },
  itemIcon: {
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
});

function Navigator(props) {
  const history = useHistory();
  const { classes, ...other } = props;

  return (
    
    <Drawer variant="permanent" className={classes.drawer}>
      <List disablePadding>
      <Image
                    className="has-shadow"
                    src={require("./../../assets/images/bikLogo.svg")}
                    alt="Features split 02"

                    style={{ borderRadius: "10px", padding: "20px", width: "250px" }}
                  />
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, link }) => (
              <div
                onClick={
                  childId === "Logout"
                    ? () => {
                        localStorage.setItem("userName", "");
                        localStorage.setItem("userEmail", "");
                        localStorage.setItem("userID", "");
                        history.push("/signUp");
                      }
                    : console.log()
                }
              >
                <a
                  href={link}
                  style={{ textDecoration: "none" }}
                  target={"_blank"}
                >
                  <ListItem
                    key={childId}
                    button
                    className={clsx(
                      classes.item,
                      active && classes.itemActiveItem
                    )}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.itemPrimary,
                      }}
                    >
                      {childId}
                    </ListItemText>
                  </ListItem>
                </a>
              </div>
            ))}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);

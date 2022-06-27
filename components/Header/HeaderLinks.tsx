/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@mui/styles";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { Icon } from "@mui/material";
import { Hidden } from "@mui/material";

// @material-ui/icons
import { Apps } from "@mui/icons-material";
import { ShoppingCart } from "@mui/icons-material";
import { ViewDay } from "@mui/icons-material";
import { Dns } from "@mui/icons-material";
import { Build } from "@mui/icons-material";
import { ListAlt } from "@mui/icons-material";
import { People } from "@mui/icons-material";
import { Assignment } from "@mui/icons-material";
import { MonetizationOn } from "@mui/icons-material";
import { Chat } from "@mui/icons-material";
import { Call } from "@mui/icons-material";
import { ViewCarousel } from "@mui/icons-material";
import { AccountBalance } from "@mui/icons-material";
import { ArtTrack } from "@mui/icons-material";
import { ViewQuilt } from "@mui/icons-material";
import { LocationOn } from "@mui/icons-material";
import { Fingerprint } from "@mui/icons-material";
import { AttachMoney } from "@mui/icons-material";
import { Store } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import { PersonAdd } from "@mui/icons-material";
import { Layers } from "@mui/icons-material";
import { ShoppingBasket } from "@mui/icons-material";
import { LineStyle } from "@mui/icons-material";
import { Error } from "@mui/icons-material";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Button from "../CustomButtons/Button";

import styles from "../../styles/ts/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props: any) {
  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, target: string) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll!.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element: HTMLElement, to: number, duration: number) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/presentation">
              <a className={classes.dropdownLink}>
                <LineStyle className={classes.dropdownIcons} /> Presentation
                Page
              </a>
            </Link>,
            <Link href="/components">
              <a className={classes.dropdownLink}>
                <Layers className={classes.dropdownIcons} />
                All components
              </a>
            </Link>,
            <a
              href="#"
              target="_blank"
              className={classes.dropdownLink}
            >
              <Icon className={classes.dropdownIcons}>content_paste</Icon>
              Documentation
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Sections"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={ViewDay}
          dropdownList={[
            <Link href="/sections#headers">
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, "headers")}
              >
                <Dns className={classes.dropdownIcons} /> Headers
              </a>
            </Link>,
            <Link href="/sections#features">
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, "features")}
              >
                <Build className={classes.dropdownIcons} /> Features
              </a>
            </Link>,
            <Link href="/sections#blogs">
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, "blogs")}
              >
                <ListAlt className={classes.dropdownIcons} /> Blogs
              </a>
            </Link>,
            <Link href="/sections#teams">
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, "teams")}
              >
                <People className={classes.dropdownIcons} /> Teams
              </a>
            </Link>,
            <Link href="/sections#projects">
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, "projects")}
              >
                <Assignment className={classes.dropdownIcons} /> Projects
              </a>
            </Link>,
            <Link href="/sections#pricing">
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, "pricing")}
              >
                <MonetizationOn className={classes.dropdownIcons} /> Pricing
              </a>
            </Link>,
            <Link href="/sections#testimonials">
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, "testimonials")}
              >
                <Chat className={classes.dropdownIcons} /> Testimonials
              </a>
            </Link>,
            <Link href="/sections#contacts">
              <a
                className={classes.dropdownLink}
                onClick={(e) => smoothScroll(e, "contacts")}
              >
                <Call className={classes.dropdownIcons} /> Contacts
              </a>
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Examples"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={ViewCarousel}
          dropdownList={[
            <Link href="/about-us">
              <a className={classes.dropdownLink}>
                <AccountBalance className={classes.dropdownIcons} /> About Us
              </a>
            </Link>,
            <Link href="/blog-post">
              <a className={classes.dropdownLink}>
                <ArtTrack className={classes.dropdownIcons} /> Blog Post
              </a>
            </Link>,
            <Link href="/blog-posts">
              <a className={classes.dropdownLink}>
                <ViewQuilt className={classes.dropdownIcons} /> Blog Posts
              </a>
            </Link>,
            <Link href="/contact-us">
              <a className={classes.dropdownLink}>
                <LocationOn className={classes.dropdownIcons} /> Contact Us
              </a>
            </Link>,
            <Link href="/landing-page">
              <a className={classes.dropdownLink}>
                <ViewDay className={classes.dropdownIcons} /> Landing Page
              </a>
            </Link>,
            <Link href="/login">
              <a className={classes.dropdownLink}>
                <Fingerprint className={classes.dropdownIcons} /> Login Page
              </a>
            </Link>,
            <Link href="/pricing">
              <a className={classes.dropdownLink}>
                <AttachMoney className={classes.dropdownIcons} /> Pricing Page
              </a>
            </Link>,
            <Link href="/shopping-cart">
              <a className={classes.dropdownLink}>
                <ShoppingBasket className={classes.dropdownIcons} /> Shopping
                Cart
              </a>
            </Link>,
            <Link href="/ecommerce">
              <a className={classes.dropdownLink}>
                <Store className={classes.dropdownIcons} /> Ecommerce Page
              </a>
            </Link>,
            <Link href="/product">
              <a className={classes.dropdownLink}>
                <ShoppingCart className={classes.dropdownIcons} /> Product Page
              </a>
            </Link>,
            <Link href="/profile">
              <a className={classes.dropdownLink}>
                <AccountCircle className={classes.dropdownIcons} /> Profile Page
              </a>
            </Link>,
            <Link href="/signup">
              <a className={classes.dropdownLink}>
                <PersonAdd className={classes.dropdownIcons} /> Signup Page
              </a>
            </Link>,
            <Link href="/error-page">
              <a className={classes.dropdownLink}>
                <Error className={classes.dropdownIcons} /> Error Page
              </a>
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Hidden mdDown>
          <Button
            href="#"
            color={"white"}
            target="_blank"
            className={classes.navButton}
            round
          >
            <ShoppingCart className={classes.icons} /> buy now
          </Button>
        </Hidden>
        <Hidden mdUp>
          <Button
            href="#"
            color={"info"}
            target="_blank"
            className={classes.navButton}
            round
          >
            <ShoppingCart className={classes.icons} /> buy now
          </Button>
        </Hidden>
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary",
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
};

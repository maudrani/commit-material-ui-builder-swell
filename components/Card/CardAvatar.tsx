import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@mui/styles";
// @material-ui/icons
// core components

import styles from "../../styles/ts/components/cardAvatarStyle";

const useStyles = makeStyles(styles);

export default function CardAvatar(props: {
  [x: string]: any;
  children: any;
  className: any;
  plain: any;
  profile: any;
  testimonial: any;
  testimonialFooter: any;
}) {
  const {
    children,
    className,
    plain,
    profile,
    testimonial,
    testimonialFooter,
    ...rest
  } = props;
  const classes = useStyles();
  const cardAvatarClasses = classNames({
    [classes.cardAvatar]: true,
    [classes.cardAvatarProfile]: profile,
    [classes.cardAvatarPlain]: plain,
    [classes.cardAvatarTestimonial]: testimonial,
    [classes.cardAvatarTestimonialFooter]: testimonialFooter,
    [className]: className !== undefined,
  });
  return (
    <div className={cardAvatarClasses} {...rest}>
      {children}
    </div>
  );
}

CardAvatar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  profile: PropTypes.bool,
  plain: PropTypes.bool,
  testimonial: PropTypes.bool,
  testimonialFooter: PropTypes.bool,
};

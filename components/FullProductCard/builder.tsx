import ImageGallery from "react-image-gallery";
import { Builder } from "@builder.io/react";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Button from "../../components/CustomButtons/Button";
import Accordion from "../../components/Accordion/Accordion";
import { ShoppingCart } from "@mui/icons-material";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import { FormControl } from "@mui/material";
import productStyle from "../../styles/ts/pages/productStyle";
import React from "react";

const useStyles = makeStyles(productStyle);

const images = [
  {
    original: "/images/product/product3.jpg",
    thumbnail: "/images/product/product3.jpg",
  },
  {
    original: "/images/product/product4.jpg",
    thumbnail: "/images/product/product4.jpg",
  },
  {
    original: "/images/product/product1.jpg",
    thumbnail: "/images/product/product1.jpg",
  },
  {
    original: "/images/product/product2.jpg",
    thumbnail: "/images/product/product2.jpg",
  },
];

const Componentx = () => {
  const classes = useStyles();
  const [colorSelect, setColorSelect] = React.useState("0");
  const [sizeSelect, setSizeSelect] = React.useState("0");

  return (
    <div className={classNames(classes.fullProductCard)}>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer>
          <GridItem md={6} sm={6}>
            <ImageGallery
              showFullscreenButton={false}
              showPlayButton={false}
              startIndex={3}
              items={images}
              showThumbnails={true}
              renderLeftNav={(onClick, disabled) => {
                return (
                  <button
                    className="image-gallery-left-nav"
                    disabled={disabled}
                    onClick={onClick}
                  />
                );
              }}
              renderRightNav={(onClick, disabled) => {
                return (
                  <button
                    className="image-gallery-right-nav"
                    disabled={disabled}
                    onClick={onClick}
                  />
                );
              }}
            />
          </GridItem>
          <GridItem md={6} sm={6}>
            <h2 className={classes.title}>Becky Silk Blazer</h2>
            <h3 className={classes.mainPrice}>$335</h3>
            <Accordion
              active={[0]}
              activeColor="rose"
              collapses={[
                {
                  title: "Description",
                  content: (
                    <p>
                      Eres{"'"} daring {"'"}Grigri Fortune{"'"} swimsuit has the
                      fit and coverage of a bikini in a one-piece silhouette.
                      This fuchsia style is crafted from the label{"'"}s
                      sculpting peau douce fabric and has flattering cutouts
                      through the torso and back. Wear yours with mirrored
                      sunglasses on vacation.
                    </p>
                  ),
                },
                {
                  title: "Designer Information",
                  content: (
                    <p>
                      An infusion of West Coast cool and New York attitude,
                      Rebecca Minkoff is synonymous with It girl style. Minkoff
                      burst on the fashion scene with her best-selling {"'"}
                      Morning After Bag{"'"} and later expanded her offering
                      with the Rebecca Minkoff Collection - a range of luxe city
                      staples with a {'"'}
                      downtown romantic{'"'} theme.
                    </p>
                  ),
                },
                {
                  title: "Details and Care",
                  content: (
                    <ul>
                      <li>Storm and midnight-blue stretch cotton-blend</li>
                      <li>
                        Notch lapels, functioning buttoned cuffs, two front flap
                        pockets, single vent, internal pocket
                      </li>
                      <li>Two button fastening</li>
                      <li>84% cotton, 14% nylon, 2% elastane</li>
                      <li>Dry clean</li>
                    </ul>
                  ),
                },
              ]}
            />
            <GridContainer className={classes.pickSize}>
              <GridItem md={6} sm={6}>
                <label>Select color</label>
                <FormControl fullWidth className={classes.selectFormControl}>
                  <Select
                    MenuProps={{
                      className: classes.selectMenu,
                    }}
                    classes={{
                      select: classes.select,
                    }}
                    value={colorSelect}
                    onChange={(event) => setColorSelect(event.target.value)}
                    inputProps={{
                      name: "colorSelect",
                      id: "color-select",
                    }}
                  >
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected,
                      }}
                      value="0"
                    >
                      Rose
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected,
                      }}
                      value="1"
                    >
                      Gray
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected,
                      }}
                      value="2"
                    >
                      White
                    </MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem md={6} sm={6}>
                <label>Select size</label>
                <FormControl fullWidth className={classes.selectFormControl}>
                  <Select
                    MenuProps={{
                      className: classes.selectMenu,
                    }}
                    classes={{
                      select: classes.select,
                    }}
                    value={sizeSelect}
                    onChange={(event) => setSizeSelect(event.target.value)}
                    inputProps={{
                      name: "sizeSelect",
                      id: "size-select",
                    }}
                  >
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected,
                      }}
                      value="0"
                    >
                      Small
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected,
                      }}
                      value="1"
                    >
                      Medium
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected,
                      }}
                      value="2"
                    >
                      Large
                    </MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
            </GridContainer>
            <GridContainer className={classes.pullRight}>
              <Button round color="rose">
                Add to Cart &nbsp; <ShoppingCart />
              </Button>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

Builder.registerComponent(Componentx, {
  name: "Full Product Card",
  inputs: [],
});

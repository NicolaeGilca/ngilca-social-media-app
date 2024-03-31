import React, { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import RightSide from "../../rightSide/RightSide";
import RightSideProgress from "../../rightSide/RightSideProgress";
import RightSideUserAcctions from "../../rightSide/RightSideUserAcctions";
import RightSideUserDesc from "../../rightSide/RightSideUserDesc";
import style from "./Profile.module.scss";
import LeftSide from "../../leftside/LeftSide";

const Profile = () => {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      author: "@bkristastucchio",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
      author: "@rollelflex_graphy726",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
      author: "@helloimnik",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      author: "@nolanissac",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      author: "@hjrc33",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
      author: "@arwinneil",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
      author: "@tjdragotta",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
      author: "@katie_wasserman",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
      author: "@silverdalex",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
      author: "@shelleypauls",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
      author: "@peterlaster",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
      author: "@southside_customs",
    },
  ];

  const [value, setValue] = useState(0); // State to manage selected tab

  const handleChange = (event, newValue) => {
    setValue(newValue); // Update selected tab
  };

  return (
    <>
      <div className={style.profileContainer}>
        <div className={style.profileItemMenu}>
          <div className={style.profileMenu}></div>
        </div>
        <div className={style.profileItemTabs}>
          <div className={style.profileTabs}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                textColor="grey4"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="My Photos" />
                <Tab label="My Posts" />
                <Tab label="Friends" />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {
                <ImageList sx={{ width: 500, height: 450 }}>
                  {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        title={item.title}
                        subtitle={<span>Travel albom</span>}
                        position="below"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              }
            </TabPanel>
            <TabPanel value={value} index={1}>
              {
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              }
            </TabPanel>
            <TabPanel value={value} index={2}>
              {3}
            </TabPanel>
          </div>
        </div>
        <div className={style.profileItem}>
          <div className={style.profileDescription}>
            <RightSideUserDesc />
            <RightSideProgress />
          </div>
        </div>
      </div>
    </>
  );
};

// Custom TabPanel component to conditionally render content based on the selected tab
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export default Profile;

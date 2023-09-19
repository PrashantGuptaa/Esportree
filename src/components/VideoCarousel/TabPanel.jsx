import React, { Fragment, useState } from "react";
import { Box, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="w-[100%]  flex justify-center "
    >
      {value === index && (
        <Box sx={{ width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', }}>
          <Box sx={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',p:1}}>{children}</Box>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const TabPanel = ({options,comp}) => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    e.preventDefault();
    setValue(newValue);
  };
  const obj = useSelector((state) => state.CounterSliceReducer);
  const isNonMobileScreens = useMediaQuery("(min-width:900px)");

  return (
    <Fragment>
      <Box
        sx={{
          width: isNonMobileScreens? "85%" :"100%",mt:'20px' ,bgcolor:"" ,display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center',
          backgroundColor: obj.light ? "white" : "#2c2c2c",
        }}
      >
        <Box
          sx={{
            
            borderColor: "divider",
            borderBottom: 1, width:"100%", display: 'flex',
            justifyContent:"center",
            backgroundColor: obj.light ? "white" : "#2c2c2c",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              width:"100%",
              bgcolor:"red",
              display:'flex',
              flexDirection:'row',
              alignItems:"flex-end",
              justifyContent:'center'
            }}
            aria-label="basic tabs example"
          >{
            options.map((item,id)=>(
              <Tab
              key={id}
              sx={{ fontWeight: "bold", 
              flexGrow:1,
              textTransform:'capitalize',
              color: obj.light ? "black" : "white" }}
              label={`${item}`}
              {...a11yProps(id)}
            />
            ))
          }
           
           {/*  <Tab
              sx={{ fontWeight: "bold" ,
              color: obj.light ? "black" : "white" 
            
            }}
              label="Mentions"
              {...a11yProps(1)}
            /> */}
            {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
          </Tabs>
        </Box>
        {comp.map((item,id)=>(
          <CustomTabPanel key={id} value={value} index={id}>
          {item}
        </CustomTabPanel>
        ))}
        
      
        {/* <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel> */}
      </Box>
    </Fragment>
  );
};

export default TabPanel;

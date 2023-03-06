import { Button, Drawer } from 'antd';
import React, { useEffect, useState } from 'react';

const MyDrawer = (props) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <Button type="primary" onClick={showDrawer}> */}
      <p onClick={showDrawer} className={'single_item'}>
        {props.title}
      </p>
      {/* </Button> */}
      {/* <Drawer title="详细信息" placement="right" onClose={props.drawer_onClose} open={props.open}> */}
      <Drawer title="详细信息" placement="right" onClose={onClose} open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default MyDrawer;
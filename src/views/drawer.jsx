import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

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
      <p onClick={showDrawer}>
        {props.title}
      </p>
      {/* </Button> */}
      <Drawer title="详细信息" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default MyDrawer;
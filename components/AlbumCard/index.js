import { RightOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Tooltip } from 'antd';
import Router from 'next/router';
import React from 'react';

const AlbumCard = ({ album, user }) => {
  const handleViewAlbum = () => {
    Router.push({
      pathname: `/${album.id}`,
    });
  };

  return (
    <Card
      type="inner"
      hoverable
      actions={[
        <Tooltip title="User details">
          <Button icon={<UserOutlined />} shape="circle" />
        </Tooltip>,
        <Tooltip title="View Album">
          <Button
            icon={<RightOutlined />}
            shape="circle"
            onClick={handleViewAlbum}
          />
        </Tooltip>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar size={40}>{album.title[0].toUpperCase()}</Avatar>}
        title={album.title}
        description={`Created by: ${user.name}`}
      />
    </Card>
  );
};

export default AlbumCard;

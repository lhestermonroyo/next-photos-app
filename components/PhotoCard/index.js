import { Card } from 'antd';
import React from 'react';

const PhotoCard = ({ photo }) => {
  return (
    <Card hoverable cover={<img src={photo.url} alt={photo.title} />}>
      <Card.Meta title={photo.title}></Card.Meta>
    </Card>
  );
};

export default PhotoCard;

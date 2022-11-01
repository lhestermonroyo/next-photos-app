import Head from 'next/head';
import { Col, Row } from 'antd';
import AlbumCard from '../components/AlbumCard';
import fetchAlbums from './api/fetchAlbums';
import fetchUsers from './api/fetchUsers';

export default function Home({ albums, users }) {
  return (
    <div className="container">
      <Head>
        <title>Albums - Photos App</title>
      </Head>
      <h1>Albums</h1>
      <Row gutter={[16, 16]}>
        {Array.isArray(users) &&
          Array.isArray(albums) &&
          albums.map((album, i) => {
            let user = users.find(user => user.id === album.userId);
            return (
              <Col lg={8}>
                <AlbumCard key={i} album={album} user={user} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export async function getServerSideProps() {
  const [albums, users] = await Promise.all([fetchAlbums(), fetchUsers()]);

  return {
    props: {
      albums,
      users,
    },
  };
}

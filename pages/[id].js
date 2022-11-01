import Head from 'next/head';
import { useRouter } from 'next/router';
import PhotoCard from '../components/PhotoCard';
import fetchAlbumDetails from './api/fetchAlbumDetails';
import { Col, Row } from 'antd';
// import AlbumCard from '../components/AlbumCard';
// import fetchAlbums from './api/fetchAlbums';
// import fetchUsers from './api/fetchUsers';

export default function AlbumDetails({ albumDetails, photos }) {
  return (
    <div className="container">
      <Head>
        <title>{albumDetails.title} - Photos App</title>
      </Head>
      <Row gutter={[16, 16]}>
        {Array.isArray(photos) &&
          photos.map((photo, i) => {
            return (
              <Col lg={6}>
                <PhotoCard key={i} photo={photo} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const albumDetails = await fetchAlbumDetails(id);

  return {
    props: {
      albumDetails: albumDetails.albumDetails,
      photos: albumDetails.photos,
    },
  };
}

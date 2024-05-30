import HelmetMeta from '@components/Helmet/HelmetMeta';
import MyProfile from '@components/MyProfile/MyProfile';
import ProjectGallery from '@components/ProjectGallery/ProjectGallery';

export default function Portfolio() {
  const title = '';
  const description = '';

  return (
    <main>
      <HelmetMeta title={title} description={description} />
      <MyProfile />
      <ProjectGallery />
    </main>
  );
}

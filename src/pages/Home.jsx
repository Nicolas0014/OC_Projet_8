import HelmetMeta from '@components/Helmet/HelmetMeta';
import MyProfile from '@components/MyProfile/MyProfile';
import MyTechs from '@components/MyTechs/MyTechs';
import ProjectGallery from '@components/ProjectGallery/ProjectGallery';

export default function Home() {
  const title = '';
  const description = '';

  return (
    <main>
      <HelmetMeta title={title} description={description} />
      <MyProfile />
      <MyTechs />
      <ProjectGallery />
    </main>
  );
}

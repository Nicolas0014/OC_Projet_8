import { Helmet } from 'react-helmet';

export default function HelmetMeta({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />    
    </Helmet>
  );
}

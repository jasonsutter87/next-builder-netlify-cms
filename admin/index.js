import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the Netlify CMS admin URL
    router.push('/admin/index.html');
  }, []);

  return <></>;
};

export default AdminPage;

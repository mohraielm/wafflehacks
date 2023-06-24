import React, { useEffect } from 'react';
import TikAPI from 'tikapi';

const UserChecker = () => {
  useEffect(() => {
    const fetchData = async () => {
      const api = TikAPI("myAPIKey");

      try {
        const response = await api.public.check({
          username: "lilyachty"
        });
        console.log(response.json);
      } catch (err) {
        console.log(err?.statusCode, err?.message, err?.json);
      }
    };

    fetchData();
  }, []);

  return <div>Check console for API response</div>;
};

export default UserChecker;
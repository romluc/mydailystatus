import React, { useEffect } from 'react';
import router from 'next/router';
import auth0 from '../lib/auth0';

const App = (props) => {
  useEffect(() => {
    if (!props.isAuth) {
      router.push('/');
    }
  });
  if (!props.isAuth) {
    return null;
  }
  return (
    <div>
      <h1>App</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default App;

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req);
  if (session) {
    return {
      props: {
        isAuth: true,
        user: session.user,
      },
    };
  } else {
    return {
      props: {
        isAuth: false,
        user: {},
      },
    };
  }
}

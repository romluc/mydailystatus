import React, { useState } from 'react';
import auth0 from '../lib/auth0';
import axios from 'axios';

const CreateStatus = () => {
  const [data, setData] = useState({
    status: 'ok',
    coords: {
      lat: null,
      long: null,
    },
  });

  const getMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setData((old) => {
          return {
            ...old,
            coords: {
              lat: position.coords.latitude,
              long: position.coords.longitude,
            },
          };
        });
      });
    }
  };

  const onStatusChange = (evt) => {
    const value = evt.target.value;
    setData((old) => {
      return {
        ...old,
        status: value,
      };
    });
  };

  const save = async () => {
    await axios.post('/api/save-status', data);
  };

  return (
    <div>
      <h1>Create status!</h1>
      <label className='block'>
        <input type='radio' name='status' value='ok' onClick={onStatusChange} />
        I'm ok! No symptoms! =D
      </label>
      <label className='block'>
        <input
          type='radio'
          name='status'
          value='flu'
          onClick={onStatusChange}
        />
        I've got the flu or common cold symptoms! =/
      </label>
      <label className='block'>
        <input
          type='radio'
          name='status'
          value='covid'
          onClick={onStatusChange}
        />
        I might have got covid! =(
      </label>
      <pre>{JSON.stringify(data)}</pre>
      <button onClick={getMyLocation}>Get my location</button>
      <button onClick={save}>Save my status</button>
    </div>
  );
};

export default CreateStatus;

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

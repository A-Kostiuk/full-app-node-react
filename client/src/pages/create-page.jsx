import React, { useContext, useEffect, useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../contex/auth-contex';
import { useNavigate } from 'react-router-dom';

function CreatePage(props) {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [link, setLink] = useState('');
  const { request } = useHttp();

  useEffect(() => {
    window.M.updateTextFields();
  }, []);


  const pressHandler = async (evt) => {
    if (evt.key === 'Enter') {
      try {
        const data = await request('/api/link/generate', 'POST', { from: link }, {
          Authorization: `Bearer ${auth.token}`,
        });
        navigate(`/detail/${data.link._id}`);
      } catch (e) {

      }
    }
  };
  return (
    <div className="row" style={{ paddingTop: '2em' }}>
      <div className="col s8 offset-s2">
        <div className="input-field">
          <input
            placeholder="Paste link"
            id="link"
            type="text"
            value={link}
            onChange={evt => setLink(evt.target.value)}
            onKeyPress={pressHandler}
          />
          <label
            htmlFor="link"
          >
            Input link
          </label>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;

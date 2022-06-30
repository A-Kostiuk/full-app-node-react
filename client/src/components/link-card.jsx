import React from 'react';

function LinkCard({ link }) {
  return (
    <>
      <h2>{link.from.split('/')[2]}</h2>
      <p>Your link: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
      <p>Where: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
      <p>The number of clicks on the link: <strong>{link.clicks}</strong></p>
      <p>Date of creation: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
    </>
  );
}

export default LinkCard;

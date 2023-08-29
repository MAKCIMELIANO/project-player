import React from 'react';

export default function Card({ title, text }) {
  return (
    <article className="card">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text}</p>
      </div>
    </article>
  );
}

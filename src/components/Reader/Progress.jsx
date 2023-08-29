import React from 'react';

export default function Progress({ current, total }) {
  return (
    <p>
      {current}/{total}
    </p>
  );
}

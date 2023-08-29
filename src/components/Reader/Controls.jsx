import React from 'react';

export default function Controls({ cyclicallyChangeIndex }) {
  return (
    <section>
      <button type="button" onClick={() => cyclicallyChangeIndex(-1)}>
        Назад
      </button>
      <button type="button" onClick={() => cyclicallyChangeIndex(1)}>
        Вперед
      </button>
    </section>
  );
}

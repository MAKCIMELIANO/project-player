import React from 'react';

export default function Controls({ cyclicallyChangeIndex }) {
  return (
    <section>
      <button
        type="button"
        className="btn btn-primary mr-2"
        onClick={() => cyclicallyChangeIndex(-1)}
      >
        Назад
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => cyclicallyChangeIndex(1)}
      >
        Вперед
      </button>
    </section>
  );
}

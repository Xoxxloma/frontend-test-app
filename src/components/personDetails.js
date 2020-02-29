import React from "react";

const PersonDetails = ({ person }) => {
  return (
    <div className="card text-center">
      <div className="card-header">Выбран пользователь</div>
      <div className="card-body">
        <h5 className="card-title">{person.firstName} {person.lastName}</h5>
        <textarea className="form-control" defaultValue={person.description} />
      </div>
      <div className="card-text">
        <p>
          Адрес проживания: <b>{person.address.streetAddress}</b>
        </p>
        <p>
          Город: <b>{person.address.city}</b>
        </p>
        <p>
          Провинция/штат: <b>{person.address.state}</b>
        </p>
        <p>
          Индекс: <b>{person.address.zip}</b>
        </p>
      </div>
    </div>
  );
};

export default PersonDetails;

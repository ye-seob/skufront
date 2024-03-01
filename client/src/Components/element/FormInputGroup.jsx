import React from 'react';

const FormInputGroup = ({ id, type, placeholder, value, onChange }) => {
  return (
    <div className="form-group" style={{ marginBottom: '20px' }}>
      <input 
        className="form-control"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInputGroup;
import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = ({value, onChange}) => {
    return (
    <Label >
      Finde contacts by name
        <Input
          type="text"
          name='filter'
          value={value}
          onChange={onChange} />
    </Label>
    );
};

Filter.propType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Filter;


import React from 'react';
import { Label, Input } from './Filter.styled';

const Filter = ({value, onChange}) => {
    return (
    <Label >
      Finde contacts by name
      <Input type="text" name='filter' value={value} onChange={onChange} />
    </Label>
    );
};

export default Filter;


import React, { useState } from 'react';

interface AddBlockFormProps {
  onAddBlock: (block: { key: string; color: string; param1: string; param2: string }) => void;
}

const colorOptions = ['lightblue', 'orange', 'green', 'red', 'purple', 'yellow'];

const AddBlockForm: React.FC<AddBlockFormProps> = ({ onAddBlock }) => {
  const [key, setKey] = useState('');
  const [color, setColor] = useState('lightblue');
  const [param1, setParam1] = useState('');
  const [param2, setParam2] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddBlock({ key, color, param1, param2 });
    setKey('');
    setColor('lightblue'); // Reset to default color
    setParam1('');
    setParam2('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Key:
          <input type="text" value={key} onChange={(e) => setKey(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Color:
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            {colorOptions.map((colorOption) => (
              <option key={colorOption} value={colorOption}>
                {colorOption}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Param1:
          <input type="text" value={param1} onChange={(e) => setParam1(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Param2:
          <input type="text" value={param2} onChange={(e) => setParam2(e.target.value)} />
        </label>
      </div>
      <button type="submit">Add Block</button>
    </form>
  );
};

export default AddBlockForm;
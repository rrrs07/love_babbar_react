import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Widget = ({ categoryId, widget, onEdit, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(widget.content);

  const handleEdit = () => {
    onEdit(categoryId, widget.id, content);
    setEditing(false);
  };

  return (
    <div className="card text-center" style={{ width: '100%', maxWidth: '18rem' }}>
      <div className="card-body">
        {editing ? (
          <div>
            <input
              type="text"
              className="form-control mb-2"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button className="btn btn-primary me-2" onClick={handleEdit}>Save</button>
            <button className="btn btn-secondary" onClick={() => setEditing(false)}>Cancel</button>
          </div>
        ) : (
          <div>
            <h5 className="card-title">{widget.name}</h5>
            <p className="card-text">{widget.content}</p>
            <button className="btn btn-primary me-2" onClick={() => setEditing(true)}>Edit</button>
            <button className="btn btn-danger" onClick={() => onDelete(categoryId, widget.id)}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Widget;
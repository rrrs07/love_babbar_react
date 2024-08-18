import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Widget from './Widget';
import data from './data.json';

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [newWidgetContent, setNewWidgetContent] = useState('');
  const [newWidgetName, setNewWidgetName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDashboard, setSelectedDashboard] = useState('');

  useEffect(() => {
    setCategories(data.categories);
  }, []);

  const addWidget = () => {
    if (newWidgetContent.trim() !== '' && newWidgetName.trim() !== '' && selectedCategory !== '') {
      setCategories(categories.map(category => 
        category.id === selectedCategory ? {
          ...category,
          widgets: [...category.widgets, { id: uuidv4(), name: newWidgetName, content: newWidgetContent }]
        } : category
      ));
      setNewWidgetContent('');
      setNewWidgetName('');
    }
  };

  const editWidget = (categoryId, widgetId, newContent) => {
    setCategories(categories.map(category =>
      category.id === categoryId ? {
        ...category,
        widgets: category.widgets.map(widget =>
          widget.id === widgetId ? { ...widget, content: newContent } : widget
        )
      } : category
    ));
  };

  const deleteWidget = (categoryId, widgetId) => {
    setCategories(categories.map(category => {
      if (category.id === categoryId) {
        const updatedWidgets = category.widgets.filter(widget => widget.id !== widgetId);
        return { ...category, widgets: updatedWidgets };
      }
      return category;
    }));
  };

  return (
    <div className="container">
      <div className="input-group my-3">
        <select className="form-select" value={selectedDashboard} onChange={(e) => setSelectedDashboard(e.target.value)}>
          <option value="">Select Dashboard</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
        <select className="form-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
        <input
          type="text"
          className="form-control"
          placeholder="Enter widget name"
          value={newWidgetName}
          onChange={(e) => setNewWidgetName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Enter widget content"
          value={newWidgetContent}
          onChange={(e) => setNewWidgetContent(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addWidget}>Add Widget</button>
      </div>
      {categories.filter(category => category.id === selectedDashboard).map(category => (
        <div key={category.id} className="mb-4">
          <h3>{category.name}</h3>
          <div className="row justify-content-center">
            {category.widgets.length > 0 ? (
              category.widgets.map(widget => (
                <div className="col-12 col-sm-6 col-md-4 mb-3 d-flex justify-content-center" key={widget.id}>
                  <Widget categoryId={category.id} widget={widget} onEdit={editWidget} onDelete={deleteWidget} />
                </div>
              ))
            ) : (
              <p>No widgets available. Add a new widget to get started.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
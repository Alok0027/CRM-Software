import React, { useState, useEffect } from 'react';
import { FiX, FiPaperclip, FiMessageSquare, FiCheckSquare, FiTrash2, FiPlus, FiMail } from 'react-icons/fi';
import { FaRegUserCircle } from 'react-icons/fa';

const TaskModal = ({ task, isOpen, onClose, onSave }) => {
  const [newSubtask, setNewSubtask] = useState('');
  const [newComment, setNewComment] = useState('');
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (isOpen) {
      setFormData(task ? { ...task } : {
        title: '',
        description: '',
        priority: 'Medium',
        assignees: [],
        dueDate: '',
      });
    }
  }, [task, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleChecklistChange = (subtaskId, completed) => {
    const updatedChecklist = formData.checklist.map(item => 
      item.id === subtaskId ? { ...item, completed } : item
    );
    setFormData(prev => ({ ...prev, checklist: updatedChecklist }));
  };

  const handleAddSubtask = () => {
    if (newSubtask.trim()) {
      const updatedChecklist = [
        ...(formData.checklist || []),
        { id: `sub-${Date.now()}`, text: newSubtask, completed: false },
      ];
      setFormData(prev => ({ ...prev, checklist: updatedChecklist }));
      setNewSubtask('');
    }
  };

  const handleDeleteSubtask = (subtaskId) => {
    const updatedChecklist = formData.checklist.filter(item => item.id !== subtaskId);
    setFormData(prev => ({ ...prev, checklist: updatedChecklist }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData, newComment);
    if (newComment) setNewComment('');
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      onSave(formData, newComment);
      setNewComment('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-300">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 sm:p-8 m-4 transform transition-all duration-300 scale-95 hover:scale-100">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-medium text-gray-800">{task ? 'Edit Task' : 'Create New Task'}</h2>
            <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100">
              <FiX size={24} />
            </button>
          </div>
          
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-normal text-gray-700 mb-1">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="e.g., Finalize Q3 report"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-normal text-gray-700 mb-1">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Add a more detailed description..."
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
              <select
                id="priority"
                name="priority"
                value={formData.priority || 'Medium'}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
            <div>
              <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={formData.dueDate || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-normal text-gray-800 mb-3">Comments</h3>
            <div className="space-y-3 max-h-40 overflow-y-auto pr-2">
              {(formData.comments || []).map(comment => (
                <div key={comment.id} className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">{comment.text}</p>
                  <p className="text-xs text-gray-500 mt-1 text-right">- {comment.author}</p>
                </div>
              ))}
              {(formData.comments || []).length === 0 && (
                <p className="text-sm text-gray-500">No comments yet.</p>
              )}
            </div>
            <div className="mt-4">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows="2"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Add a comment..."
              ></textarea>
              <button
                type="button"
                onClick={handleCommentSubmit}
                className="mt-2 px-4 py-2 text-sm text-white bg-orange-500 rounded-md hover:bg-orange-600 font-normal transition-colors"
              >
                Add Comment
              </button>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-normal text-gray-800 mb-3">Checklist</h3>
            <div className="space-y-2">
              {(formData.checklist || []).map(item => (
                <div key={item.id} className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg">
                  <input 
                    type="checkbox" 
                    checked={item.completed}
                    onChange={(e) => handleChecklistChange(item.id, e.target.checked)}
                    className="h-5 w-5 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className={`flex-1 text-sm ${item.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                    {item.text}
                  </span>
                  <button onClick={() => handleDeleteSubtask(item.id)} className="text-gray-400 hover:text-red-500">
                    <FiTrash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-3">
              <input 
                type="text"
                value={newSubtask}
                onChange={(e) => setNewSubtask(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddSubtask()}
                placeholder="Add a new sub-task"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm"
              />
              <button type="button" onClick={handleAddSubtask} className="px-4 py-2 text-sm text-white bg-orange-500 rounded-md hover:bg-orange-600 font-normal transition-colors">
                Add
              </button>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end items-center gap-3 mt-8 pt-6 border-t border-gray-200">
            <div className="flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 font-normal transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 font-normal shadow-md hover:shadow-lg transition-all"
              >
                {task && task.id ? 'Save Changes' : 'Create Task'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;

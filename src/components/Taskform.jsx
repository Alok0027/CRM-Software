import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, task, onCancel }) => {
    const [formData, setFormData] = useState({
        text: '',
        priority: 'Medium',
        dueDate: '',
    });

    useEffect(() => {
        if (task) {
            setFormData({
                text: task.text || '',
                priority: task.priority || 'Medium',
                dueDate: task.dueDate || new Date().toISOString().split('T')[0],
            });
        }
    }, [task]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const priorities = ['High', 'Medium', 'Low'];

    return (
        <form onSubmit={handleSubmit} className="space-y-6 font-sans">
            <div>
                <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-1">Task Description</label>
                <textarea 
                    name="text" 
                    id="text" 
                    value={formData.text} 
                    onChange={handleChange} 
                    required 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                    <select name="priority" id="priority" value={formData.priority} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition">
                        {priorities.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                    <input type="date" name="dueDate" id="dueDate" value={formData.dueDate} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition" />
                </div>
            </div>
            <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
                <button type="button" onClick={onCancel} className="px-6 py-2.5 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition">
                    Cancel
                </button>
                <button type="submit" className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                    Update Task
                </button>
            </div>
        </form>
    );
};

export default TaskForm;

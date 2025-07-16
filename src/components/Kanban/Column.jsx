import React from 'react';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { FiMoreHorizontal, FiPlus } from 'react-icons/fi';
import Task from './Task';

const Column = ({ id, title, tasks, onEditTask, onDeleteTask, onAddTask }) => {
  return (
    <div className="bg-gray-100/90 w-full rounded-xl p-4 flex flex-col shadow-sm">
      {/* Column Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-gray-800">{title}</h3>
          <span className="bg-gray-300 text-gray-600 text-xs font-semibold px-2 py-1 rounded-full">
            {tasks.length}
          </span>
        </div>
                <div className="flex items-center gap-1">
          <button onClick={() => onAddTask(id)} className="p-1 rounded-full hover:bg-gray-200">
            <FiPlus />
          </button>
          <button className="p-1 rounded-full hover:bg-gray-200">
            <FiMoreHorizontal />
          </button>
        </div>
      </div>

      {/* Tasks Container */}
      <div className="flex-grow space-y-3 overflow-y-auto pr-2">
        <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
          {tasks.map(task => (
            <Task key={task.id} task={task} onEdit={onEditTask} onDelete={onDeleteTask} />
          ))}
        </SortableContext>
      </div>

      {/* Add Card Button */}
      <button className="mt-4 w-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition-colors">
        <FiPlus size={18} className="mr-2" />
        Add a card
      </button>
    </div>
  );
};

export default Column;

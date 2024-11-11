import React from 'react';

import { FiSearch } from 'react-icons/fi';
import { MdOutlinePushPin, MdPushPin } from 'react-icons/md';

const NotebookHeader: React.FC<{
  isPinned: boolean;
  handleTogglePin: () => void;
}> = ({ isPinned, handleTogglePin }) => (
  <div className='notebook-header relative flex h-11 items-center px-3'>
    <div className='absolute inset-0 flex items-center justify-center'>
      <div className='notebook-title text-sm font-medium'>Notebook</div>
    </div>
    <div className='z-10 flex items-center space-x-3'>
      <button
        onClick={handleTogglePin}
        className={`${isPinned ? 'bg-gray-300' : 'bg-base-300'} btn btn-ghost btn-circle h-6 min-h-6 w-6`}
      >
        {isPinned ? <MdPushPin size={14} /> : <MdOutlinePushPin size={14} />}
      </button>
      <button className='btn btn-ghost left-0 h-8 min-h-8 w-8 p-0'>
        <FiSearch size={18} />
      </button>
    </div>
  </div>
);

export default NotebookHeader;
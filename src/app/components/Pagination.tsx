import { FC } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className='flex justify-center mt-8'>

      <button 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage == 1}
        className='bg-gray-200 px-4 py-2 rounded-l'
      >
        Previous
      </button>

      <span className='bg-gray-100 px-4 py-2'>
        {currentPage} / {totalPages}
      </span>

      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage == totalPages}
        className='bg-gray-200 px-4 py-2 rounded-r'
      >
        Next
      </button>

    </div>
  )
}

export default Pagination;
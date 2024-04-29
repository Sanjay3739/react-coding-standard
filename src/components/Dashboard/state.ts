export interface PaginationProps {
    currentPage: number;
    setCurrentPage: (value: React.SetStateAction<number>) => void;
    filteredData: any[];
    itemsPerPage: number;
  }
  
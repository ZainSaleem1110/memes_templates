import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function CustomIcons() {
  return (
    <Stack>
      <Pagination
        count={25}
        renderItem={(item) => (
          <PaginationItem className="pagination"
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}

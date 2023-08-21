import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationComponent(props) {
    const { totalPages, setPageNumber, pageNumber } = props;
    return (
        <Stack spacing={2} sx={{ margin: 'auto' }}>
            <Pagination count={totalPages} shape="rounded"
                onChange={(event, page) => { setPageNumber(page) }}
                page={pageNumber} />
        </Stack>
    );
}
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationComponent(props) {
    const { totalPages } = props;
    return (
        <Stack spacing={2}>
            <Pagination count={totalPages} shape="rounded" />
        </Stack>
    );
}
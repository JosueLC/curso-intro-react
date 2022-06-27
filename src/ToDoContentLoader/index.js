import React from 'react';
import ContentLoader from 'react-content-loader';

const ToDoContentLoader = (props) => (
    <ContentLoader
        speed={2}
        width={800}
        height={400}
        viewBox="0 0 800 400"
        backgroundColor="var(--gray)"
        foregroundColor="var(--white)"
        {...props}
    >
        <rect x="40" y="10" rx="3" ry="3" width="760" height="70" />
        <rect x="40" y="100" rx="3" ry="3" width="760" height="70" />
        <rect x="40" y="190" rx="3" ry="3" width="760" height="70" />
        <rect x="40" y="280" rx="3" ry="3" width="760" height="70" />
    </ContentLoader>
)

export {ToDoContentLoader};
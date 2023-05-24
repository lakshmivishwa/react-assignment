import React from "react";
export const Count = React.memo(({ label, count }) => {
    return (
        <h1>{label}={count}</h1>
    )
});

'use client';

import React from "react";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <html>
        <body>
                <h2>Something went wrong! here app</h2>
                <h2>Something went wrong! here app</h2>
                <h2>Something went wrong! here app </h2>
                <h2>Something went wrong! here app </h2>
                <button onClick={() => reset()}>Try again</button>
        </body>
        </html>
    );
}
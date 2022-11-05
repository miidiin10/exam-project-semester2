import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

export default function ErrorBoundary({ error }) {
  return (
    <div role="alert">
        <p>Something went wrong</p>
        <pre style={{ color: 'red'}}>{error.message}</pre>
    </div>
  );
}

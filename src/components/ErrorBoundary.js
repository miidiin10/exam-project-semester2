import * as React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

export default function ErrorFallback({ error }) {
  return (
    <div>
        <div role="alert">
            <p>Something went wrong</p>
            <pre style={{ color: 'red'}}>{error.message}</pre>
            <button onClick={restErrorBoundary}>Try Again</button>
        </div>
        <div>
            <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
            setUsername('');
            usernameRef.current.focus();
        }}
        resetKeys={[username]}
        >
            <Bomb username={username} />
    </ErrorBoundary>
        </div>
    </div>
        
  );

}

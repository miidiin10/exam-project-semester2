import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Helmet } from "react-helmet";


function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
}

function Bomb({ count: counting }) {
  if (counting === "1000") {
    throw new Error(" CABOOM CABOOM ");
  }
//   return `Number ${counting}`;
}

export default function ErrorApp() {
  const [count, setCount] = React.useState("");
  const countRef = React.useRef(null);

  return (
    <div className="errorBoundary">
      <div>
        <Helmet>
          <title>Error App</title>
          <meta name="description" content="Error App" />
        </Helmet>
        <label>
          {`Counting by Typing (don't enter "1000"): `}
          <input
            placeholder={'type "1000"'}
            value={count}
            onChange={(e) => setCount(e.target.value)}
            ref={countRef}
          />
        </label>

        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            setCount("");
            countRef.current.focus();
          }}
          resetKeys={[count]}
        >
          <Bomb count={count} />
        </ErrorBoundary>
      </div>
    </div>
  );
}

In Next.js 15, an uncommon bug can occur when using the `app` directory's new `fetch` API within a component's `useEffect` hook.  If you attempt to fetch data during the component's initial render within `useEffect` (without dependencies), the `fetch` might fail silently, or worse, return stale data from a previous request due to unexpected asynchronous behavior.
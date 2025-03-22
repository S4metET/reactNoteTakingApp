export default function detail(){
    return(
        <div>
            <div>
                <p>Key performence optimization techniques:</p>
            </div>
            <div>
                <p>
                1. Code Splitting <br />
                - Use React.lazy() for route-based splitting <br />
                - Implement dynamic imports for heavy components
                </p>
            </div>
            <div>
                <p>
                2. Memoization <br />
                - useMemo for expensive calculations <br />
                - useCallback for function props <br />
                - React.memo for component optimization <br />
                </p>
            </div>
            <div>
                <p>
                3. Virtual List Implementation <br />
                - Use react-window for long lists <br />
                - Implement infinite scrolling <br />
                </p>
            </div>
            <div>
                <p>
                TODO: Benchmark current application and identify bottlenecks
                </p>
            </div>
        </div>
    )
}
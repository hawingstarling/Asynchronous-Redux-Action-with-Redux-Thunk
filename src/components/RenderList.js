import { useSelector } from 'react-redux'

function RenderList() {
    const user = useSelector(state => state.reducerFetchUser.user)
    const loading = useSelector(state => state.reducerFetchUser.loading)
    const error = useSelector(state => state.reducerFetchUser.error)
    return ( 
        <>
            { loading && <h3>Search...</h3> }
            { error && <h3>{error.message}</h3>}
            { user && (
                <>
                    <img src={user.avatar_url} alt="avatar" />
                    <p>id: {user.id}</p>
                    <p>name: {user.name}</p>
                </>
            )}
        </>
     );
}

export default RenderList;
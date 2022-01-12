import Videos from '../components/Videos/Videos'
import VideoDetail from "../components/VideoDetail/VideoDetail"

export const routes = [
    { path: "/", element: Videos, exact: true },
    { path: "/video/:id", element: VideoDetail, exact: true }
]
import { SearchResults } from './pages/SearchResults.jsx';
import { SearchPage } from './pages/SearchPage.jsx';
import { FullVideoPage } from './pages/FullVideoPage';
import { VideoList } from './components/video-list/VideoList';
import { App } from './App';
import { EmptyResults } from './components/empty-results/EmptyResults';

export default
{
    component: App,
    routes: [
        {
            path: '/',
            exact: true,
            component: SearchPage
        },
        {
            path: '/search',
            component: SearchPage
        },
        {
            path: '/search/:query',
            component: SearchResults
        },
        {
            path: '/video',
            component: VideoList
        },
        {
            path: '/video/:id',
            component: FullVideoPage
        },
        {
            path: '*',
            component: EmptyResults
        }
    ]
}

import { HomePage, TasksPage, ProfilePage, HistoryPage, FacultyPage, RegionPage, CareerPage, EmployeePage, FormalitiesPage, StudentsPage } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    {
        path: '/profile',
        element: ProfilePage
    },
    {
        path: '/home',
        element: HomePage
    },
    {
        path: '/employee',
        element: EmployeePage
    },
    {
        path: '/region',
        element: RegionPage
    },
    {
        path: '/faculty',
        element: FacultyPage
    },
    {
        path: '/career',
        element: CareerPage
    },
    {
        path: '/history',
        element: HistoryPage
    },
    {
        path: '/students',
        element: StudentsPage
    },
    {
        path: '/formalities',
        element: FormalitiesPage
    }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});

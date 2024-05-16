import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classnames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';
import { Layout } from 'antd';
import { Footer } from "widgets/Footer";

const App = () => {
    const { theme } = useTheme();

    return (
        <Layout className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Sidebar />
                <Layout className="content-page">
                    <Navbar />
                    <AppRouter />
                    <Footer />
                </Layout>
            </Suspense>
        </Layout>
    );
};

export default App;

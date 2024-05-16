import { classNames } from 'shared/lib/classNames/classnames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { Layout } from 'antd';
import {RoutePath} from "shared/config/routeConfig/routeConfig";
const { Header } = Layout;

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <Header className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>О сайте</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.map}>Карта</AppLink>
        </div>
        <div>
            Войти
        </div>
    </Header>
);

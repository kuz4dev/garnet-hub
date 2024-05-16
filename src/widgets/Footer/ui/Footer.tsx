import { classNames } from 'shared/lib/classNames/classnames';
import cls from './Footer.module.scss';
import { Layout } from 'antd';
const { Footer } = Layout;

interface FooterProps {
    className?: string;
}

export const _Footer = ({ className }: FooterProps) => (
    <Footer className={classNames(cls.Footer, {}, [className])}>
        Garnet Geo, ©2024
    </Footer>
);

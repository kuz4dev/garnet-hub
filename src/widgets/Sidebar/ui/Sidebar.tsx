import { useState } from 'react';
import cls from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classnames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';

interface SidebarProps {
    className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={classNames(cls.switchers, {}, [])}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
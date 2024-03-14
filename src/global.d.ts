declare module '*.scss' {
    interface IClassNames {
        [classNaem: string]: string;
    }

    const classNames: IClassNames;
    export = classNames;
}
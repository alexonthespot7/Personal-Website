export interface Project {
    name: string;
    info: string;
    description: string;
    category: string;
    stack: string;
    github: {
        frontend: string;
        backend: string;
    };
    demo: string;
    pictures: string[];
    main: string;
}

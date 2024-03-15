
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class ProjectsSearchInput {
    name: string;
    bedrooms: number;
    region: string;
}

export abstract class IQuery {
    abstract projectsSearch(projectsSearchInput: ProjectsSearchInput): Nullable<Project> | Promise<Nullable<Project>>;
}

export class Project {
    id: string;
    name: string;
    bedrooms: number;
    region: string;
}

type Nullable<T> = T | null;

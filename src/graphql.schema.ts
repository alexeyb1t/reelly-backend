
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class ProjectsSearchInput {
    name?: Nullable<string>;
    bedrooms?: Nullable<number>;
    region?: Nullable<string>;
}

export abstract class IQuery {
    abstract projectsSearch(projectsSearchInput: ProjectsSearchInput): Nullable<Nullable<ProjectSearchResponse>[]> | Promise<Nullable<Nullable<ProjectSearchResponse>[]>>;
}

export class ProjectSearchResponse {
    id?: Nullable<number>;
    name?: Nullable<string>;
    bedrooms?: Nullable<number>;
    region?: Nullable<string>;
}

type Nullable<T> = T | null;

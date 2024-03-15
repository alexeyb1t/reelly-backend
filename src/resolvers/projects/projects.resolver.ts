import { Args, Query, Resolver } from '@nestjs/graphql';
import {
  ProjectSearchResponse,
  ProjectsSearchInput,
} from '../../graphql.schema';
import { ProjectsService } from '../../services/projects/projects.service';

@Resolver('Project')
export class ProjectsResolver {
  constructor(private projectsService: ProjectsService) {}

  @Query()
  async projectsSearch(
    @Args('projectsSearchInput') projectsSearchInput: ProjectsSearchInput,
  ): Promise<ProjectSearchResponse[]> {
    return this.projectsService.projects(projectsSearchInput);
  }
}

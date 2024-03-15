import { Query, Resolver } from '@nestjs/graphql';
import { Project } from '../../graphql.schema';

@Resolver('Project')
export class ProjectsResolver {
  @Query()
  async projectsSearch(): Promise<Project[]> {
    return [];
  }
}

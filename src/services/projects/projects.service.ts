import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  ProjectSearchResponse,
  ProjectsSearchInput,
} from '../../graphql.schema';
import { Project as ProjectModel } from '@prisma/client';

@Injectable()
export class ProjectsService {
  constructor(private prismaService: PrismaService) {}

  async projects(
    params: ProjectsSearchInput,
  ): Promise<ProjectSearchResponse[]> {
    const { name, bedrooms, region } = params;

    const projects = await this.prismaService.project.findMany({
      where: {
        name: {
          contains: name || undefined,
        },
        bedrooms: bedrooms || undefined,
        region: region || undefined,
      },
    });

    return this.mapToProjectSearchResponse(projects);
  }

  private mapToProjectSearchResponse(
    projects: ProjectModel[],
  ): ProjectSearchResponse[] {
    return projects.map(({ id, name, bedrooms, region }) => ({
      id,
      name,
      bedrooms,
      region,
    }));
  }
}

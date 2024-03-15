import { Module } from '@nestjs/common';
import { ProjectsResolver } from './resolvers/projects/projects.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProjectsService } from './services/projects/projects.service';
import { PrismaService } from './services/prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        typePaths: ['./src/schema.graphql'],
        sortSchema: true,
        dataSources: () => {
          return {};
        },
      }),
    }),
  ],
  controllers: [],
  providers: [ProjectsResolver, ProjectsService, PrismaService],
})
export class AppModule {}

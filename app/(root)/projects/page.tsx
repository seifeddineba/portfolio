import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { ProjectExplorer } from "@/components/projects/project-explorer";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description,
};

export default function ProjectsPage() {
  return (
    <PageContainer
      title={pagesConfig.projects.title}
      description={pagesConfig.projects.description}
    >
      <ProjectExplorer />
    </PageContainer>
  );
}

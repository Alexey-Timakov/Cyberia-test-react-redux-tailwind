import { ErrorMessage, FormBlock, Loader, PageTitle, ProjectsBlock } from "@/components";
import { useGetAllProjectsQuery } from "@/store/services";
import { useGetAllCategoriesQuery } from "@/store/services";
import { CategoriesBlock } from "@/components";
import { useTypedSelector } from "@/hooks";

export const Cases = () => {
  const { activeCatagory } = useTypedSelector(state => state.categories);

  const { error, isError: projectsError, isLoading: isProjectsLoading, data: projects } = useGetAllProjectsQuery();

  const { isError: categoriesError, isLoading: isCategoriesLoading, data: categories } = useGetAllCategoriesQuery();

  if (categoriesError || projectsError) {

    return (
      <>
        <PageTitle className="mb-12 md:mb-[6.5rem]" />
        <ErrorMessage error={error!} />
      </>
    )
  }

  const selectedProjects = activeCatagory
    ? projects
      ? projects.filter(project => project.categories.some(cat => cat.name === activeCatagory.name))
      : []
    : projects;

  return (
    <div>
      <PageTitle className="mb-12 md:mb-[6.5rem]" />

      {(isProjectsLoading || isCategoriesLoading) &&
        <div className="text-center">
          <Loader />
        </div>
      }

      {categories && <CategoriesBlock categories={categories} />}

      {selectedProjects && <ProjectsBlock projects={selectedProjects} />}

      <FormBlock />
    </div>
  )
};
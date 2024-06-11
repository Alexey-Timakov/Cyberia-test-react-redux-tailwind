import { PageTitle } from "@/components";
import styles from "./Cases.module.scss";
import { useGetAllProjectsQuery } from "@/store/services";
import { useGetAllCategoriesQuery } from "@/store/services";
import { CategoriesBlock } from "@/components/CategoriesBlock/CategoriesBlock";

export const Cases = () => {

  const { isError: projectsError, isLoading: isProjectsLoading, data: projects } = useGetAllProjectsQuery();

  const { isError: categoriesError, isLoading: isCategoriesLoading, data: categories } = useGetAllCategoriesQuery();

  if (categoriesError || projectsError) {
    return <h1>Ошибка при загрузке</h1>
  }

  if (isProjectsLoading || isCategoriesLoading) {
    return <h1>Загрузка...</h1>
  }

  return (
    <div>
      <PageTitle />

      {categories && <CategoriesBlock categories={categories} />}

      <hr />
      <div className={styles.grid}>
        {projects && projects.map(pr => {
          return (
            <div style={{
              border: "0.2rem solid darkGrey"
            }} key={pr.id}>
              <div>{pr.title}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
};
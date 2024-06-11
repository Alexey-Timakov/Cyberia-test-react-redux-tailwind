import styles from "./Cases.module.scss";
import { useEffect } from "react";
import { useActions } from "@/store/actions";
import { useTypedSelector } from "@/hooks/reduxHooks";
import { useGetAllProjectsQuery } from "@/store/services/projectsServices";

export const Cases = () => {
  const { activeCatagory, categories, isLoading: isCategoriesLoading, error: categoriesError } = useTypedSelector(state => state.categories);
  // Redux and Redux Toolkit way to get data:
  // const { projects, isLoading: isProjectsLoading, error: projectsError } = useTypedSelector(state => state.projects);

  // RTK Query modern way to get data
  const { isError: projectsError, isLoading: isProjectsLoading, data: projects } = useGetAllProjectsQuery();

  const { fetchCategories, changeActiveCategory } = useActions();
  // const { fetchProjects } = useActions();

  useEffect(() => {
    fetchCategories()
    // fetchProjects()
  }, [])


  if (categoriesError || projectsError) {
    return <h1>Ошибка при загрузке</h1>
  }

  if (isProjectsLoading || isCategoriesLoading) {
    return <h1>Загрузка...</h1>
  }

  return (
    <div style={{
      margin: "0 5rem"
    }}>
      <h1>Cases</h1>

      <div className={styles.grid}>
        {categories.map(cat => {
          return (
            <div style={{
              border: activeCatagory?.id === cat.id ? "0.1rem solid red" : "0.1rem solid grey"
            }}
              onClick={() => changeActiveCategory(cat)}
              key={cat.id}
            >
              <div>{cat.name}</div>
            </div>
          )
        })}
      </div>
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
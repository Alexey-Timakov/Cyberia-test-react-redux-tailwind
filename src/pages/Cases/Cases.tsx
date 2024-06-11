import styles from "./Cases.module.scss";
import { useEffect } from "react";
import { useActions } from "@/store/actions";
import { useTypedSelector } from "@/hooks/reduxHooks";

export const Cases = () => {
  const { activeCatagory, categories, isLoading: isCategoriesLoading, error: categoriesError } = useTypedSelector(state => state.categories);
  const { projects, isLoading: isProjectsLoading, error: projectsError } = useTypedSelector(state => state.projects);

  const { fetchCategories, changeActiveCategory, fetchProjects } = useActions();

  useEffect(() => {
    fetchCategories()
    fetchProjects()
  }, [])

  if (projectsError || categoriesError) {
    return <h1>{projectsError || categoriesError}</h1>
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
        {projects.map(pr => {
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
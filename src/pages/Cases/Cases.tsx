import styles from "./Cases.module.scss";
import { useActions, useTypedSelector } from "@/hooks";
import { useGetAllProjectsQuery } from "@/store/services";
import { useGetAllCategoriesQuery } from "@/store/services";

export const Cases = () => {
  const { activeCatagory } = useTypedSelector(state => state.categories);

  const { isError: projectsError, isLoading: isProjectsLoading, data: projects } = useGetAllProjectsQuery();

  const { isError: categoriesError, isLoading: isCategoriesLoading, data: categories } = useGetAllCategoriesQuery();

  const { changeActiveCategory } = useActions();

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
        {categories && categories.map(cat => {
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
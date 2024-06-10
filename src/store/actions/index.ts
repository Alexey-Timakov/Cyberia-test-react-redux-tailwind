import { useDispatch } from "react-redux";
import * as CategoriesActionCreators from "./categoriesActions";
import * as ProjectsActionCreators from "./projectsActions";
import { bindActionCreators } from "redux";

const actionCreators = {
  ...CategoriesActionCreators,
  ...ProjectsActionCreators
}

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch)
}
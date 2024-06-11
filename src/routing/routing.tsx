import { Agency, Blog, Cases, Contacts, Main, Services } from "@/pages";
import { Routes, Route } from "react-router-dom";
import { TRoute } from "@/helpers/path";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path={`/${TRoute[TRoute.agency]}`} element={<Agency />} />
      <Route path={`/${TRoute[TRoute.blog]}`} element={<Blog />} />
      <Route path={`/${TRoute[TRoute.cases]}`} element={<Cases />} />
      <Route path={`/${TRoute[TRoute.contacts]}`} element={<Contacts />} />
      <Route path={`/${TRoute[TRoute.services]}`} element={<Services />} />
    </Routes>
  )
}
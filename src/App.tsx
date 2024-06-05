import "./App.module.scss";
import { Layout } from "@/layout";
import { Routing } from "./routing/routing";

export default function App() {
  return (
    <Layout>
      <Routing />
    </Layout>
  )
}
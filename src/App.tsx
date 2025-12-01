import type { PropsWithChildren } from "react";
import { NavLinks } from "./components/navlink";
import { NavLink } from "./components/navlinks";
import { Flex } from "./components/ui/flex";

interface FooterLink {
  text: string;
  link?: string;
}

interface PageProps {
  title: string;
  subtitle?: string;
  footer?: FooterLink[];
}

export function Page({ children, title = "Page title", subtitle, footer = [] }: PropsWithChildren<PageProps>) {
  return (
    <>
      <header>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </header>
      <main className="min-h-screen flex flex-col md:grid md:grid-cols-[auto_1fr] md:grid-rows-1 gap-12">
        <NavLinks title="Click something to scroll to it:" />
        <div className="w-full max-w-[800px] px-12">
          {children}
        </div>
      </main>
      <footer>
        {footer.map(item => {
          if (item.link) {
            return <a href={item.link} rel="nooper" target="_blank">{item.text}</a>
          }
          return <div>{item.text}</div>
        })}
        <a href="https://github.com/thavixt" rel="nooper" target="_blank">GitHub</a>
      </footer>
    </>
  )
}

function App() {
  // const setName = useStore(state => state.setName);
  // const onSubmit = async (formData: Person) => {
  //   setName(formData.name);
  //   await sleep();
  // };

  return (
    <Page title="Example page title">
      <Flex col>
        {new Array(50).fill(null).map((_, i) => (
          <div key={i}>Line ${i + 1}</div>
        ))}
        <NavLink text="Something's here" />
        {new Array(25).fill(null).map((_, i) => (
          <div key={i}>Line ${i + 51}</div>
        ))}
        <NavLink text="This other thing" />
        <p>... lots of stuff to say aswell.</p>
      </Flex>
    </Page>
  )
}

export default App

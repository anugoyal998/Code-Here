// chakra ui
import {Box, ChakraProvider,Heading,theme} from '@chakra-ui/react';
import { useState } from 'react';
import Editor from './components/Editor';
import Header from './components/Header';
import Split from 'react-split'
import './split.css'
import {useWindowSize} from './util/WindowSize'
function App() {
  const [html,setHTML] = useState('')
  const [css,setCSS] = useState('')
  const [js,setJS] = useState('')
  const output = `
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>
  `
  const windowSize = useWindowSize()
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Box>
        {windowSize>768?<Split className="split" minSize={250}>
        <Editor lang="xml" displayName="HTML" value={html} onChange={setHTML} />
        <Editor lang="css" displayName="CSS" value={css} onChange={setCSS} />
        <Editor lang="javascript" displayName="JS" value={js} onChange={setJS}/>
      </Split>:
      <>
       <Editor lang="xml" displayName="HTML" value={html} onChange={setHTML} />
        <Editor lang="css" displayName="CSS" value={css} onChange={setCSS} />
        <Editor lang="javascript" displayName="JS" value={js} onChange={setJS}/>
      </>}
      </Box>
      <Box>
        <Heading textAlign="center">Output</Heading>
      </Box>
      <Box>
        <iframe
        srcDoc={output}
        title="Output"
        sandbox="allow-scripts"
        frameborder="0"
        width="100%"
        height="100%"
        />
      </Box>
    </ChakraProvider>
  );
}

export default App;

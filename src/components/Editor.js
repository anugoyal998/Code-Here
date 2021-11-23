import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as CodeMirror} from 'react-codemirror2'
import { Box, Flex } from '@chakra-ui/layout';
import './style.css'
import { Heading } from '@chakra-ui/react';

const Editor = ({displayName,lang,value,onChange}) => {
    const onHandleChange = (editor,data,value) => {
        onChange(value)
    }
    return(
        <Flex direction="column"> 
            <Box bg="#eee" >
                <Heading as="h3" size="lg" ml="1">{displayName}</Heading>
            </Box>
            <CodeMirror
            onBeforeChange={onHandleChange}
            value={value}
            className="code-mirror-wrapper"
            options={{
                lineWrapping: true,
                lint: true,
                mode: lang,
                lineNumbers: true,
                autoCursor: true,
            }}
            />
        </Flex>
    )
}

export default Editor
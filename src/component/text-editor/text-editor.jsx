import { EditorState, convertFromRaw, convertToRaw } from "draft-js"
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html'
import { Editor, } from "react-draft-wysiwyg";
import { useState, useEffect } from 'react'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = (props) => {
    const value = props.val || "<p>write a word here</p>"
    const [editorState, onEditorStateChange] = useState(EditorState.createWithContent(stateFromHTML(value)))
    const convertRAW = convertToRaw(editorState.getCurrentContent())
    const convertHTML = stateToHTML(convertFromRaw(convertRAW))
    // console.log(editorState)

    useEffect(() => {
        onEditorStateChange(EditorState.createWithContent(stateFromHTML(value)))
    },[value])

    const onWrite = (text) => {
        props.callback(convertHTML)
        onEditorStateChange(text)
        
    }

    return (
        <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onWrite}
        />
    )
}


export default TextEditor

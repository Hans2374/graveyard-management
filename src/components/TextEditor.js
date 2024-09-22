import { EditorState, convertToRaw } from "draft-js";
import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";

import editor from "../components/TextEditor.module.css"
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    })
  }
  render() {
    const { editorState } = this.state;
    return (
      <div className={editor.text - editor}>
        <div className={editor.editor}>
          <Editor
            editorState={editorState}
            onEditorStateChange={this.onEditorStateChange}
            placeholder="Nhập văn bản ở đây..."
          />
        </div>
      </div>
    )
  }
}

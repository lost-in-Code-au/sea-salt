import React from "react";
import ReactDOM from "react-dom";

//megadraft
import {MegadraftEditor, editorStateFromRaw, editorStateToJSON} from "megadraft";
import { Editor, EditorState, convertFromRaw } from "draft-js";

//Import megadraft.css
import 'megadraft/dist/css/megadraft.css'

import dataJson from "./data.json";

class MegaDraft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: editorStateFromRaw(null),
            content: dataJson
        };
    }

    onChange = (editorState) => {
        this.setState({...this.state, editorState});
    }

    onSaveClick = () => {
        const {editorState} = this.state;
        console.log(editorState)
        const content = editorStateToJSON(editorState);
        // Your function to save the content
        // save_my_content(content);
        this.setState({...this.state, content});
        console.log(content);
    }

    render() {
        const { editorState, content } = this.state;

        return (
        //Add some margin left to show plugins sidebar
        <div style={{marginLeft: 80}} className="megadraft-editor">
            <MegadraftEditor
                editorState={editorState}
                onChange={this.onChange}
                placeholder='Add some text'/>
            <button onClick={this.onSaveClick}>
            Save
            </button>

            <MegadraftEditor editorState={editorStateFromRaw(dataJson)} readOnly={true} />
        </div>
        )
    }
}

export default MegaDraft;
marked.setOptions ({
    break:true
})

const renderer = new marked.Renderer();

function App() {
    const [text, setText] = React.useState("");

    return (
        <div className = "text-center px-4">
            <h1 className="p-4">My Markdown Preview</h1>
            <textarea
            name="text"
            id="text"
            row="10"
            vale={text}
            onChange={(e) => setText(e.target.value)}
            clasName="textarea"></textarea>
            <h3 className="mt-3">Output</h3>
            <Preview markdown={text}/>
        </div>
    );
}

function Preview({ markdown }) {
    return <div
       dangerouslySetInnerHTML={{
           __html: marked(markdown, {renderer: renderer}),
       }}
       id="preview"
    ></div>
}

ReactDOM.render(<App />, document.getElementById("root"));
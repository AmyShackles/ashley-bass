import "./App.css";

function App() {
    return (
        <div className="app">
            <h1 className="miss-you">We're going to miss you, Ashley!</h1>
            <iframe
                src="https://app.mural.co/embed/6764ec47-fafb-461c-bb54-99ed654cdc0e"
                width="640px"
                height="480px"
                style={{
                    minWidth: "640px",
                    minHeight: "480px",
                    backgroundColor: "#f4f4f4",
                    border: "1px solid #efefef",
                }}
                sandbox="allow-same-origin allow-scripts allow-modals allow-popups allow-popups-to-escape-sandbox"
            ></iframe>
        </div>
    );
}

export default App;

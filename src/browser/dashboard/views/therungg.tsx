import {render} from "../../render";
import {
	Button,
	createTheme,
	CssBaseline,
	TextField,
	ThemeProvider,
} from "@mui/material";
import {useReplicant} from "@nodecg/react-hooks";
import {useState} from "react";
import {LiveWebSocketResponse} from "therungg";
import {formatTime} from "../../util/format";

const theme = createTheme();

const App = () => {
	const [trgg] = useReplicant<LiveWebSocketResponse>("therungg");
	const [username, setUsername] = useState<string>("");

	return (
		<ThemeProvider theme={theme}>
			<div style={{display: "flex"}}>
				<TextField
					variant='filled'
					label='Username'
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				></TextField>
				<Button
					variant='contained'
					color='primary'
					onClick={() => {
						nodecg.sendMessage("start-websocket", username);
					}}
				>
					接続
				</Button>
			</div>
			<div>Best Possible Time: {formatTime(trgg?.run.bestPossible)}</div>
		</ThemeProvider>
	);
};

render(
	<>
		<CssBaseline />
		<App />
	</>,
);

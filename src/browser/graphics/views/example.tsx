import {useReplicant} from "@nodecg/react-hooks";
import {render} from "../../render";
import {LiveWebSocketResponse} from "therungg";
import {formatTime} from "../../util/format";

const App = () => {
	const [trgg] = useReplicant<LiveWebSocketResponse>("therungg");

	return <div>Best Possible Time: {formatTime(trgg?.run.bestPossible)}</div>;
};

render(
	<>
		<App />
	</>,
);

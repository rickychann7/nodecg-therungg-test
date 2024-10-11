import {LiveWebSocket, LiveWebSocketResponse} from "therungg";
import NodeCG from "@nodecg/types";

export const therungg = (nodecg: NodeCG.ServerAPI) => {
	nodecg.log.info("This is therungg extension.");

	const trggRep = nodecg.Replicant(
		"therungg",
	) as unknown as NodeCG.ServerReplicantWithSchemaDefault<LiveWebSocketResponse>;

	nodecg.listenFor("start-websocket", (username) => {
		wsStart(username);
	});

	const wsStart = (username: string) => {
		const ws = new LiveWebSocket(username);

		ws.onMessage = (data) => {
			if (!data) return;
			nodecg.log.info("[therun.gg]:", "Recieved updated data!");
			updateReplicantsValue(data);
		};
	};

	const updateReplicantsValue = (data: LiveWebSocketResponse) => {
		trggRep.value.run = data.run;
		trggRep.value.user = data.user;
	};
};

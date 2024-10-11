import type NodeCG from "@nodecg/types";
import {therungg} from "./therungg";

export default (nodecg: NodeCG.ServerAPI) => {
	therungg(nodecg);
};

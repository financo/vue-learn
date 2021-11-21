import {UPDATE_INFO} from "./mutation-types";

export default {
  aUpdateInfo(context) {
    setTimeout(() => {
      context.commit(UPDATE_INFO)
    }, 1000)
  }
}

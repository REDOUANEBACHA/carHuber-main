import { store } from "../store/reducer";

export function useUser()
{
  return store.getState().user
}
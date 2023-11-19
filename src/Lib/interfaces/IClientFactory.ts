import { IAppClient } from "./IAppClient";

export interface IClientFactory {
  build(): IAppClient;
}


import { CosmosClient } from "@azure/cosmos";

export class CosmosService {
  constructor() {
    this._ = CosmosClient;

    const cosmosOptions = {
      endpoint: "",
      key: "",
      userAgentSuffix: 'CosmosDirectUploadPoC'
    };
    var cosmosClient = new CosmosClient(cosmosOptions);
  }   
}

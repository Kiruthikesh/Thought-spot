import { init } from "@thoughtspot/visual-embed-sdk";
import { SearchEmbed } from "@thoughtspot/visual-embed-sdk/react";

import { AuthType} from "@thoughtspot/visual-embed-sdk";

const Thoughtspot = () => {
  
    init({
        thoughtSpotHost: "https://techpartners.thoughtspot.cloud/",
        authType: AuthType.None,
    });
  
  const searchOptions = {
    searchTokenString: "[quantity purchased] [region]",
    executeSearch: true,
  };

  
  return (
    <div >
        <SearchEmbed
      frameParams={{
        width: '100%',
        height:'90vh',
      }}
      dataSource={["cd252e5c-b552-49a8-821d-3eadaa049cca"]} 
      searchOptions={searchOptions}
      />
    </div>
    
  );
};
export default Thoughtspot;




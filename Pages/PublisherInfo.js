import React from "react"
import { WebView } from 'react-native-webview';

function Publisher(){
    return(
        <WebView
        source={{ uri: 'https://sehirteknolojileri.com' }}
        style={{ flex: 1 }}
      />
    )
}
export default Publisher;
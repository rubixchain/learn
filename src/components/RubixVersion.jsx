import React from 'react';
import {usePluginData} from '@docusaurus/useGlobalData';

// Renders the current rubixgoplatform release version (e.g. "v1.0.3"),
// sourced from the rubix-release plugin's global data.
export default function RubixVersion() {
  const {version} = usePluginData('rubix-release');
  return <>{version}</>;
}

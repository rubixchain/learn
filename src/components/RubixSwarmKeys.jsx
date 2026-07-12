import React from 'react';
import {usePluginData} from '@docusaurus/useGlobalData';

// Renders the swarm.key / testnetswarm.key links for the current release,
// pinned to the release tag via the rubix-release plugin's global data.
export default function RubixSwarmKeys() {
  const {swarmKey, testnetSwarmKey} = usePluginData('rubix-release');
  return (
    <>
      <a href={swarmKey}>
        <code>swarm.key</code>
      </a>{' '}
      and{' '}
      <a href={testnetSwarmKey}>
        <code>testnetswarm.key</code>
      </a>
    </>
  );
}

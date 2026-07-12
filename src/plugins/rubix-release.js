/**
 * Custom Docusaurus plugin: rubix-release
 *
 * Fetches the latest published rubixgoplatform release from the GitHub API at
 * build time and exposes its version + download URLs via global data. The
 * install / CLI-download pages read this (through <RubixDownloads/>,
 * <RubixVersion/>, <RubixSwarmKeys/>) instead of hard-coding a version, so a
 * rebuild automatically tracks the current release.
 *
 * Rebuilds are triggered by the site's own pushes plus a scheduled/dispatch
 * job in .github/workflows/github-pages.yml, so new releases flow through
 * without manual edits. NOTE: only the version string and download/key links
 * update automatically — API endpoints and command docs still need a human to
 * review them against the release, since those can change in breaking ways.
 *
 * If the API call fails (offline, rate-limited), it falls back to a pinned
 * version so the build never breaks.
 */
const REPO = 'rubixchain/rubixgoplatform';
const FALLBACK_VERSION = 'v1.0.3';
const FETCH_TIMEOUT_MS = 8000;

// Asset names have been stable across releases
// (rubixgoplatform-<tag>-<os>-<arch>.<ext>); derive URLs from the tag so the
// fallback works too and we don't depend on the API's asset list.
function buildRelease(version) {
  const downloadBase = `https://github.com/${REPO}/releases/download/${version}`;
  const blobBase = `https://github.com/${REPO}/blob/${version}`;
  const bin = (os, arch, ext) =>
    `${downloadBase}/rubixgoplatform-${version}-${os}-${arch}.${ext}`;
  return {
    version,
    releasesUrl: `https://github.com/${REPO}/releases`,
    assets: {
      linuxArm64: bin('linux', 'arm64', 'tar.gz'),
      linuxAmd64: bin('linux', 'amd64', 'tar.gz'),
      windowsAmd64: bin('windows', 'amd64', 'zip'),
      darwinArm64: bin('darwin', 'arm64', 'tar.gz'),
      darwinAmd64: bin('darwin', 'amd64', 'tar.gz'),
    },
    swarmKey: `${blobBase}/swarm.key`,
    testnetSwarmKey: `${blobBase}/testnetswarm.key`,
  };
}

async function fetchLatestVersion() {
  if (typeof fetch !== 'function') {
    return FALLBACK_VERSION;
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const headers = {
      'User-Agent': 'learn-rubix-docs',
      Accept: 'application/vnd.github+json',
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const res = await fetch(
      `https://api.github.com/repos/${REPO}/releases/latest`,
      {headers, signal: controller.signal},
    );
    if (!res.ok) {
      return FALLBACK_VERSION;
    }
    const data = await res.json();
    if (data && typeof data.tag_name === 'string' && data.tag_name.trim()) {
      return data.tag_name.trim();
    }
    return FALLBACK_VERSION;
  } catch (e) {
    return FALLBACK_VERSION;
  } finally {
    clearTimeout(timer);
  }
}

module.exports = function rubixReleasePlugin() {
  return {
    name: 'rubix-release',
    async loadContent() {
      const version = await fetchLatestVersion();
      return buildRelease(version);
    },
    async contentLoaded({content, actions}) {
      actions.setGlobalData(content);
    },
  };
};

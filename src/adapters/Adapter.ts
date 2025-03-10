const DEFAULT_CONNECT_TIMEOUT = 2000;

export interface AdapterConnectOptions {
  timeout: number;
}

export interface Adapter {
  enableDebug();
  getPeer(): RTCPeerConnection;
  resetPeer(newPeer: RTCPeerConnection);
  connect(opts?: AdapterConnectOptions);
}

export function isLoggedIn() {
  const netID = localStorage.getItem('netID');
  const metaMaskAddress = localStorage.getItem('metaMaskAddress');
  return netID && metaMaskAddress;
}

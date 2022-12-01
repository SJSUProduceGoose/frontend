export const formatTimestamp = (timestamp) => {
  return new Date(`${timestamp}Z`).toLocaleTimeString();
}
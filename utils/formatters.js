export const formatTimestamp = (timestamp) => {
  return new Date(`${timestamp}Z`).toLocaleTimeString(); //process.client ? new Date(`${timestamp}Z`).toLocaleTimeString() : ''
}
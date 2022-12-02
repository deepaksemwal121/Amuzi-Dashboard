export const Base64ToBlob = async (blob: RequestInfo | URL) => {
  const base64Response = await fetch(blob);
  const blobFile = await base64Response.blob();
  return blobFile;
};

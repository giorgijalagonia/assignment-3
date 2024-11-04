function copyObeject(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  return Array.isArray(obj)
    ? [...obj].map((item) => copyObject(item))
    : { ...obj, ...Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, copyObject(value)])) };
}

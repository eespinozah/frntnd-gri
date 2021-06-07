const env = {
  basePath: '/',
  handler: 'rest',
  lang: navigator.language,
  redirect: url => window.location.href = url,
  url: window.location.origin
};

export default env;

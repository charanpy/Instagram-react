import ApiRequestMethod from './helper';

const ApiRequest = async (route) => {
  // const uri = `${ApiRequestMethod.uri}${route}`;
  const uri = `${ApiRequestMethod.url}${route}`;
  const request = ApiRequestMethod.get;
  const response = await request(uri);
  return response;
};

export default ApiRequest;

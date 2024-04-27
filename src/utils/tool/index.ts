export const getImg = (baseUrl: string, detailUrl: string) => {
  return new URL(`../../assets/image/${baseUrl}/${detailUrl}`, import.meta.url)
    .href;
};

export default {
  getImg,
};

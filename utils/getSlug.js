import slugify from 'slugify';

const slugifyOptions = {
  lower: true,
  remove: /[*+~.()'"!:@]/g,
  locale: 'vi',
};

export const getSlug = (string) => {
  return slugify(string, slugifyOptions);
};
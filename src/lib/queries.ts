export const bioQuery = `*[_type == "bio"][0]{
  name,
  profile,
  headshot,
  contact[]{label, url}
}`;

export const cvQuery = `*[_type == "cv"][0]{
  title,
  pdf{asset->{url}},
  sections[]{
    heading,
    entries[]{year, title, description}
  }
}`;

export const homepageQuery = `*[_type == "homepage"][0]{
  title,
  image
}`;

export const showsQuery = `*[_type == "show"] | order(orderRank){
  _id,
  title,
  "slug": slug.current
}`;

export const worksQuery = `*[_type == "show"]{
  _id,
  title,
  "slug": slug.current,
  artworks[]{
    _key,
    title,
    date,
    medium,
    asset
  }
}`;

export const featuredWritingQuery = `*[_type == "writing" && featured == true][0]{
  _id,
  title,
  body
}`;

export const writingQuery = `*[_type == "writing" && featured != true] | order(year desc, title asc){
  _id,
  title,
  type,
  publication,
  date,
  year,
  link
}`;

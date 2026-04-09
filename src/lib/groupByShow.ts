export interface Show {
  _id: string;
  title: string;
  slug: string;
}

export interface Artwork {
  _key: string;
  title?: string;
  date?: string;
  medium?: string;
  image?: any;
  show?: Show;
}

export function groupByShow(
  items: Artwork[]
): { show: Show | null; works: Artwork[] }[] {
  const map = new Map<string, { show: Show | null; works: Artwork[] }>();

  for (const item of items) {
    const key = item.show?._id ?? "__no_show__";
    if (!map.has(key)) {
      map.set(key, { show: item.show ?? null, works: [] });
    }
    map.get(key)!.works.push(item);
  }

  return [...map.values()].sort((a, b) => {
    if (!a.show) return 1;
    if (!b.show) return -1;
    return a.show.title.localeCompare(b.show.title);
  });
}

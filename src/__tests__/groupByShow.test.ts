import { groupByShow, Artwork } from "../lib/groupByShow";

const showA = { _id: "s1", title: "Alpha Show", slug: "alpha-show" };
const showB = { _id: "s2", title: "Beta Show", slug: "beta-show" };

const artwork = (key: string, show?: typeof showA): Artwork => ({
  _key: key,
  title: `Artwork ${key}`,
  show,
});

describe("groupByShow", () => {
  it("returns an empty array for no input", () => {
    expect(groupByShow([])).toEqual([]);
  });

  it("groups artworks under their show", () => {
    const items = [artwork("1", showA), artwork("2", showA), artwork("3", showB)];
    const result = groupByShow(items);
    const groupA = result.find((g) => g.show?._id === "s1");
    expect(groupA?.works).toHaveLength(2);
  });

  it("groups artworks without a show under null", () => {
    const items = [artwork("1"), artwork("2")];
    const result = groupByShow(items);
    expect(result[0].show).toBeNull();
    expect(result[0].works).toHaveLength(2);
  });

  it("sorts shows alphabetically by title", () => {
    const items = [artwork("1", showB), artwork("2", showA)];
    const result = groupByShow(items);
    expect(result[0].show?.title).toBe("Alpha Show");
    expect(result[1].show?.title).toBe("Beta Show");
  });

  it("places ungrouped artworks last", () => {
    const items = [artwork("1"), artwork("2", showA)];
    const result = groupByShow(items);
    expect(result[0].show?._id).toBe("s1");
    expect(result[1].show).toBeNull();
  });

  it("preserves all artworks when grouping", () => {
    const items = [artwork("1", showA), artwork("2", showB), artwork("3")];
    const result = groupByShow(items);
    const total = result.reduce((sum, g) => sum + g.works.length, 0);
    expect(total).toBe(3);
  });

  it("handles a single artwork", () => {
    const result = groupByShow([artwork("1", showA)]);
    expect(result).toHaveLength(1);
    expect(result[0].works[0]._key).toBe("1");
  });
});

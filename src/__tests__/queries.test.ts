import {
  bioQuery,
  cvQuery,
  homepageQuery,
  showsQuery,
  worksQuery,
  featuredWritingQuery,
  writingQuery,
} from "../lib/queries";

describe("GROQ queries", () => {
  describe("bioQuery", () => {
    it("targets the bio document type", () => {
      expect(bioQuery).toContain('_type == "bio"');
    });
    it("fetches the first result", () => {
      expect(bioQuery).toContain("[0]");
    });
    it("selects name, profile, contact and headshot fields", () => {
      expect(bioQuery).toContain("name");
      expect(bioQuery).toContain("profile");
      expect(bioQuery).toContain("contact");
      expect(bioQuery).toContain("headshot");
    });
  });

  describe("cvQuery", () => {
    it("targets the cv document type", () => {
      expect(cvQuery).toContain('_type == "cv"');
    });
    it("fetches sections with entries", () => {
      expect(cvQuery).toContain("sections");
      expect(cvQuery).toContain("entries");
    });
    it("resolves the pdf asset URL", () => {
      expect(cvQuery).toContain("asset->{url}");
    });
  });

  describe("homepageQuery", () => {
    it("targets the homepage document type", () => {
      expect(homepageQuery).toContain('_type == "homepage"');
    });
    it("fetches the first result", () => {
      expect(homepageQuery).toContain("[0]");
    });
    it("selects title and image", () => {
      expect(homepageQuery).toContain("title");
      expect(homepageQuery).toContain("image");
    });
  });

  describe("showsQuery", () => {
    it("targets the show document type", () => {
      expect(showsQuery).toContain('_type == "show"');
    });
    it("orders by orderRank", () => {
      expect(showsQuery).toContain("orderRank");
    });
    it("selects _id and title", () => {
      expect(showsQuery).toContain("_id");
      expect(showsQuery).toContain("title");
    });
  });

  describe("worksQuery", () => {
    it("targets the show document type", () => {
      expect(worksQuery).toContain('_type == "show"');
    });
    it("includes artworks array with expected fields", () => {
      expect(worksQuery).toContain("artworks");
      expect(worksQuery).toContain("title");
      expect(worksQuery).toContain("date");
      expect(worksQuery).toContain("medium");
      expect(worksQuery).toContain("asset");
    });
  });

  describe("featuredWritingQuery", () => {
    it("targets writing documents marked as featured", () => {
      expect(featuredWritingQuery).toContain('_type == "writing"');
      expect(featuredWritingQuery).toContain("featured == true");
    });
    it("fetches only one result", () => {
      expect(featuredWritingQuery).toContain("[0]");
    });
    it("selects body for full text display", () => {
      expect(featuredWritingQuery).toContain("body");
    });
  });

  describe("writingQuery", () => {
    it("excludes featured pieces from the list", () => {
      expect(writingQuery).toContain("featured != true");
    });
    it("orders by year descending", () => {
      expect(writingQuery).toContain("year desc");
    });
    it("selects citation fields", () => {
      expect(writingQuery).toContain("type");
      expect(writingQuery).toContain("publication");
      expect(writingQuery).toContain("date");
      expect(writingQuery).toContain("link");
    });
  });
});

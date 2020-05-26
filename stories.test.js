// thankss https://github.com/codyogden/killedbygoogle
const data = require('./stories.json');
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

describe('stories', () => {
  it('objects should be valid', () => {
    data.forEach(story => {
      // All data is present for each product
      expect(story.date).not.toBeNull();
      expect(story.description).not.toBeNull();
      expect(story.title).not.toBeNull();
      expect(story.link).not.toBeNull();
      expect(story.type).not.toBeNull();

      // Check `date` format
      // Format: 08 Apr
      const dateSplit = story.date.split(' ');
      expect(dateSplit).toHaveLength(2);
      expect(story.date.split('')).toHaveLength(6);

      expect(months).toEqual(expect.arrayContaining([dateSplit[1]]));
    });
  });
});
